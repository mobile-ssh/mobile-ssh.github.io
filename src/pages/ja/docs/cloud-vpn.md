---
layout: ../../../layouts/DocLayout.astro
title: "クラウド VM と wg-easy"
description: "公開 IP を持つクラウド VM を作成し、Mobile SSH に SSH 接続を保存して、別の手順で wg-easy をインストールします。認証情報、ネットワーク、リソースの削除も説明します。"
---

# クラウド VM と wg-easy

自分のクラウドアカウントに Linux VM を作成し、wg-easy で WireGuard VPN を運用します。互換性のある Android ビルドでは、公開済みの **VPN Setup** プラグインが 1 つのウィザードで VM 作成、wg-easy のインストール、クライアント取り込みを行えます。事業者のコンソールで VM を作ってから Mobile SSH でインストールする方法や、既存の公開サーバーを使う方法もあります。

**提供状況 — 2026 年 11 月 19 日:** **VPN Setup 1.0.7** は[標準のプラグインカタログ](https://github.com/mobile-ssh/mobile-ssh-plugins/tree/main/plugins/vpnsetup)で公開されています。基本設定にはプラグインブリッジ **1.3.0**、サーバー更新には **1.4.0**、条件を満たす終了済み項目の削除には **1.5.0** が必要です。利用可否はインストールした Android ビルドとリリーストラックによります。プラグインの公開は、特定のアプリ版が自分に配布済みであることを意味しません。同等の iOS 自動化は確認されていません。使えない場合は以下のコンソール操作と手動手順を使ってください。

## ウィザードか手動の手順を選ぶ

- **クラウド API で作成:** VPN Setup が事業者のアカウントで VM とネットワークリソースを作り、SSH 接続を保存し、wg-easy をインストールしてクライアントを取り込みます。後の削除に備え、リソース ID と所有記録を保持します。
- **クラウドコンソールで作成、または既存サーバーを使用:** 自分で VM を作り、公開 IPv4、SSH ユーザー名、鍵を VPN Setup に指定するか、以下の手動インストールを行います。自分のサーバーへのインストールにはクラウド API 認証情報は不要です。

公開済みプラグインはリソース作成とインストールを一体化しています。独立した作成用・インストール用プラグインへの分割は計画段階です。API で作成したリソースと持ち込みサーバーでは削除動作が異なります。詳しくは後述します。記録された Hetzner の実環境テストでは、Android エミュレーター上で設定、VPN 通信、クライアント管理、非公開の管理アクセス、削除を確認しました。すべての事業者、アカウントポリシー、実機端末での実環境検証が済んだことを意味するものではありません。

## アカウントとサーバー設定を準備する

1. クラウドアカウントと課金を有効にし、リージョンを選び、VM・ディスク・公開 IP の割り当て上限を確認します。VM、IPv4、ストレージ、通信の現在の料金を確認してください。無料枠が使えるとは仮定しません。
2. このガイドでは、**1 GB 以上の RAM と 20 GB 以上のディスク**を持つ専用の **Ubuntu 24.04 LTS** VM を、**amd64 または arm64** で選びます。これは今回の構成の基準であり、wg-easy 共通の最低要件ではありません。root または sudo 権限のあるアカウントを使ってください。無人インストールには対話不要の権限昇格が必要です。
3. SSH 鍵を選ぶか生成し、秘密鍵は Mobile SSH に保持します。クラウドへアップロードするのは公開鍵だけです。Lightsail のインポート手順では RSA SSH 鍵が必要です。他のプロバイダーやイメージには、それぞれ対応する鍵の種類があります。 現在の iOS SSH クライアントは Ed25519/ECDSA 秘密鍵に対応し、RSA 秘密鍵には対応していません。iOS で Lightsail を使う場合は、まずプロバイダーのブラウザー SSH コンソールでアプリが対応する公開鍵を `authorized_keys` に追加し、その鍵で接続してください。
4. **公開 IPv4** を選び、プロバイダーが提供するなら予約済み・静的アドレスを優先します。プライベートアドレス、IPv6 専用インスタンス、送信専用 NAT ゲートウェイは、このガイドのエンドポイント要件を満たしません。
5. SSH の送信元 CIDR を明示します。例えば、現在の公開 IPv4 の後ろに `/32` を付けます。プラグインの初期値でアクセスが制限されるとは思わないでください。モバイル通信と Wi-Fi の切り替えで、クラウドコンソールからのルール更新が必要になる場合があります。

手動手順は上記のアーキテクチャに対応します。VPN Setup は現在 **amd64/x86-64 の Ubuntu 24.04** を選び、**SSH ポート 22** で接続し、**Ed25519 または RSA** の SSH 鍵を受け付けます。Lightsail では RSA が必要です。このワークフローは ECDSA 鍵、プライベートアドレスのみのホスト、IPv6 のみの接続先に対応しません。既存サーバーには公開 IPv4 と非対話型の管理アクセスが必要です。

クラウド API 認証情報はリソース管理を許可し、SSH 鍵はサーバーログインを許可します。API の秘密情報は保護されたネイティブの認証フォームだけに入力し、音声プロンプト、ターミナルコマンド、ソースファイルには入れないでください。ネイティブコードが許可された事業者のエンドポイントで認証し、秘密情報は VM やプラグインのワーカーに渡りません。保存する認証情報には Android Keystore の暗号化を使います。保存しない場合はメモリ内のみで保持され、アプリのプロセス終了後に再入力が必要になることがあります。

音声操作は対応する非機密の質問への回答や進行状況の報告に使えますが、認証情報の入力と承認には画面操作が必要です。保護された認証フォームではマイク収録が一時停止し、再開には明示的な操作が必要です。音声設定には機能の有効化、ローカルモデルのダウンロード、マイク権限が必要です。音声モデルがオフライン対応でも、クラウド API、ダウンロード、SSH がインターネットなしで使えるわけではありません。

## クラウドを選び、公開アドレスを取得する

**コンソール設定**では事業者に自分でログインし、Mobile SSH に API 認証情報を渡す必要はありません。**VPN Setup の API による作成**では、以下の認証情報を用意し、必要な作成、読み取り、ネットワーク、削除の権限を付けます。プラグインは表の 10 事業者を実装しています。AWS EC2 は別のコンソール専用手順です。可能なら専用プロジェクトやデプロイの範囲に権限を絞ってください。どちらもアカウントのポリシーに従います。

SSH 公開鍵を使って選択した Ubuntu VM を作成し、次節の SSH ルールを適用します。リンク先で、プロバイダー固有のアドレスと認証の手順を確認できます。

<div class="doc-table" tabindex="0" role="region" aria-label="クラウドプロバイダーと公開アドレス">

| プロバイダー | API による作成の認証情報 | コンソールでの公開 IPv4 設定 |
| --- | --- | --- |
| [AWS Lightsail](./aws-lightsail/) | アクセスキー ID とシークレット。一時認証情報ではセッショントークンも指定します。必要な [Lightsail アクション](https://docs.aws.amazon.com/service-authorization/latest/reference/list_lightsail.html)を許可します。 | デュアルスタックの Ubuntu インスタンスを作り、RSA SSH 鍵を選び、[同じリージョンの静的 IPv4](https://docs.aws.amazon.com/lightsail/latest/userguide/lightsail-create-static-ip.html)を割り当てて接続します。Ubuntu イメージでは `ubuntu` を使います。 |
| [Google Cloud Compute Engine](./google-cloud/) | サービスアカウントの JSON 鍵とプロジェクト ID。VM/ディスク、ネットワーク、アドレス、ファイアウォール操作の権限が必要です。Compute Network Admin だけではファイアウォールルールを書き込めません。[IAM 権限](https://docs.cloud.google.com/compute/docs/access/iam)を確認してください。 | Compute Engine API を有効にし、インターネットへのルートがある VPC/サブネットを選び、[リージョン外部 IPv4](https://docs.cloud.google.com/compute/docs/ip-addresses/configure-static-external-ip-address) を予約して VM に付けます。対応する SSH ユーザー名と鍵を設定します。OS Login には独自の ID 設定が必要です。VPN Setup はメタデータ SSH 鍵を使い、VM の OS Login を無効にします。組織で OS Login が必須なら承認済みのコンソール構成を使ってください。 |
| [Microsoft Azure](./azure/) | テナント ID、アプリケーション/クライアント ID、クライアントシークレットの**値**、サブスクリプション ID。VPN Setup は専用のデプロイ用リソースグループを作るため、サブスクリプションまたは親スコープでのグループ作成・削除とコンピューティング/ネットワーク操作の権限が必要です。既存グループ内だけの権限では不十分です。[サービスプリンシパルの設定](https://learn.microsoft.com/en-us/entra/identity-platform/howto-create-service-principal-portal)を参照してください。 | 専用リソースグループと VNet/サブネットを作ります。[Standard の静的 IPv4 パブリック IP](https://learn.microsoft.com/en-us/azure/virtual-network/ip-services/public-ip-addresses) を VM の NIC に付け、NSG を関連付けます。作成時に指定した管理者ユーザー名を使います。 |
| [DigitalOcean](./digitalocean/) | 必要な Droplet、SSH 鍵、Reserved IP、ファイアウォールなどの[スコープ](https://docs.digitalocean.com/reference/api/create-personal-access-token/)を持つ個人アクセストークン。 | SSH 公開鍵で Ubuntu Droplet を作り、[Reserved IPv4](https://docs.digitalocean.com/products/networking/reserved-ips/how-to/create/) を割り当て、Cloud Firewall を接続します。Ubuntu の初期ログイン名は通常 `root` です。 |
| [Hetzner Cloud](./hetzner/) | プロジェクト専用の [Read & Write API トークン](https://docs.hetzner.com/cloud/api/getting-started/generating-api-token/)。 | [Primary IPv4](https://docs.hetzner.com/cloud/servers/primary-ips/overview/)、SSH 鍵、Cloud Firewall を設定した Ubuntu サーバーを作ります。`root` を使います。サーバー削除時に独立した Primary IP が残るか確認してください。 |
| [Akamai / Linode](./linode/) | Linodes と Firewalls の読み書き権限、および必要な[読み取りスコープ](https://techdocs.akamai.com/linode-api/reference/get-started)を持つ個人アクセストークン。 | 公開 IPv4 と SSH 鍵を設定した Ubuntu Linode を作り、[Cloud Firewall](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-cloud-firewalls) を接続します。`root` を使います。インスタンスが存続する間は割り当てられたアドレスを保持します。 |
| [Vultr](./vultr/) | API アクセスを有効にした API キー。[送信元 IP 許可リスト](https://docs.vultr.com/support/platform/users/how-can-i-manage-api-access-for-users)でスマートフォンの現在の接続を許可する必要があります。 | 公開のメイン IPv4、SSH 鍵、Firewall Group を持つ Ubuntu Cloud Compute インスタンスを作ります。`root` を使います。[割り当てアドレスはインスタンスの存続期間中有効](https://docs.vultr.com/support/products/compute/how-do-i-get-a-vultr-compute-instance-dedicated-ip-address)です。Reserved IP は別の選択肢です。 |
| [Oracle Cloud Infrastructure](./oracle-cloud/) | テナンシ・ユーザー OCID、API キーの指紋、[RSA 署名秘密鍵](https://docs.oracle.com/en-us/iaas/Content/API/Concepts/apisigningkey.htm)。対応する署名公開鍵も登録します。SSH 鍵とは別です。 | VCN、インターネットゲートウェイ、ゲートウェイへの経路を持つパブリックサブネットを作ります。[Reserved Public IPv4](https://docs.oracle.com/en-us/iaas/Content/Network/Tasks/managingpublicIPs.htm) を VM の VNIC のプライベート IP に割り当てます。Canonical Ubuntu は `ubuntu` を使い、セキュリティリスト・NSG を設定します。 |
| [OVHcloud Public Cloud](./ovhcloud/) | 対応する EU・CA・US API エンドポイント用のアプリケーションキー、アプリケーションシークレット、検証済みコンシューマーキー。[API 権限](https://docs.ovhcloud.com/en/guides/manage-and-operate/api/first-steps)を選択プロジェクトの操作に限定します。 | Ext-Net 経由の Basic Public IP、SSH 鍵、セキュリティグループを持つ Ubuntu [Public Cloud インスタンス](https://docs.ovhcloud.com/en/guides/public-cloud/compute/getting-started)を作ります。`ubuntu` を使います。Floating・Additional IP は独立したリソースです。 |
| [Scaleway Instances](./scaleway/) | IAM アプリケーションの API シークレットキーとプロジェクト UUID。インスタンス、ボリューム、IP、セキュリティグループ、SSH 鍵の権限が必要です。[API キー作成](https://www.scaleway.com/en/docs/iam/credentials/create-api-keys/)を参照してください。 | Ubuntu インスタンスを作り、[同じゾーンの柔軟なルーティング IPv4](https://www.scaleway.com/en/docs/instances/how-to/use-flexips/) を接続し、セキュリティグループを設定して起動します。イメージの SSH ログイン名を使います。通常は `root` です。 |

</div>

**[AWS EC2](./aws-ec2/) を使う場合:** [インターネットゲートウェイと、そこへの `0.0.0.0/0` ルート](https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Internet_Gateway.html)があるパブリックサブネットで Ubuntu を起動し、SSH 鍵とセキュリティグループを選び、[Elastic IP](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/working-with-eips.html) を関連付けます。ユーザー名は `ubuntu` です。VPN Setup の AWS 自動アダプターは Lightsail 用で、EC2 はコンソールを使います。Elastic IP だけではプライベートサブネットに到達できません。

組織がサービスアカウント鍵、外部 IP、選択した SSH 認証方式を禁止している場合は、管理者が承認した構成を用意してください。コンソール設定でも制約は回避できません。

## リソースを作成して SSH 接続を保存する

**プラグイン**を開き、標準カタログから **VPN Setup** をインストールして専用ページを開きます。**VPN を設定**で事業者を選び、**クラウド API で作成**または**クラウドコンソールで作成**を選びます。既存サーバーがある場合は既存の公開サーバーの項目を選びます。ネイティブフォームで認証情報を入力し、SSH 鍵を選択または生成して、場所、サイズ、イメージ、SSH 接続元 CIDR を確認します。アカウントから得た選択肢と事前チェックは対応構成の選択を助けますが、容量の確保やクォータを保証しません。事業者の現在の価格を確認して、画面で作成を承認してください。

VM と SSH が準備できるまで既存の操作を進めます。リクエストがタイムアウトしたり Android がバックグラウンド処理を止めたりした場合は、別の課金対象 VM を作らず、既存の操作を再開・確認してください。作成応答を受信できなかった場合、クラウド照会やコンソールでの確認が必要になることがあります。VM、ディスク、アドレス、ファイアウォールの ID を保存してください。停止済みのワークフローでもリソースを作成済みの場合があります。

VPN Setup は SSH ホスト鍵の承認を求め、接続を保存し、wg-easy をインストールして最初のクライアントを取り込みます。事業者の信頼できるコンソールと指紋を照合してください。手動では**サーバー**に公開 IPv4、SSH ポート `22`、イメージのユーザー名、対応する秘密鍵を登録します。Google Cloud と Azure の自動アダプターは `ubuntu` を使い、コンソールガイドではそこで設定したユーザー名を使います。身元確認と保存済み認証情報については[はじめに](../getting-started/)を参照してください。

## 2層のネットワークを設定する

公開アドレスには経路、クラウドのファイアウォール許可、ゲストのファイアウォール許可、待ち受け中のサービスが必要です。以下をプロバイダーのファイアウォール・セキュリティグループに設定し、ゲスト上の必要な既存ルールは保持します。

- **TCP 22:** 選択した管理用 CIDR から SSH を許可します。リソース作成時に設定してください。
- **UDP 51820:** VPN を利用するネットワークから許可します。移動するクライアントでは `0.0.0.0/0` が必要な場合があります。API 作成のデプロイでは VPN Setup が設定します。持ち込みサーバーではクラウドコンソールを使ってください。
- **TCP 51821:** 公開しないでください。wg-easy の管理画面はサーバーのループバックだけに公開し、SSH トンネルでアクセスします。
- **送信トラフィック:** パッケージとコンテナーの取得、DNS、VPN が通すインターネット通信を許可します。

Docker の[ファイアウォール動作](https://docs.docker.com/engine/install/ubuntu/#firewall-limitations)を確認してください。公開したコンテナーポートは UFW ルールを迂回する場合があります。管理画面を隠すために UFW だけに頼らず、プロバイダーのファイアウォールチェーン、特に OCI のストレージ・iSCSI ルールを消去しないでください。

<a id="wg-easy-install"></a>

## 選択した VM に wg-easy をインストールする

承認後、VPN Setup は SSH 経由でダイジェスト固定の wg-easy をインストールし、Ubuntu 24.04 で必要なら Docker を入れ、最初のクライアントを作ります。管理画面はサーバーのループバックに留め、事業者のファイアウォールチェーンを保持します。コンソール作成または既存のサーバーではクラウドファイアウォールを自分で設定します。インストーラーに必要なのは SSH アクセスと管理権限で、クラウド API の秘密情報ではありません。無関係な既存 VPN を引き継げると考えず、新しい専用サーバーを使ってください。

旧 **WireGuard (wg-easy)** カタログプラグインには接続中の SSH セッションと Docker が必要です。**VPN Setup** とは別で、ネイティブなクライアント取り込みを保証しません。互換性のある Android ビルドで VPN Setup を使うか、新しい専用 VM に Mobile SSH のターミナルから以下の手動手順を実行してください。

### SSH 経由で手動インストールする

公式の [Ubuntu 手順](https://docs.docker.com/engine/install/ubuntu/)で Docker Engine と Compose プラグインをインストールし、バージョン指定された上流の構成をダウンロードします。

```sh
sudo mkdir -p /opt/wg-easy
sudo curl -fL https://raw.githubusercontent.com/wg-easy/wg-easy/v15.5.0/docker-compose.yml -o /opt/wg-easy/compose.yaml
```

起動前に、権限のある端末エディターで `/opt/wg-easy/compose.yaml` を編集します。`services.wg-easy` の下でイメージを置き換え、環境ブロックのコメントを解除・設定し、ポートマッピングを以下に置き換えます。永続ボリューム、モジュールのマウント、ケーパビリティ、ネットワーク、sysctls など、上流ファイルの残りは保持してください。

```yaml
image: ghcr.io/wg-easy/wg-easy:15.5.0@sha256:071f79a639e9361123a5e57733107320207b844ddbbd92dfa6962f541fe8aac8
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

端末ごとにクライアントを作り、WireGuard の `.conf` をダウンロードします。対応する Mobile SSH ビルドでは **VPN → WireGuard** を開き、プロファイルを追加してファイルを読み込み、保存します。現在の Android と iOS のソースはファイル取り込みに対応しています。使用中のビルドを確認してください。VPN Setup は互換性のある Android ビルドに最初のクライアントを直接取り込みます。専用ページには**クライアントを追加**、**クライアントを失効**、**クライアント/QR を書き出す**、非公開 SSH トンネルによる**管理画面を開く**もあります。旧プラグインや iOS に同等の自動化があることを示すものではありません。設定ファイルと QR コードには秘密鍵が含まれるため、機密として扱ってください。

## VPN を検証し、問題に対処する

プロファイルを開始し、OS の VPN 要求を承認します。ピアとの最近のハンドシェイクと通信カウンターの増加を確認し、DNS と想定するインターネット・プライベートネットワークの経路を試します。インポート済みプロファイルや起動中コンテナーだけでは、VPN が動作している証拠になりません。

- **VM 作成が拒否される:** 課金、クォータ、地域の空き容量、認証情報の期限、正確な IAM 権限を確認します。Google Cloud のファイアウォール書き込みには Compute Network Admin より多い権限が必要です。組織で OS Login が強制される場合は承認済みのコンソール構成を使います。
- **SSH がタイムアウトする:** 公開アドレス、サブネットのルート、TCP 22 ルール、端末の現在の接続元 IP を確認します。認証失敗では通常、イメージのユーザー名と SSH 鍵の確認が必要です。
- **管理画面を開けない:** SSH 転送を接続したままにし、コンテナーの状態とループバックのポート割り当てを確認します。HTTP はトンネルだけに使ってください。
- **WireGuard のハンドシェイクがない:** クライアントの接続先、両ファイアウォール層の UDP 51820、クライアント鍵、サーバーの待ち受けを確認します。
- **ハンドシェイクはあるが通信できない:** 転送/NAT、DNS、ルート重複、`AllowedIPs` を確認します。IPv4 のフルトンネルは `0.0.0.0/0` を使います。IPv6 は別途検討してください。上流 IPv6 がない VM は IPv6 インターネット出口を提供できず、IPv4 のみのルートでは IPv6 が VPN の外を通る可能性があります。

## プラグインと VPN サーバーを更新する

**プラグイン**で利用可能な**更新**を使い、同じカタログの新しい互換版を取得します。新たに求められる権限を確認してください。設定、認証情報、デプロイ記録は保持されます。未完了の操作は開始時のプラグイン版を使い続けます。プラグインを更新するだけではサーバーの wg-easy コンテナーは更新されません。

プラグインブリッジ 1.4.0 以降では、**サーバーを確認**が実行中の wg-easy 版を報告し、**WireGuard を更新**がプラグインで固定された版を提供します。画面で承認してください。サービス変更前にイメージを取得し、サーバー鍵、クライアント、端末のプロファイルを保持します。その VPN を端末で使用中なら、アプリは更新前に切断します。終了後に再接続してください。管理対象のコンテナーを更新する機能で、ホスト OS の更新ではありません。

更新失敗時はイメージ取得の失敗、ロールバック成功、VPN が停止したままのロールバック失敗を区別します。サービスが復旧したと決めつけず、復旧用の確認や再試行に従ってください。手動インストールでは、固定イメージの変更確認とバックアップを自分で行います。上の新規インストール手順は移行ガイドではありません。

## クライアントを削除し、クラウド料金を止める

ローカルプロファイルを捨てる前に、wg-easy でクライアントを失効させます。Mobile SSH のプロファイル削除では、サーバー側のピア鍵は失効しません。VPN コンテナーや永続データを削除する前に、必要な設定を安全にバックアップしてください。

API で作ったデプロイでは、**デプロイを削除**が内容を確認したうえで事業者 API から所有するクラウドリソースを削除します。SSH が利用できない場合も使えます。削除が停止・失敗した場合は、残っていると報告されたリソースを確認し、削除を再開するかコンソールを調べてください。特に専用 Azure リソースグループなど、プラグイン管理下のデプロイに無関係なリソースを入れないでください。

コンソール作成または既存サーバーの場合、プラグインの削除は管理下の VPN インストールを除去しますが、VM や公開 IP は**削除しません**。不要になったら事業者コンソールで削除し、残るディスク、スナップショット、アドレス、ネットワークリソースを確認します。復旧中にアカウントや場所の設定を変えた場合は、元の Scaleway プロジェクトや Oracle Cloud コンパートメントを含め、以前のアカウントと場所も調べてください。

**ワークフローを停止**は操作を止めるだけで、リソースを削除しません。ブリッジ 1.5.0 以降の**一覧から削除**は、未完了の操作や残存する管理対象リソースがなく、忘れてよい項目だとアプリが確認できる場合だけ表示されます。消すのは端末の履歴で、クラウドリソースではありません。VM の停止やプラグインのアンインストールも課金停止を保証しません。削除確認までリソース ID を保持してください。
