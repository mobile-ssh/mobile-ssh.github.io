---
layout: ../../../layouts/DocLayout.astro
title: "クラウド VM と wg-easy"
description: "公開 IP を持つクラウド VM を作成し、Mobile SSH に SSH 接続を保存して、別の手順で wg-easy をインストールします。認証情報、ネットワーク、リソースの削除も説明します。"
---

# クラウド VM と wg-easy

自分のクラウドアカウントに Linux VM を作成し、Mobile SSH で接続してから wg-easy をインストールし、WireGuard VPN を動かします。リソースの作成とインストールを分けることで、同じ VM を別のサービスに使ったり、既存のサーバーに VPN を導入したりできます。

**利用状況 — 2026年11月8日：**以下は、独立した VM 作成プラグインを使う予定のワークフローです。確認したローカルの Android **VPN Setup** 実装は、リソース作成、インストール、クライアントのインポートをまとめています。プラグインとカタログの変更は未公開で、実際のクラウドへの展開も未検証です。独立した AWS、Google Cloud、Azure の項目は、現在はマニフェストと設定だけのひな型です。VM の一覧表示や操作は未実装で、VM の作成もできません。カタログに作成機能がなければ、以下のコンソール操作と手動インストールを使ってください。新しいネイティブワークフローには対応する Android ビルドが必要です。同等の iOS 自動化は確認されていません。

## 役割を分けた2つのプラグイン

- **クラウド作成プラグイン：**プロバイダーの API で VM、公開アドレス、必要なネットワークリソースを作成し、SSH 接続を保存します。後で管理や削除に使うクラウドリソース ID を保持します。
- **wg-easy インストーラー：**選択した保存済みサーバーへ SSH 接続し、VPN サービスをインストールしてクライアント設定の作成を支援します。必要なのはサーバーへのアクセスと管理権限であり、クラウド API の認証情報ではありません。手動で作成した VM も使えます。

引き継ぐ情報には、保存済みサーバーの参照、公開アドレス、SSH ポート、ユーザー名、SSH 認証情報の参照、デプロイとリソースの ID を含めるべきです。クラウドのシークレットや SSH 秘密鍵を、プラグインの出力や VM にコピーしてはいけません。VPN の削除とクラウド VM の削除は別の操作です。

## アカウントとサーバー設定を準備する

1. クラウドアカウントと課金を有効にし、リージョンを選び、VM・ディスク・公開 IP の割り当て上限を確認します。VM、IPv4、ストレージ、通信の現在の料金を確認してください。無料枠が使えるとは仮定しません。
2. このガイドでは、**1 GB 以上の RAM と 20 GB 以上のディスク**を持つ専用の **Ubuntu 24.04 LTS** VM を、**amd64 または arm64** で選びます。これは今回の構成の基準であり、wg-easy 共通の最低要件ではありません。root または sudo 権限のあるアカウントを使ってください。無人インストールには対話不要の権限昇格が必要です。
3. SSH 鍵を選ぶか生成し、秘密鍵は Mobile SSH に保持します。クラウドへアップロードするのは公開鍵だけです。Lightsail のインポート手順では RSA SSH 鍵が必要です。他のプロバイダーやイメージには、それぞれ対応する鍵の種類があります。 現在の iOS SSH クライアントは Ed25519/ECDSA 秘密鍵に対応し、RSA 秘密鍵には対応していません。iOS で Lightsail を使う場合は、まずプロバイダーのブラウザー SSH コンソールでアプリが対応する公開鍵を `authorized_keys` に追加し、その鍵で接続してください。
4. **公開 IPv4** を選び、プロバイダーが提供するなら予約済み・静的アドレスを優先します。プライベートアドレス、IPv6 専用インスタンス、送信専用 NAT ゲートウェイは、このガイドのエンドポイント要件を満たしません。
5. SSH の送信元 CIDR を明示します。例えば、現在の公開 IPv4 の後ろに `/32` を付けます。プラグインの初期値でアクセスが制限されるとは思わないでください。モバイル通信と Wi-Fi の切り替えで、クラウドコンソールからのルール更新が必要になる場合があります。

クラウド API の認証情報はリソース管理を許可し、SSH 鍵はサーバーへのログインを許可します。両者は別物です。API シークレットはプロバイダー用の保護された認証情報フォームだけに入力し、音声プロンプト、端末コマンド、ソースファイルには入れないでください。ローカルの Android ワークフローでは、ネイティブコードがプロバイダー認証と認証情報の暗号化保存を担当します。必要な認証情報は対応するプロバイダーへ送られますが、VM やプラグインワーカーには送られません。オフライン音声モデルがあっても、クラウド API 呼び出し、ダウンロード、SSH がインターネットなしで動くわけではありません。

## クラウドを選び、公開アドレスを取得する

**コンソールで設定する場合**は、自分でプロバイダーにサインインします。Mobile SSH にその API 認証情報は不要です。今後の**プラグインによる作成**には、下表の認証情報を用意し、必要な作成、読み取り、ネットワーク、削除操作の権限を付与します。対応していれば、アクセス範囲を専用のプロジェクトやデプロイに限定します。どちらの方法でもアカウントのポリシーが適用されます。

SSH 公開鍵を使って選択した Ubuntu VM を作成し、次節の SSH ルールを適用します。リンク先で、プロバイダー固有のアドレスと認証の手順を確認できます。

<div class="doc-table" tabindex="0" role="region" aria-label="クラウドプロバイダーと公開アドレス">

| プロバイダー | API による作成の認証情報 | コンソールでの公開 IPv4 設定 |
| --- | --- | --- |
| [AWS Lightsail](./aws-lightsail/) | アクセスキー ID とシークレット。一時認証情報ではセッショントークンも指定します。必要な [Lightsail アクション](https://docs.aws.amazon.com/service-authorization/latest/reference/list_lightsail.html)を許可します。 | デュアルスタックの Ubuntu インスタンスを作り、RSA SSH 鍵を選び、[同じリージョンの静的 IPv4](https://docs.aws.amazon.com/lightsail/latest/userguide/lightsail-create-static-ip.html)を割り当てて接続します。Ubuntu イメージでは `ubuntu` を使います。 |
| [Google Cloud Compute Engine](./google-cloud/) | サービスアカウントの JSON 鍵とプロジェクト ID。VM・ディスク、ネットワーク、アドレス、ファイアウォール操作の権限が必要です。Network Admin だけではファイアウォールルールを書き込めません。[IAM 権限](https://docs.cloud.google.com/compute/docs/access/iam)を確認してください。 | Compute Engine API を有効にし、インターネットへの経路を持つ VPC・サブネットを選び、[リージョン外部 IPv4](https://docs.cloud.google.com/compute/docs/ip-addresses/configure-static-external-ip-address)を予約して VM に接続します。対応する SSH ユーザー名と鍵を設定します。OS Login には別途 ID 設定が必要です。 |
| [Microsoft Azure](./azure/) | テナント ID、アプリケーション・クライアント ID、クライアントシークレットの**値**、サブスクリプション ID。コンピューティング・ネットワーク権限を付与します。リソースグループ作成には親スコープの権限も必要です。[サービスプリンシパルの設定](https://learn.microsoft.com/en-us/entra/identity-platform/howto-create-service-principal-portal)を参照してください。 | 専用リソースグループと VNet・サブネットを作成します。[Standard の静的 IPv4 Public IP](https://learn.microsoft.com/en-us/azure/virtual-network/ip-services/public-ip-addresses) を VM の NIC に接続し、NSG を関連付けます。作成時に選んだ管理者ユーザー名を使います。 |
| [DigitalOcean](./digitalocean/) | 必要な Droplet、SSH 鍵、Reserved IP、ファイアウォールなどの[スコープ](https://docs.digitalocean.com/reference/api/create-personal-access-token/)を持つ個人アクセストークン。 | SSH 公開鍵で Ubuntu Droplet を作り、[Reserved IPv4](https://docs.digitalocean.com/products/networking/reserved-ips/how-to/create/) を割り当て、Cloud Firewall を接続します。Ubuntu の初期ログイン名は通常 `root` です。 |
| [Hetzner Cloud](./hetzner/) | プロジェクト専用の [Read & Write API トークン](https://docs.hetzner.com/cloud/api/getting-started/generating-api-token/)。 | [Primary IPv4](https://docs.hetzner.com/cloud/servers/primary-ips/overview/)、SSH 鍵、Cloud Firewall を設定した Ubuntu サーバーを作ります。`root` を使います。サーバー削除時に独立した Primary IP が残るか確認してください。 |
| [Akamai / Linode](./linode/) | Linodes と Firewalls の読み書き権限、および必要な[読み取りスコープ](https://techdocs.akamai.com/linode-api/reference/get-started)を持つ個人アクセストークン。 | 公開 IPv4 と SSH 鍵を設定した Ubuntu Linode を作り、[Cloud Firewall](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-cloud-firewalls) を接続します。`root` を使います。インスタンスが存続する間は割り当てられたアドレスを保持します。 |
| [Vultr](./vultr/) | API アクセスを有効にした API キー。[送信元 IP 許可リスト](https://docs.vultr.com/support/platform/users/how-can-i-manage-api-access-for-users)でスマートフォンの現在の接続を許可する必要があります。 | 公開のメイン IPv4、SSH 鍵、Firewall Group を持つ Ubuntu Cloud Compute インスタンスを作ります。`root` を使います。[割り当てアドレスはインスタンスの存続期間中有効](https://docs.vultr.com/support/products/compute/how-do-i-get-a-vultr-compute-instance-dedicated-ip-address)です。Reserved IP は別の選択肢です。 |
| [Oracle Cloud Infrastructure](./oracle-cloud/) | テナンシ・ユーザー OCID、API キーの指紋、[RSA 署名秘密鍵](https://docs.oracle.com/en-us/iaas/Content/API/Concepts/apisigningkey.htm)。対応する署名公開鍵も登録します。SSH 鍵とは別です。 | VCN、インターネットゲートウェイ、ゲートウェイへの経路を持つパブリックサブネットを作ります。[Reserved Public IPv4](https://docs.oracle.com/en-us/iaas/Content/Network/Tasks/managingpublicIPs.htm) を VM の VNIC のプライベート IP に割り当てます。Canonical Ubuntu は `ubuntu` を使い、セキュリティリスト・NSG を設定します。 |
| [OVHcloud Public Cloud](./ovhcloud/) | 対応する EU・CA・US API エンドポイント用のアプリケーションキー、アプリケーションシークレット、検証済みコンシューマーキー。[API 権限](https://docs.ovhcloud.com/en/guides/manage-and-operate/api/first-steps)を選択プロジェクトの操作に限定します。 | Ext-Net 経由の Basic Public IP、SSH 鍵、セキュリティグループを持つ Ubuntu [Public Cloud インスタンス](https://docs.ovhcloud.com/en/guides/public-cloud/compute/getting-started)を作ります。`ubuntu` を使います。Floating・Additional IP は独立したリソースです。 |
| [Scaleway Instances](./scaleway/) | IAM アプリケーションの API シークレットキーとプロジェクト UUID。インスタンス、ボリューム、IP、セキュリティグループ、SSH 鍵の権限が必要です。[API キー作成](https://www.scaleway.com/en/docs/iam/credentials/create-api-keys/)を参照してください。 | Ubuntu インスタンスを作り、[同じゾーンの柔軟なルーティング IPv4](https://www.scaleway.com/en/docs/instances/how-to/use-flexips/) を接続し、セキュリティグループを設定して起動します。イメージの SSH ログイン名を使います。通常は `root` です。 |

</div>

**[AWS EC2](./aws-ec2/) を使う場合：**[インターネットゲートウェイと `0.0.0.0/0` のゲートウェイルート](https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Internet_Gateway.html)を持つパブリックサブネットで Ubuntu を起動し、SSH 鍵とセキュリティグループを選び、[Elastic IP](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/working-with-eips.html) を関連付けます。`ubuntu` を使います。ローカルの自動アダプターは Lightsail 用で、EC2 はコンソール経由です。Elastic IP だけではプライベートサブネットに到達できるようにはなりません。

組織がサービスアカウント鍵、外部 IP、選択した SSH 認証方式を禁止している場合は、管理者が承認した構成を用意してください。コンソール設定でも制約は回避できません。

## リソースを作成して SSH 接続を保存する

予定されている分離ワークフローでは、**プラグイン**を開き、信頼できるカタログからプロバイダーの作成プラグインをインストールします。アカウントとリージョン、VM サイズ、イメージ、公開アドレス、SSH 鍵を選びます。作成を確定する前にリソースと費用を確認してください。作成操作のない管理専用プラグインではこの手順を行えないため、プロバイダーのコンソールを使います。

プロバイダーが VM の稼働を報告し、SSH が接続可能になるまで待ちます。VM、ディスク、アドレス、ファイアウォールのリソース ID を保持してください。リクエストがタイムアウトしたら、再作成の前に既存操作を確認または再開し、課金対象の VM を二重に作らないようにします。

返された接続を Mobile SSH に保存するか、**サーバー**で手動追加します。公開 IPv4、SSH ポート `22`、イメージのユーザー名、対応する秘密鍵の認証情報を指定します。接続前に、プロバイダーの信頼できるコンソールで SSH ホスト鍵の指紋を照合してください。身元確認と保存済み認証情報は[はじめに](../getting-started/)を参照してください。

## 2層のネットワークを設定する

公開アドレスには経路、クラウドのファイアウォール許可、ゲストのファイアウォール許可、待ち受け中のサービスが必要です。以下をプロバイダーのファイアウォール・セキュリティグループに設定し、ゲスト上の必要な既存ルールは保持します。

- **TCP 22：**選択した管理用 CIDR からの SSH を許可します。リソース作成時に設定します。
- **UDP 51820：**VPN を使うネットワークから許可します。移動するクライアントでは `0.0.0.0/0` が必要な場合があります。WireGuard 設定時に、クラウド作成プラグインかコンソールから追加します。
- **TCP 51821：**公開しません。wg-easy 管理画面はサーバーのループバックだけに公開し、SSH トンネルでアクセスします。
- **送信トラフィック：**パッケージ・コンテナーのダウンロード、DNS、VPN で運ぶインターネット通信を許可します。

Docker の[ファイアウォール動作](https://docs.docker.com/engine/install/ubuntu/#firewall-limitations)を確認してください。公開したコンテナーポートは UFW ルールを迂回する場合があります。管理画面を隠すために UFW だけに頼らず、プロバイダーのファイアウォールチェーン、特に OCI のストレージ・iSCSI ルールを消去しないでください。

<a id="wg-easy-install"></a>

## 選択した VM に wg-easy をインストールする

独立したインストーラーは、保存済み SSH サーバーを受け取り、サーバー変更の承認を求めるべきです。OS、権限、既存の Docker・VPN、ポート競合を確認し、永続データを保持して、導入したバージョンを報告する必要があります。クラウドアカウントのシークレットは不要です。クラウドのファイアウォール変更には、作成プラグインかコンソールを使います。

以前からある **WireGuard (wg-easy)** カタログプラグインには、有効な SSH セッションと Docker が必要です。新しい自動インストーラーとは異なり、ネイティブのクライアントインポートを保証しません。対応する更新版インストーラーか、新規の専用 VM で Mobile SSH の端末から以下の手動手順を使ってください。

### SSH 経由で手動インストールする

公式の [Ubuntu 手順](https://docs.docker.com/engine/install/ubuntu/)で Docker Engine と Compose プラグインをインストールし、バージョン指定された上流の構成をダウンロードします。

```sh
sudo mkdir -p /opt/wg-easy
sudo curl -fL https://raw.githubusercontent.com/wg-easy/wg-easy/v15.4.0/docker-compose.yml -o /opt/wg-easy/compose.yaml
```

起動前に、権限のある端末エディターで `/opt/wg-easy/compose.yaml` を編集します。`services.wg-easy` の下でイメージを置き換え、環境ブロックのコメントを解除・設定し、ポートマッピングを以下に置き換えます。永続ボリューム、モジュールのマウント、ケーパビリティ、ネットワーク、sysctls など、上流ファイルの残りは保持してください。

```yaml
image: ghcr.io/wg-easy/wg-easy:15.4.0@sha256:0e7bc9d34e86ddcaa92bc700d4d7dc9b33291dbc07ac8d13382f7c2095f949ec
environment:
  - INSECURE=true
ports:
  - "51820:51820/udp"
  - "127.0.0.1:51821:51821/tcp"
```

これは置換用の断片で、完全な Compose ファイルではありません。サービス配下の YAML インデントを保持してください。`INSECURE=true` はループバックの SSH トンネル用にだけ HTTP を許可します。管理ポートをインターネットに公開しないでください。コンテナーの待ち受けとホスト側のループバックマッピングは別です。上流の [HTTP 設定](https://wg-easy.github.io/wg-easy/latest/examples/tutorials/reverse-proxyless/)を参照してください。

```sh
cd /opt/wg-easy
sudo docker compose -f compose.yaml config --quiet
sudo docker compose -f compose.yaml up -d
sudo docker compose -f compose.yaml ps
```

コンテナーの `/etc/wireguard` データは永続ボリュームに保持します。古い `PASSWORD`、`PASSWORD_HASH`、`WG_HOST` の手順を v15 に適用せず、設定ウィザードを使ってください。イメージは意図的に固定しています。更新には新バージョンの確認と固定参照の変更が必要で、`pull` だけでは更新されません。

## 管理画面を開いてクライアントを追加する

Mobile SSH の[ローカルポートフォワーディング](../port-forwarding/)で、ローカルポート `51821`、リモートホスト `127.0.0.1`、リモートポート `51821` を設定します。SSH 接続を維持し、同じスマートフォンで `http://127.0.0.1:51821` を開きます。ローカルポートが使用中なら別のポートを選び、ブラウザーの URL にもその番号を使ってください。

wg-easy の[初回設定ウィザード](https://wg-easy.github.io/wg-easy/latest/guides/setup/)で管理者アカウントを作り、新規インストールを選び、VPN エンドポイントを VM の公開 IPv4 または DNS 名とポート `51820` に設定します。VPN エンドポイントは管理画面のループバックアドレスやポート `51821` ではありません。

端末ごとにクライアントを作成し、WireGuard の `.conf` をダウンロードします。Mobile SSH のビルドに機能がある場合は、**VPN → WireGuard** を開き、プロファイルを追加してファイルをインポートし、保存します。現行 Android・iOS ソースはファイルインポートに対応していますが、インストール済みビルドを確認してください。ローカルの Android 統合ワークフローは直接インポートできますが、以前のプラグインや iOS の自動化でも可能という約束ではありません。設定ファイルと QR コードには秘密鍵が含まれるので、非公開で保管してください。

## VPN を検証し、問題に対処する

プロファイルを開始し、OS の VPN 要求を承認します。ピアとの最近のハンドシェイクと通信カウンターの増加を確認し、DNS と想定するインターネット・プライベートネットワークの経路を試します。インポート済みプロファイルや起動中コンテナーだけでは、VPN が動作している証拠になりません。

- **VM 作成が拒否される：**課金、割り当て上限、リージョンの空き容量、認証情報の期限、正確な IAM 権限を確認します。Google Cloud のファイアウォール書き込みには Network Admin 以外の権限が必要です。
- **SSH がタイムアウトする：**公開アドレス、サブネットの経路、TCP 22 のルール、スマートフォンの現在の送信元 IP を確認します。認証失敗では、通常イメージのユーザー名と SSH 鍵の確認が必要です。
- **管理画面に接続できない：**SSH 転送を接続したままにし、コンテナーの状態とループバックのポートマッピングを確認して、HTTP がトンネル用にだけ有効になっていることを確かめます。
- **WireGuard のハンドシェイクがない：**クライアントのエンドポイント、両方のファイアウォール層の UDP 51820、クライアント鍵、サーバーの待ち受けを確認します。
- **ハンドシェイク後に通信できない：**転送・NAT、DNS、経路の重複、`AllowedIPs` を確認します。IPv4 フルトンネルは `0.0.0.0/0` を使います。IPv6 は別途評価してください。上流 IPv6 のない VM は IPv6 のインターネット出口を提供できず、IPv4 だけの経路では IPv6 が VPN 外に出る可能性があります。

## クライアントを削除し、クラウド料金を止める

ローカルプロファイルを捨てる前に、wg-easy でクライアントを失効させます。Mobile SSH のプロファイル削除では、サーバー側のピア鍵は失効しません。VPN コンテナーや永続データを削除する前に、必要な設定を安全にバックアップしてください。

所有する作成プラグインかプロバイダーのコンソールで不要な VM を削除し、残ったディスク、スナップショット、予約済み・公開アドレス、ネットワークリソースを確認します。専用の Azure リソースグループを削除する前に中身を確認してください。プラグイン管理のデプロイに無関係なリソースを混ぜないようにします。

VM の停止、設定ジョブのキャンセル、プラグインのアンインストールは、リソース削除や課金停止を保証しません。コンソールで作成したリソースは自分で削除する必要があります。削除が確認できるまで、プロバイダーのリソース ID を保持してください。
