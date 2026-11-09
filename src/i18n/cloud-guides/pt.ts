import type { CloudGuides } from "./types";

export const pt: CloudGuides = {
  "title": "Criar uma VM na {provider}",
  "description": "Criação passo a passo de uma VM na {provider}: IPv4 público, regras de firewall, acesso SSH pelo Mobile SSH, credenciais de API opcionais e remoção de recursos.",
  "intro": "Crie um servidor Ubuntu com IPv4 público na sua própria conta da {provider}. Siga as etapas do console, conecte pelo Mobile SSH e depois instale o wg-easy como uma tarefa separada.",
  "back": "Máquinas virtuais na nuvem e wg-easy",
  "indexHeading": "Guias passo a passo por provedor de nuvem",
  "indexIntro": "Escolha seu provedor para consultar as telas do console, configurações de IP público, usuário SSH, credenciais de API opcionais e remoção de recursos. AWS Lightsail e EC2 têm guias separados.",
  "cardAction": "Criar uma VM e conectar com Mobile SSH",
  "navLabel": "Escolher um provedor de nuvem",
  "openConsole": "Abrir o console do provedor",
  "availability": "Estas instruções usam o console do provedor. Há planos para plugins separados de criação de VMs; a implementação combinada Android VPN Setup é local e não foi publicada. A seção de API prepara um acesso futuro e não é necessária neste procedimento manual.",
  "availabilityLink": "Verificar a disponibilidade dos plugins",
  "checked": "Documentação dos consoles verificada em 8 de novembro de 2026.",
  "beforeHeading": "Antes de começar",
  "before": [
    "Ative o faturamento e verifique as cotas regionais de VMs, discos e IPs públicos. Confira o preço exibido antes de criar recursos; não presuma que exista uma camada gratuita ou que um plano específico esteja disponível.",
    "Para esta configuração, use Ubuntu 24.04 LTS com pelo menos 1 GB de RAM e 20 GB de armazenamento, ou o mínimo superior do provedor. Combine a arquitetura da CPU com a imagem. Esta é a base adotada pelo guia, não um mínimo universal do wg-easy.",
    "Mantenha uma chave privada SSH no Mobile SSH e envie apenas a chave pública. Ed25519 funciona nos clientes atuais de Android e iOS; as etapas do Lightsail explicam a importação RSA e a alternativa para iOS. Anote seu IPv4 público atual seguido de <code>/32</code> como origem SSH ou use seu CIDR de administração autorizado."
  ],
  "networkHeading": "Regras de rede para esta configuração",
  "networkRules": [
    "Permita a entrada de <code>TCP 22</code> a partir do CIDR de administração. Remova regras SSH mais abrangentes se forem desnecessárias; adicionar uma regra restrita não cancela automaticamente uma mais ampla. Atualize a origem quando o endereço público do telefone mudar.",
    "Para a etapa posterior da VPN, permita a entrada de <code>UDP 51820</code> a partir das redes dos clientes VPN; clientes que mudam de rede podem precisar de <code>0.0.0.0/0</code>. Se ativar IPv6, configure suas regras explicitamente.",
    "Mantenha <code>TCP 51821</code> fechado ao público. A interface de administração do wg-easy ficará vinculada ao loopback do servidor e será acessada por encaminhamento SSH.",
    "Permita o tráfego de saída necessário para DNS, downloads de pacotes e contêineres e VPN. Verifique os firewalls da nuvem e do sistema convidado; preserve as regras de armazenamento do provedor e as regras ICMP essenciais."
  ],
  "stepsHeading": "Criar o servidor e conectar",
  "sourceLink": "Instruções do provedor",
  "connectHeading": "Salvar o servidor no Mobile SSH",
  "connectText": "Abra Servidores, adicione um servidor e preencha estes valores. Selecione a credencial que contém a chave privada correspondente. Use o nome de usuário configurado se for diferente do exemplo do guia.",
  "hostLabel": "Host",
  "hostValue": "O IPv4 público da VM mostrado no console do provedor",
  "portLabel": "Porta",
  "userLabel": "Nome de usuário",
  "credentialLabel": "Autenticação",
  "credentialValue": "A credencial com a chave privada SSH correspondente",
  "identityText": "Obtenha a impressão digital da chave de host SSH pelo console confiável do provedor ou pelos registros de inicialização e compare-a antes de confiar na conexão. No Android, desative a aceitação automática de novas identidades se quiser revisar o primeiro uso. Investigue os avisos de mudança de chave antes de substituir uma identidade salva.",
  "connectionGuide": "Chaves SSH e verificação de identidades",
  "vpnHeading": "Instalar wg-easy em uma etapa separada",
  "vpnText": "Primeiro confirme que o servidor salvo abre um terminal e que seu usuário tem acesso root ou sudo. Depois siga o guia compartilhado de instalação do wg-easy: Docker, contêiner fixado a uma versão, administração privada por SSH, criação de clientes e verificação da VPN. O instalador precisa de acesso SSH, não do segredo da API de nuvem.",
  "vpnLink": "Continuar para as etapas de instalação do wg-easy",
  "apiHeading": "Credenciais de API opcionais para um plugin futuro",
  "apiIntro": "Pule esta seção se configurar pelo console. Crie credenciais apenas quando uma ferramenta de provisionamento compatível precisar delas. As listas de permissões abaixo orientam a preparação; não são políticas mínimas testadas para um plugin publicado.",
  "apiSecretNote": "Digite credenciais apenas em um formulário protegido compatível. Não coloque segredos de nuvem em instruções por voz, comandos de terminal ou na VM. Use o menor escopo compatível, anote a validade e revogue credenciais que não precisa mais.",
  "cleanupHeading": "Excluir recursos que não precisa mais",
  "cleanupWarning": "Parar a VM, cancelar uma tarefa de configuração ou remover um perfil do Mobile SSH não exclui recursos de nuvem nem garante o fim das cobranças. Guarde os IDs dos recursos até confirmar a exclusão e preserve os recursos não relacionados.",
  "providers": {
    "aws-lightsail": {
      "consoleSteps": [
        "Entre na sua conta AWS, abra Lightsail e selecione <strong>Criar instância</strong>. Escolha a região mais próxima do local pretendido para sua VPN.",
        "Selecione <strong>Linux/Unix → Apenas sistema operacional → Ubuntu 24.04 LTS</strong>. Escolha um plano de pilha dupla IPv4/IPv6 com pelo menos 1 GB de RAM e 20 GB de armazenamento; confira o preço exibido.",
        "Escolha o par de chaves SSH regional ou envie sua chave pública RSA. Guarde a chave privada com segurança, nomeie a instância e selecione <strong>Criar instância</strong>. O iOS precisa da configuração adicional de chave descrita abaixo.",
        "Abra <strong>Rede → Criar IP estático</strong>. Selecione a mesma região, associe o endereço a esta instância, dê um nome e crie-o. Anote o IPv4 estático.",
        "Na aba <strong>Rede</strong> da instância, restrinja SSH ao IPv4 público do telefone, mantendo <strong>Permitir SSH/RDP pelo navegador do Lightsail</strong>. Adicione a regra UDP 51820 compartilhada; revise as regras IPv6 separadamente e deixe TCP 51821 fechado.",
        "Para iOS, selecione <strong>Conectar → Conectar usando SSH</strong>. Adicione a chave pública Ed25519 do aplicativo como uma nova linha em <code>/home/ubuntu/.ssh/authorized_keys</code>, preservando as chaves existentes. O SSH do navegador usa uma chave separada do provedor; seu IPv4 estático está pronto."
      ],
      "apiSteps": [
        "Somente para uma futura ferramenta de provisionamento, crie uma identidade IAM dedicada com as ações necessárias de instâncias Lightsail, chaves SSH, IPs estáticos e firewall, incluindo remoção de recursos. Restrinja região e recursos onde houver suporte; esta não é uma política mínima testada.",
        "Em <strong>IAM → Usuários → Credenciais de segurança</strong>, crie uma chave de acesso apenas quando uma automação compatível precisar dela. Forneça o ID e o segredo pelo formulário nativo protegido; credenciais temporárias também exigem o token de sessão. Nunca use chaves de root."
      ],
      "cleanupSteps": [
        "Exclua a instância quando terminar. Revise separadamente snapshots e discos mantidos; parar uma instância não encerra todas as cobranças.",
        "Libere o IP estático separadamente após desassociá-lo. Excluir a instância não exclui o endereço."
      ]
    },
    "aws-ec2": {
      "consoleSteps": [
        "Abra EC2 na sua região AWS e selecione <strong>Executar instância</strong>. Nomeie o servidor e escolha uma AMI oficial da Canonical <strong>Ubuntu Server 24.04 LTS</strong>, conferindo seu publicador e arquitetura.",
        "Selecione um tipo de instância com pelo menos 1 GB de RAM e arquitetura correspondente. Em <strong>Configurar armazenamento</strong>, escolha pelo menos 20 GB para o volume de inicialização e confira os custos estimados dos recursos.",
        "Em <strong>Par de chaves</strong>, selecione uma chave existente ou crie/importe um par Ed25519 para Linux. Mantenha a chave privada correspondente disponível no aplicativo; a AWS instala a chave pública na instância.",
        "Em <strong>Configurações de rede</strong>, escolha uma sub-rede pública. Sua VPC precisa de um gateway de Internet associado e de uma rota <code>0.0.0.0/0</code> para ele. Ative um IPv4 público; o endereço estático será configurado abaixo.",
        "Crie ou selecione um grupo de segurança com as regras compartilhadas TCP 22 e UDP 51820. Restrinja SSH ao IPv4 público do telefone, deixe TCP 51821 fechado, selecione <strong>Executar instância</strong> e espere entrar em execução.",
        "Abra <strong>Rede e segurança → IPs elásticos → Alocar endereço IP elástico</strong>. Depois selecione <strong>Ações → Associar endereço IP elástico</strong> e escolha esta instância e seu IP privado principal. Anote o IPv4 estático; endereços IPv4 públicos geram cobranças."
      ],
      "apiSteps": [
        "Somente para uma futura ferramenta de provisionamento, crie uma identidade IAM dedicada que abranja criação de instâncias, recursos relacionados de AMI/rede/disco/chaves, tags, IPs elásticos e remoção de recursos. Permissões existentes de leitura/início/parada não bastam. Adicione <code>iam:PassRole</code> apenas se associar um perfil de instância.",
        "Crie ou obtenha as credenciais dessa identidade e forneça-as apenas por configurações nativas protegidas compatíveis. Prefira credenciais temporárias quando houver suporte, incluindo o token de sessão; nunca use chaves de acesso root. Este procedimento pelo console não precisa de chave API no Mobile SSH."
      ],
      "cleanupSteps": [
        "Encerre a instância. Confira <strong>Excluir ao encerrar</strong> e remova separadamente os volumes EBS ou snapshots mantidos que não deseja.",
        "Libere o IP elástico separadamente. Encerrar a instância desassocia o endereço, mas não o libera nem encerra suas cobranças."
      ]
    },
    "google-cloud": {
      "consoleSteps": [
        "Selecione ou crie um projeto Google Cloud, ative o faturamento e a <strong>API Compute Engine</strong>. Abra <strong>Compute Engine → Instâncias de VM → Criar instância</strong>.",
        "Nomeie a VM e escolha a região, a zona e uma máquina com pelo menos 1 GB de RAM. Em <strong>Sistema operacional e armazenamento → Alterar</strong>, selecione <strong>Ubuntu → Ubuntu 24.04 LTS</strong> e pelo menos 20 GB de armazenamento.",
        "Reserve um IPv4 externo estático regional na região da VM. Nas configurações de <strong>Rede</strong> da VM, selecione a VPC/sub-rede pretendida e escolha esse endereço como IPv4 externo da interface de rede. A VPC precisa de uma rota padrão para a Internet; crie uma rede e sub-rede adequadas se o projeto não tiver nenhuma.",
        "Nas configurações de chaves SSH da VM, adicione a chave pública do aplicativo com <code>mobileuser</code> como comentário de nome de usuário: <code>ssh-ed25519 AAAA… mobileuser</code>. Se o projeto impuser OS Login, use esse procedimento e o nome POSIX atribuído por ele; chaves de metadados não o substituem.",
        "Adicione uma tag de rede como <code>wg-vpn</code>. Crie regras de firewall de entrada direcionadas a essa tag para o acesso compartilhado TCP 22 e UDP 51820. Restrinja SSH ao IPv4 público do telefone e deixe TCP 51821 fechado.",
        "Termine de revisar a configuração da VM e selecione <strong>Criar</strong>. Espere a instância entrar em execução e anote o IPv4 externo e o usuário SSH escolhido acima. Não presuma que o usuário seja <code>ubuntu</code>."
      ],
      "apiSteps": [
        "Somente para uma futura ferramenta de provisionamento, use uma conta de serviço dedicada com os papéis Administrador de instâncias do Compute (v1), Administrador de rede do Compute e Administrador de segurança do Compute limitados ao projeto, ou equivalentes mais restritos. Administrador de rede do Compute não pode criar firewalls. Se associar uma conta de serviço à VM, conceda também Usuário da conta de serviço sobre ela.",
        "Se uma automação compatível precisar de chave JSON e a política da organização permitir, abra <strong>IAM e administrador → Contas de serviço → Chaves → Adicionar chave → Criar nova chave → JSON</strong>. Forneça o ID do projeto e o JSON por configurações nativas protegidas; nunca contorne uma restrição de chaves."
      ],
      "cleanupSteps": [
        "Exclua a VM e confira se os discos de inicialização e de dados são excluídos ou mantidos; remova discos e snapshots mantidos que não deseja.",
        "Libere o IPv4 externo reservado separadamente. Excluir a VM não libera um endereço reservado."
      ]
    },
    "azure": {
      "consoleSteps": [
        "Abra o portal Azure com uma assinatura ativa. Crie um grupo de recursos dedicado e abra <strong>Máquinas virtuais → Criar → Máquina virtual do Azure</strong>, selecionando essa assinatura e esse grupo.",
        "Digite um nome e uma região. Escolha <strong>Ubuntu Server 24.04 LTS – x64 Gen2</strong> e um tamanho compatível com pelo menos 1 GB de RAM. Mantenha um disco do sistema operacional de pelo menos 20 GB e confira o custo exibido.",
        "Escolha autenticação por <strong>Chave pública SSH</strong>, defina o nome do administrador como <code>azureuser</code> e selecione uma chave pública existente. Cole a chave pública Ed25519 do aplicativo; mantenha a chave privada no aplicativo.",
        "Em <strong>Rede</strong>, selecione ou crie uma VNet e uma sub-rede. Crie ou selecione um IPv4 público estático Standard na região apropriada e associe-o à configuração IP da interface de rede desta VM.",
        "Configure o grupo de segurança de rede aplicável com as regras compartilhadas TCP 22 e UDP 51820. Restrinja SSH ao IPv4 público do telefone; deixe TCP 51821 fechado. Se a sub-rede e a interface tiverem grupos de segurança, ambos precisam permitir o tráfego.",
        "Selecione <strong>Revisar + criar → Criar</strong>. Aguarde a implantação, abra a <strong>Visão geral</strong> da VM e anote o IPv4 público. A VM está pronta com a conta <code>azureuser</code> e a chave SSH escolhida."
      ],
      "apiSteps": [
        "Somente para uma futura ferramenta de provisionamento, crie um aplicativo dedicado de locatário único em <strong>Microsoft Entra ID → Registros de aplicativo</strong>. Anote os IDs de locatário, cliente e assinatura. Se necessário, crie um segredo de cliente em <strong>Certificados e segredos</strong> e copie seu Valor, não o ID do segredo.",
        "No <strong>Controle de acesso (IAM)</strong> do grupo de recursos, atribua ao principal permissões adequadas de computação/rede. Colaborador neste grupo dedicado é amplo, mas utilizável; prefira um papel mais restrito e testado. Crie o grupo previamente, pois uma permissão limitada a ele não pode criá-lo. Use configurações nativas protegidas para credenciais."
      ],
      "cleanupSteps": [
        "Se o grupo de recursos contiver apenas esta implantação, revise seu conteúdo e exclua o grupo quando terminar.",
        "Se mantiver o grupo, exclua a VM e confira as opções de exclusão de recursos associados. Exclua separadamente discos, interfaces de rede e IPs públicos mantidos que não deseja."
      ]
    },
    "digitalocean": {
      "consoleSteps": [
        "Abra <strong>Criar → Droplet</strong> no painel de controle. Escolha uma <strong>Região</strong> próxima com capacidade disponível. Use um projeto e nome de host que identifiquem este servidor; região, disponibilidade de planos e preços podem variar.",
        "Em <strong>Escolher uma imagem → Sistema operacional</strong>, selecione <strong>Ubuntu 24.04 LTS</strong>. Se aparecer um seletor de tipo de configuração, escolha <strong>Pacote</strong> e depois <strong>CPU compartilhada → Básico</strong>. Selecione pelo menos <strong>1 GB de RAM</strong> e <strong>20 GB de disco</strong>, ou o mínimo superior do provedor.",
        "Em <strong>Escolher método de autenticação → Chave SSH → Adicionar chave SSH</strong>, cole e nomeie sua chave pública, depois selecione-a. Mantenha a chave privada correspondente no dispositivo; uma chave de conta adicionada depois não é instalada automaticamente em Droplets existentes.",
        "Em <strong>Rede</strong>, mantenha <strong>Endereço IPv4 público</strong> selecionado. Defina a quantidade como <strong>1</strong>, confirme o nome de host e o projeto e clique em <strong>Criar Droplet</strong>. Desmarcar ambas as opções de endereço público cria um servidor somente privado.",
        "Abra <strong>Criar → Firewall</strong> e dê um nome. Substitua a origem SSH padrão que aceita qualquer lugar pelo CIDR de administração para <strong>TCP 22</strong>; opcionalmente adicione a regra <strong>UDP 51820</strong> do guia compartilhado. Mantenha regras de saída adequadas, escolha o servidor em <strong>Aplicar a Droplets</strong> e crie o firewall.",
        "Para manter o endereço após uma substituição, abra <strong>Rede → IPs reservados → Adicionar IP reservado</strong>. Escolha <strong>Endereço IPv4 → Atribuir ao Droplet</strong>, selecione este Droplet e confirme. Anote o IPv4 público atribuído quando terminar o provisionamento."
      ],
      "apiSteps": [
        "Somente para um futuro plugin compatível: abra <strong>Conta → API → Tokens → Gerar novo token</strong>. Digite um nome descritivo e uma validade.",
        "Escolha <strong>Escopos personalizados</strong> para as operações e dependências de Droplets, chaves SSH, firewall e IPs reservados exigidas pelo procedimento implementado. Evite escolher Acesso completo por padrão; salve o token quando for exibido."
      ],
      "cleanupSteps": [
        "Após salvar os dados necessários, abra <strong>Configurações → Destruir</strong>, revise os recursos associados, digite o nome do Droplet e confirme. Volumes e snapshots não selecionados permanecem; backups automáticos mantêm suas datas de expiração.",
        "Abra <strong>Rede → IPs reservados → … → Excluir</strong> para cada endereço desnecessário e confirme <strong>Excluir IP reservado</strong>. Endereços e outros recursos mantidos podem continuar gerando cobranças."
      ]
    },
    "hetzner": {
      "consoleSteps": [
        "Abra o projeto pretendido e depois <strong>Firewalls → Criar firewall</strong>. Nomeie o firewall e permita a entrada de <strong>TCP 22</strong> a partir do CIDR de administração. Opcionalmente adicione a regra <strong>UDP 51820</strong> do guia compartilhado. Deixar as regras de saída vazias permite o tráfego de saída.",
        "Abra <strong>Servidores → Adicionar servidor</strong>. Escolha uma <strong>Localização</strong> próxima onde o tipo de servidor selecionado esteja disponível. Mantenha o firewall e o servidor no mesmo projeto; a disponibilidade pode variar conforme o local e a capacidade atual.",
        "Escolha um <strong>Tipo</strong> disponível com pelo menos <strong>1 GB de RAM</strong> e <strong>20 GB de disco</strong>, ou o mínimo superior do provedor. Em <strong>Imagem → Imagens de sistema operacional</strong>, selecione <strong>Ubuntu 24.04</strong> correspondente à arquitetura do servidor escolhido.",
        "Em <strong>Rede</strong>, ative um <strong>IPv4</strong> público. Selecione um <strong>IPv4 primário</strong> não atribuído no mesmo projeto e localização ou deixe a Hetzner criar um. Um servidor somente privado ou somente IPv6 não atende ao requisito de IPv4 público deste guia.",
        "Em <strong>Chave SSH</strong>, adicione ou selecione sua chave pública. Em <strong>Firewalls</strong>, selecione o firewall criado antes. As chaves de conta selecionadas aqui são instaladas na criação; adicionar outra chave de conta depois não atualiza este servidor.",
        "Digite um <strong>Nome</strong> reconhecível, confira os backups opcionais e o custo total e clique em <strong>Criar e comprar agora</strong>. Aguarde o servidor ficar pronto e anote o IPv4 primário. Mantenha esse recurso IP se precisar reutilizar o endereço."
      ],
      "apiSteps": [
        "Somente para um futuro plugin compatível: abra <strong>Segurança → Tokens API → Gerar token API</strong> do projeto pretendido e digite uma descrição.",
        "Escolha <strong>Leitura e escrita</strong> para o provisionamento e copie o token antes de fechar a janela. Isso concede acesso de escrita a todo o projeto, não uma permissão limitada a este servidor."
      ],
      "cleanupSteps": [
        "Salve os dados necessários e exclua o servidor pretendido. Para manter seu endereço após uma substituição, primeiro desative <strong>Exclusão automática</strong> no IP primário.",
        "Exclua separadamente IPs primários, volumes e snapshots mantidos que não deseja. Um IPv4 continua sendo cobrado enquanto for mantido; <strong>Exclusão automática</strong> ativada remove um IP primário não protegido junto com o servidor."
      ]
    },
    "linode": {
      "consoleSteps": [
        "Abra <strong>Firewalls → Criar firewall → Firewall personalizado</strong>. Digite um rótulo. Mantenha <strong>Política de entrada padrão: Descartar</strong> e <strong>Política de saída padrão: Aceitar</strong>; isso permite o tráfego de saída e exige regras explícitas para conexões de entrada.",
        "Adicione uma regra de entrada com <strong>Protocolo: TCP</strong>, <strong>Portas: 22</strong>, <strong>Origens: IP/Máscara de rede</strong> contendo o CIDR de administração e <strong>Ação: Aceitar</strong>. Opcionalmente adicione a regra <strong>UDP 51820</strong> do guia compartilhado. Clique em <strong>Salvar alterações</strong> para ativar as regras.",
        "Abra <strong>Criar → Linode</strong>. Escolha uma região principal de computação próxima e depois <strong>Distribuições → Ubuntu 24.04</strong>. Selecione um plano disponível com pelo menos <strong>1 GB de RAM</strong> e <strong>20 GB de disco</strong>, ou o mínimo superior do provedor.",
        "Defina o <strong>Rótulo</strong>. Em segurança, selecione uma chave SSH existente ou clique em <strong>Adicionar uma chave SSH</strong> e cole sua chave pública. <strong>Senha de root</strong> é opcional ao provisionar com chave SSH; mantenha sua chave privada no dispositivo.",
        "Em rede, escolha <strong>Internet pública</strong> e <strong>Interfaces Linode</strong>. Selecione seu firewall para essa interface pública. Em <strong>Endereço IP</strong>, escolha <strong>Reservado</strong> e um endereço da mesma região ou clique em <strong>Reservar IP</strong> para obter um.",
        "Confira os backups opcionais e outras cobranças no <strong>Resumo do Linode</strong> e clique em <strong>Criar Linode</strong>. Aguarde a inicialização e anote o IPv4 público. O endereço reservado permanece na conta após excluir o servidor e não pode mudar de região."
      ],
      "apiSteps": [
        "Somente para um futuro plugin compatível: abra o menu do seu usuário → <strong>Tokens API → Criar um token de acesso pessoal</strong>. Defina um rótulo e uma validade.",
        "Conceda apenas os escopos necessários: provisionamento geralmente exige Leitura/Escrita de Linodes e Firewalls; reservar ou liberar endereços também exige <code>ips:read_write</code>. Guarde o token com segurança."
      ],
      "cleanupSteps": [
        "Salve os dados necessários e abra <strong>Linodes → … → Excluir → Excluir Linode</strong>. Verifique os volumes e imagens mantidos separadamente.",
        "Para um endereço desnecessário, abra <strong>IPs reservados → … → Cancelar reserva</strong> e confirme. IPs reservados sobrevivem à exclusão do servidor e continuam sendo cobrados até serem liberados."
      ]
    },
    "vultr": {
      "consoleSteps": [
        "Abra <strong>Conta → Chaves SSH → Adicionar chave SSH</strong>. Cole e nomeie sua chave pública e salve-a. Mantenha a chave privada correspondente no dispositivo; selecione esta chave pública salva ao configurar a instância.",
        "Abra <strong>Rede → Grupos de firewall → Criar grupo de firewall</strong> e dê um nome. Adicione uma regra IPv4 de entrada para <strong>TCP 22</strong> a partir do CIDR de administração, além da regra opcional <strong>UDP 51820</strong>. Confirme que existe uma regra salva: grupos vazios não são aplicados.",
        "Abra <strong>Computação → Instâncias → Criar instância + → CPU compartilhada</strong>. Escolha um plano disponível com pelo menos <strong>1 GB de RAM</strong> e <strong>20 GB de disco</strong>, ou o mínimo superior do provedor. Selecione uma localização próxima e clique em <strong>Configurar</strong>.",
        "Em <strong>Seleção e configuração de imagem → Sistema operacional</strong>, escolha <strong>Ubuntu 24.04</strong>. Em <strong>Configurações do servidor</strong>, selecione sua entrada de <strong>Chaves SSH</strong> e o <strong>Grupo de firewall</strong> com regras. Digite o <strong>Nome de host do servidor 1</strong> e o <strong>Rótulo do servidor 1</strong>.",
        "Em <strong>Conectividade da instância</strong>, selecione <strong>Instância(s) com IP público</strong> e mantenha <strong>IPv4 público</strong> ativado. Confira os backups automáticos e outras cobranças opcionais. <strong>Login de usuário limitado</strong> muda o usuário de <code>root</code> para <code>linuxuser</code>, que pode usar sudo. Revise o <strong>Resumo</strong> e clique em <strong>Implantar</strong>.",
        "Espere a instância ficar pronta e anote o IPv4 público. O endereço comum permanece fixo enquanto esta instância existir; use um IP reservado da mesma região se ele precisar sobreviver a uma substituição."
      ],
      "apiSteps": [
        "Somente para um futuro plugin compatível: abra <strong>Conta → API</strong> e depois <strong>Ativar API</strong> em <strong>Token de acesso pessoal</strong>. Guarde a credencial com segurança.",
        "Em <strong>Controle de acesso</strong>, permita o IP/CIDR que originará as solicitações API. Atualize-o após mudanças de rede móvel; isso restringe a origem das solicitações, não as permissões sobre recursos específicos."
      ],
      "cleanupSteps": [
        "Salve os dados necessários, abra a instância e clique em <strong>Destruir servidor</strong>. Selecione <strong>Sim, destruir este servidor</strong> e depois <strong>Destruir servidor</strong>.",
        "Exclua os endereços mantidos que não deseja em <strong>Rede → IPs reservados → Remover IP reservado</strong>. Verifique também armazenamento e snapshots separados; excluir o servidor não limpa toda a conta."
      ]
    },
    "oracle-cloud": {
      "consoleSteps": [
        "Selecione sua região OCI e um compartimento dedicado. Confirme as cotas de computação, volumes e IPs públicos; a capacidade disponível e a elegibilidade à camada gratuita dependem dos recursos selecionados.",
        "Abra <strong>Rede → Redes virtuais na nuvem → Iniciar assistente de VCN → Criar VCN com conectividade com a Internet</strong>. Use sua sub-rede pública e confirme uma rota <code>0.0.0.0/0</code> pelo gateway de Internet.",
        "Revise a lista de segurança da sub-rede pública e todos os grupos de segurança de rede associados. Restrinja TCP <code>22</code> ao CIDR de administração, permita UDP <code>51820</code> e preserve as regras necessárias de saída e ICMP.",
        "Abra <strong>Computação → Instâncias → Criar instância</strong>. Defina nome, compartimento e domínio de disponibilidade. Escolha <strong>Alterar imagem → Ubuntu → 24.04</strong>, um formato de VM compatível e memória e armazenamento de inicialização adequados.",
        "Selecione a sub-rede pública e ative a atribuição de IPv4 público. Em <strong>Adicionar chaves SSH</strong>, cole ou envie sua chave pública Ed25519/ECDSA; a chave gerada pelo console é RSA. Mantenha a chave privada correspondente no dispositivo.",
        "Revise e crie a VM. Quando estiver em execução, anote o IPv4 público. Para manter o endereço após substituir a VM, opcionalmente troque o IP efêmero por um IP público reservado atribuído ao IP privado principal; anote o novo endereço."
      ],
      "apiSteps": [
        "Somente para um futuro plugin de provisionamento: peça a um administrador que conceda a um usuário/grupo IAM dedicado as permissões necessárias de computação, rede e volumes neste compartimento.",
        "Abra <strong>Configurações do usuário → Chaves API → Adicionar chave API</strong>. Guarde a chave privada de assinatura RSA PEM, impressão digital, OCIDs da tenancy/usuário e região; anote o OCID do compartimento. Essa chave é separada da chave SSH."
      ],
      "cleanupSteps": [
        "Encerre a instância e exclua explicitamente o volume de inicialização se for desnecessário; a OCI preserva esse volume por padrão. Faça antes backup dos dados que deseja manter.",
        "Exclua IPs públicos reservados e volumes mantidos que não deseja. Remova sub-redes, gateways e outros recursos de rede sem uso da VCN dedicada, incluindo os recursos de rede privada criados pelo assistente."
      ]
    },
    "ovhcloud": {
      "consoleSteps": [
        "Ative um projeto Public Cloud e um método de pagamento. Verifique <strong>Gerenciamento do projeto → Cotas</strong>. Em <strong>Chaves SSH → Criar uma chave SSH</strong>, nomeie e cole sua chave pública e selecione <strong>Adicionar</strong>.",
        "Abra <strong>Computação → Instâncias → Criar instância</strong>. Nomeie a VM, escolha uma região e um modelo adequado, selecione Ubuntu <code>24.04</code> e escolha a chave SSH salva.",
        "Em rede, ative <strong>Atribuir IP público → IP público básico</strong>; a conectividade pública está desativada por padrão. O IP básico usa <code>Ext-Net</code> e é incompatível com gateway. Confira snapshots automáticos e custos, escolha faturamento por hora e selecione <strong>Criar minha instância</strong>.",
        "Para configurar a filtragem, abra <strong>Gerenciamento do projeto → Usuários</strong>. Se necessário, crie um usuário OpenStack com permissões adequadas de rede/instâncias, guarde sua senha e escolha a ação <strong>… → Iniciar OpenStack Horizon</strong>.",
        "No Horizon, selecione a região da VM e abra <strong>Rede → Grupos de segurança → Criar grupo de segurança</strong>. Crie um grupo dedicado. Em <strong>Gerenciar regras</strong>, permita TCP <code>22</code> a partir do CIDR de administração e UDP <code>51820</code>; mantenha as regras de saída.",
        "Abra <strong>Computação → Instâncias → Editar grupos de segurança</strong> no Horizon. Aplique o grupo dedicado e remova o grupo padrão permissivo apenas desta VM; nunca edite/exclua o grupo padrão compartilhado. Quando estiver ativa, anote o IPv4 público na Visão geral."
      ],
      "apiSteps": [
        "Somente para um futuro plugin de provisionamento: abra a página de criação de tokens da região API da sua conta. Nomeie o aplicativo, defina uma validade e restrinja Direitos aos caminhos/ações documentados do projeto.",
        "Guarde a chave do aplicativo, o segredo do aplicativo e a chave de consumidor com segurança. Essas credenciais de API assinada diferem do usuário/senha OpenStack usados pelo Horizon."
      ],
      "cleanupSteps": [
        "Faça backup dos dados que deseja manter e selecione <strong>… → Excluir → Excluir instância</strong> da instância. A cobrança por hora continua até a exclusão.",
        "Remova separadamente volumes, snapshots/backups e quaisquer IPs flutuantes/adicionais ou gateways criados de forma independente que não deseja. Excluir a VM não remove todos os recursos associados."
      ]
    },
    "scaleway": {
      "consoleSteps": [
        "Selecione a organização e o projeto corretos, ative o faturamento e confira as cotas. Em <strong>Painel do projeto → Adicionar chave SSH</strong>, nomeie e cole sua chave pública. As chaves SSH são limitadas a este projeto.",
        "Abra <strong>Computação → Instâncias CPU e GPU → Grupos de segurança</strong> na zona de disponibilidade escolhida. Crie um grupo dedicado nessa zona. Ative a filtragem com estado, defina a entrada como <strong>Descartar</strong> e a saída como <strong>Aceitar</strong>.",
        "Na aba <strong>Regras</strong> do grupo, permita TCP <code>22</code> a partir do CIDR de administração e UDP <code>51820</code> para clientes VPN. Mantenha TCP <code>51821</code> fechado. O grupo padrão criado automaticamente não tem estado; selecione seu grupo dedicado explicitamente.",
        "Escolha <strong>Criar instância → Criar instância CPU</strong>, selecione uma configuração de CPU adequada e a mesma zona de disponibilidade e clique em <strong>Configurar instância</strong>. Nomeie-a, selecione Ubuntu <code>24.04</code>/Noble e configure um volume de sistema de pelo menos 20 GB.",
        "Mantenha <strong>IPv4 público</strong> ativado e aloque um endereço ou selecione um existente disponível. Escolha seu grupo de segurança dedicado e verifique as chaves SSH exibidas. Revise separadamente as configurações IPv6 se estiver ativado.",
        "Selecione <strong>Revisar</strong>, confira os custos estimados e depois <strong>Criar instância</strong>. Espere o provisionamento terminar e copie o IPv4 público da <strong>Visão geral</strong>. Esse IP flexível é um recurso separado cujo ciclo de vida você precisa gerenciar."
      ],
      "apiSteps": [
        "Somente para um futuro plugin de provisionamento: crie um aplicativo IAM e conceda as permissões necessárias para instâncias, rede e armazenamento no projeto de destino.",
        "Abra <strong>IAM e chaves API → Chaves API → Gerar chave API</strong>. Selecione o aplicativo e uma validade. Guarde a chave de acesso e o segredo exibido uma única vez; anote separadamente o UUID do projeto e a zona."
      ],
      "cleanupSteps": [
        "Faça backup dos dados que deseja manter. Na zona de disponibilidade correta, escolha <strong>… → Excluir</strong> da instância, digite <code>DELETE</code> e selecione a exclusão dos IPs e volumes Block Storage associados que não precisa mais.",
        "Confirme <strong>Excluir instância</strong>. Verifique se há IPs flexíveis, volumes e snapshots mantidos que não deseja; apenas desligar não remove esses recursos."
      ]
    }
  }
};
