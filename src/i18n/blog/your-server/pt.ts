import { defineYourServer } from "./define";

export const pt = defineYourServer({
  "metaTitle": "Seu agente. Seu servidor. Suas regras. | Mobile SSH",
  "metaDescription": "Escolha onde seu agente de programação roda: um ambiente gerenciado, sua conta na nuvem ou hardware próprio. Mantenha o controle dos acessos, dos backups e da saída.",
  "back": "Blog",
  "eyebrow": "Propriedade",
  "title": "Seu agente. Seu servidor. Suas regras.",
  "standfirst": "Um ambiente de agente pronto economiza tempo de configuração. Antes de entregar seu repositório, decida quem deve controlar a máquina, as credenciais e a possibilidade de sair. O Mobile SSH permite usar seu próprio host, do computador sob a mesa a uma máquina virtual na sua conta na nuvem.",
  "author": "O conselho editorial do Mobile SSH",
  "date": "5 de outubro de 2026",
  "readingTime": "7 min de leitura",
  "figure": {
    "heading": "Escolha o host. Confira o caminho até o modelo.",
    "phone": "Seu celular · Mobile SSH",
    "connection": "SSH para o host que você escolher",
    "hosts": [
      {
        "id": "owned",
        "title": "Sua máquina física",
        "detail": "Em casa, no escritório ou na sua própria sala de servidores"
      },
      {
        "id": "cloud",
        "title": "Uma máquina virtual na sua conta na nuvem",
        "detail": "Você administra o sistema convidado; o provedor opera o hardware"
      }
    ],
    "workspace": "Arquivos, ferramentas e o processo do agente ficam no host escolhido",
    "modelConnection": "Ao usar um modelo na nuvem, instruções e contexto selecionado saem do host",
    "model": "O serviço de modelos escolhido por você",
    "caption": "Três decisões separadas: como você se conecta, onde o código roda e onde o modelo o processa. Controlar as duas primeiras não torna a terceira local."
  },
  "body": [
    "O convite é atraente: abrir um ambiente e encontrar Codex, Claude Code ou Gemini CLI já esperando. Nenhuma máquina para preparar, nenhum pacote para instalar. Conecte um repositório, descreva a tarefa e deixe uma máquina virtual na nuvem trabalhar. Para um experimento ou projeto descartável, essa conveniência pode ser exatamente o que você quer.",
    "Então o experimento vira seu ambiente diário. O código privado chega. Também chegam dados de teste, documentação interna e as credenciais que você fornecer. Antes de essa entrega virar rotina, faça uma pergunta mais duradoura: quem controla o lugar onde esse trabalho fica?",
    "Um ambiente pronto tem um operador",
    "Em um ambiente de agente gerenciado pelo provedor, outra pessoa opera o host de execução. Seu repositório pode ser clonado lá, dados podem ser enviados e permissões concedidas para alcançar outros sistemas. Isolamento, acesso administrativo, retenção e opções de exportação dependem do serviço. Ferramentas pré-instaladas mostram a rapidez com que você pode começar; dizem pouco sobre essas condições.",
    "Você pode fazer essa escolha conscientemente. Ambientes gerenciados podem reduzir a manutenção e oferecer isolamento útil. Leia o que acontece com discos do ambiente, transcrições, snapshots e credenciais, inclusive depois de uma sessão terminar ou uma conta ser encerrada. Não é preciso presumir má intenção para querer respostas claras sobre seu trabalho privado.",
    "Guarde as chaves. Guarde um backup. Guarde a possibilidade de sair.",
    "Três lugares para rodar o mesmo agente",
    "Uma máquina virtual na sua própria conta na nuvem oferece outra divisão de responsabilidades. Você escolhe o sistema operacional convidado, instala ferramentas, concede acesso e gerencia o ciclo de vida da instância. A empresa de nuvem ainda opera a infraestrutura física. Chamá-la de seu servidor descreve o controle administrativo, não a propriedade do hardware por baixo. <a href=\"#source-cloud\">[1]</a>",
    "Uma máquina física sua vai além: você escolhe o hardware e decide onde ele fica. Um computador existente, um pequeno servidor doméstico ou uma máquina do escritório podem abrigar o ambiente. Você também assume os trabalhos práticos: energia, conectividade, reparos, atualizações e recuperação. A propriedade lhe dá decisões para tomar; não as toma por você.",
    "Leve seu servidor para o celular",
    "O Mobile SSH funciona com as duas opções operadas por você. Conecte-se a um host SSH acessível na rede local, por um caminho de rede que você configurar ou na sua conta na nuvem. Sessões SSH comuns não exigem um retransmissor de sessões operado pelo Mobile SSH nem uma conta Mobile SSH. Você escolhe o destino e fornece suas credenciais.",
    "Instale o agente que quiser nesse host. Abra o diretório de trabalho, execute Codex, Claude Code ou Gemini CLI e use o terminal que você já conhece. Você pode manter uma sessão no tmux, herdr ou Zellij e voltar a ela pelo celular enquanto o host e o processo continuarem rodando. O trabalho pertence àquele ambiente; trocar de celular não exige mover o repositório.",
    "Isso deixa escolhas úteis nas suas mãos. Mantenha dados de teste sensíveis em uma máquina local. Use uma máquina virtual na nuvem quando seus recursos combinarem com a tarefa. Troque de agente sem reconstruir o fluxo de trabalho móvel. O Mobile SSH oferece acesso ao terminal, SFTP e túneis; não exige que você alugue um ambiente de agente específico.",
    "Seu servidor e seu modelo são escolhas separadas",
    "Essa distinção importa especialmente ao falar de dados privados. Rodar um agente em hardware próprio não significa necessariamente rodar seu modelo ali. Um agente conectado à nuvem pode enviar instruções, contexto selecionado do repositório e resultados de ferramentas ao serviço do modelo. O processo do agente e a árvore de trabalho podem ficar no seu servidor enquanto a inferência ocorre em outro lugar. <a href=\"#source-claude\">[2]</a> <a href=\"#source-gemini\">[3]</a>",
    "SSH criptografa a conexão entre o celular e seu destino. Não impede que programas no host leiam arquivos permitidos ou façam suas próprias solicitações de rede. Decida qual serviço de modelos o agente usa, o que pode ler e quais ferramentas ou integrações podem enviar dados para fora. Confira as políticas da sua conta e configuração reais.",
    "Se o trabalho exige inferência local, escolha uma combinação compatível de agente e modelo e verifique seu comportamento na rede. Não deduza essa garantia da palavra local em um instalador. A análise de uso opcional e os downloads de plugins do Mobile SSH também têm fluxos de dados próprios; os ajustes e a política de privacidade do app os explicam.",
    "Faça do controle algo que você possa exercer",
    "Uma senha de root é só o começo. Controle prático significa poder restringir acessos, recuperar-se de um erro, inspecionar mudanças e mover o ambiente sem pedir a uma plataforma de agentes que o preserve por você. Dê a essas capacidades a mesma atenção que à escolha do modelo.",
    "Nada disso torna um servidor doméstico automaticamente mais seguro que um serviço gerenciado. Uma máquina negligenciada com credenciais amplas pode ser um lugar ruim para dados privados. Escolha o nível de responsabilidade que consegue manter. A vantagem é poder fazer essa escolha, examiná-la e mudá-la quando suas necessidades mudarem.",
    "Seja dono da máquina quando puder. Mantenha o controle do ambiente onde quer que ele rode.",
    "Na próxima vez que um ambiente de agente pronto pedir seu repositório, pare um instante antes de conectá-lo. Decida onde os arquivos devem ficar, quem deve administrar o host e como levará o trabalho com você. Depois, pegue o celular. O Mobile SSH pode encontrar você no servidor que escolheu."
  ],
  "comparison": {
    "heading": "Quem controla o quê?",
    "dimension": "Decisão",
    "models": [
      {
        "id": "managed",
        "title": "Ambiente de agente gerenciado"
      },
      {
        "id": "cloud",
        "title": "Máquina virtual na sua conta na nuvem"
      },
      {
        "id": "owned",
        "title": "Hardware próprio"
      }
    ],
    "rows": [
      {
        "id": "hardware",
        "label": "Hardware físico",
        "managed": "Provedor do serviço ou da infraestrutura",
        "cloud": "Provedor de nuvem",
        "owned": "Você é dono da máquina"
      },
      {
        "id": "admin",
        "label": "Controle administrativo",
        "managed": "Definido pelo serviço",
        "cloud": "Você administra o sistema operacional convidado",
        "owned": "Você administra o host"
      },
      {
        "id": "storage",
        "label": "Ambiente e armazenamento",
        "managed": "Discos e retenção gerenciados pelo serviço",
        "cloud": "Volumes e ciclo de vida que você configura",
        "owned": "Armazenamento que você escolhe e mantém"
      },
      {
        "id": "access",
        "label": "Credenciais e política de rede",
        "managed": "Controles do serviço e permissões que você concede",
        "cloud": "Sua configuração de sistema, identidade e rede",
        "owned": "Sua configuração de sistema, identidade e rede"
      },
      {
        "id": "portability",
        "label": "Backups e possibilidade de sair",
        "managed": "Confira as opções de exportação e exclusão",
        "cloud": "Gerencie cópias fora da instância",
        "owned": "Gerencie cópias fora da máquina"
      },
      {
        "id": "maintenance",
        "label": "Trabalho operacional",
        "managed": "O provedor opera o ambiente; você configura o uso",
        "cloud": "Você mantém o sistema convidado; o provedor, a infraestrutura",
        "owned": "Você mantém hardware, sistema e conectividade"
      }
    ],
    "note": "São arranjos típicos, não garantias sobre todos os serviços. Em cada coluna, os fluxos de dados para o provedor do modelo dependem do agente e da configuração escolhidos."
  },
  "checklist": {
    "heading": "Seis formas de manter o controle",
    "steps": [
      {
        "heading": "Dê às credenciais uma tarefa pequena",
        "body": "Use credenciais separadas e revogáveis para o ambiente. Conceda somente as permissões de repositórios e serviços necessárias à tarefa."
      },
      {
        "heading": "Limite o ambiente",
        "body": "Quando for viável, execute o agente como um usuário dedicado e sem privilégios. Mantenha arquivos privados alheios à tarefa e segredos de produção fora do alcance dele."
      },
      {
        "heading": "Verifique o destino SSH",
        "body": "Confira fingerprints de hosts desconhecidos por um canal confiável. Investigue chaves alteradas antes de substituir uma identidade salva."
      },
      {
        "heading": "Mantenha um backup independente",
        "body": "Guarde cópias criptografadas em contas que você controla, separadas do host de trabalho. Teste uma restauração, incluindo alterações ainda sem commit que precise preservar."
      },
      {
        "heading": "Revise o que sai do host",
        "body": "Confira os destinos do modelo, plugins, ferramentas externas e configurações de telemetria. Compartilhe o mínimo de contexto necessário e revise as mudanças resultantes."
      },
      {
        "heading": "Pratique a mudança",
        "body": "Restaure o ambiente em outro host, reconecte e execute os testes. A possibilidade de sair deve ser algo que você já experimentou."
      }
    ]
  },
  "sources": {
    "heading": "Fontes e limites",
    "aws": "AWS: responsabilidade compartilhada pela infraestrutura de nuvem e pelos sistemas convidados",
    "anthropic": "Claude Code: execução local, conexões à nuvem e uso de dados",
    "google": "Gemini CLI: serviços de modelos e avisos de privacidade aplicáveis",
    "checked": "Documentação das fontes verificada em 5 de outubro de 2026. Os termos das contas e as capacidades dos serviços podem mudar."
  },
  "cta": {
    "heading": "Conecte-se ao servidor que você escolheu.",
    "body": "Use o Mobile SSH no Android ou iOS para acessar suas máquinas, executar suas ferramentas e manter seu ambiente ao alcance.",
    "playButton": "Disponível no Google Play",
    "iosButton": "Participar da beta do iOS",
    "docsLink": "Configurar sua primeira conexão",
    "privacyLink": "Ler a política de privacidade"
  }
});
