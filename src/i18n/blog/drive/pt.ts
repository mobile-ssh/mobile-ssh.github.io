import { defineDrive } from "./define";

export const pt = defineDrive({
  "metaTitle": "O post que começou na volta para casa | Mobile SSH",
  "metaDescription": "Uma sessão imaginada de escrita por voz compara T3 Code, Moshi, Mobile SSH e paseo.sh: redigir, editar arquivos, escrever código, preparar alterações e lidar com ruído.",
  "back": "Blog",
  "eyebrow": "Fluxos de trabalho por voz",
  "title": "O post que começou na volta para casa",
  "standfirst": "Uma ideia chega antes de a viagem terminar. Dá para transformá-la em um rascunho, uma alteração no código e um diff preparado com cuidado sem viver grudado na tela? Quatro produtos oferecem partes diferentes dessa conversa.",
  "author": "O conselho editorial do Mobile SSH",
  "date": "11 de outubro de 2026",
  "readingTime": "7 min de leitura",
  "evidence": "Uma viagem imaginada, não um teste ao volante. Os recursos foram conferidos na documentação oficial e no código atual em 11 de outubro de 2026. Não houve teste comparativo de microfones nem de ruído de estrada. Configure tudo com o carro estacionado; dirigir tem prioridade, e a revisão na tela ou as aprovações ficam para uma parada segura.",
  "body": [
    "O post começa em um carro estacionado. Você tem um repositório em um computador acessível, um agente de programação pronto e uma ideia que provavelmente vai desaparecer se prometer lembrar dela depois do jantar. Antes de sair, você escolhe o projeto e estabelece a conexão. O primeiro pedido é feito com uma fala comum.",
    "Escreva um post sobre nosso novo recurso de busca. Comece pelo problema do leitor. Salve um rascunho no diretório do blog e deixe sem commit.",
    "A viagem fornece o cenário, mas a pergunta útil é o que acontece depois que o microfone escuta você. A fala apenas preenche uma caixa de texto? Alguém ainda precisa tocar em Enviar? Você consegue ouvir uma resposta e fazer outra pergunta? T3 Code, Moshi, Mobile SSH e paseo.sh não dão a mesma resposta.",
    "Um pedido, quatro conversas diferentes",
    "O T3 Code reúne o agente de programação e seu trabalho no repositório em uma interface móvel. A entrada de voz integrada documentada transcreve localmente em iPhones compatíveis com iOS 26 ou posterior. O ponto decisivo é que a transcrição altera o rascunho no editor de mensagem; ela não envia a solicitação ao agente. Isso serve para ditar instruções de escrita detalhadas com o carro estacionado, conferi-las e enviá-las. Não estabelece uma conversa contínua com respostas faladas. O trabalho pode continuar no computador remoto depois do envio, mas o ditado sozinho não completa o ciclo sem usar as mãos. <a href=\"#source-t3-voice\">[1]</a>",
    "O Moshi segue o caminho do terminal. Sua documentação de voz descreve a fala convertida em entrada do terminal, com envio opcional por Enter, ou em texto em um editor de mensagem. A própria comparação com o Paseo chama isso de ditado de mão única, em vez de conversa com respostas faladas. Um agente de programação já em execução nesse terminal pode receber as instruções de escrita. A etapa que falta na nossa viagem imaginada é ouvir e ajustar o resultado por meio de um modo de voz bidirecional documentado. Um botão de microfone e o Enter automático são úteis, mas nenhum deles comprova retorno falado nem aprovações por voz. <a href=\"#source-moshi-voice\">[3]</a> <a href=\"#source-moshi-conversation\">[4]</a>",
    "O paseo.sh documenta tanto o ditado quanto as conversas por voz: o reconhecimento de fala leva seu pedido a um agente, e a síntese de voz fornece respostas. Seu fluxo de voz pode iniciar e controlar agentes de programação, tornando-o um candidato direto à troca imaginada. Isso é um modelo de interação documentado, não um resultado desta viagem. Também há limites de ciclo de vida: a implementação Android examinada pausa o áudio quando vai para segundo plano. Não presuma que uma conversa por voz também significa uma sessão ininterrupta com o telefone bloqueado. <a href=\"#source-paseo-voice\">[5]</a> <a href=\"#source-paseo-background\">[7]</a>",
    "O assistente experimental do Mobile SSH para Android acrescenta outro atrativo: a voz pode trabalhar com as sessões SSH que você já usa. Seu modo Live permite interação falada; seus controles podem descobrir hosts e recursos de multiplexadores, ler a saída do terminal selecionado e, após uma autorização separada, enviar entrada ao terminal ou executar comandos compatíveis. Para quem alterna entre um editor, um agente de programação e um painel de testes, poder nomear o destino existente é útil. Esta é a vantagem comprovada a destacar: voz integrada ao trabalho geral com SSH, com permissões de controle explícitas. Isso não é evidência de reconhecimento de fala melhor que o dos outros três. <a href=\"#source-mobile-voice\">[8]</a>",
    "A ressalva sobre a plataforma importa. A nova implementação de voz do Mobile SSH para iOS oferece ditado em primeiro plano, revisão e envio explícito, com respostas faladas e acesso somente de leitura ao terminal selecionado. As notas de versão descrevem uma compilação de teste privada. Ela não oferece o controle de escrita no terminal do assistente Android nem escuta contínua. O adaptador de desenvolvimento para Android Auto também não é uma integração veicular já lançada. A história precisa acompanhar a compilação que você realmente tem. <a href=\"#source-mobile-ios\">[11]</a> <a href=\"#source-mobile-car\">[12]</a>",
    "O rascunho vira arquivo e depois uma alteração no código",
    "Imagine que a estrutura esteja pronta na próxima parada segura. Agora a tarefa fica mais precisa. Você quer encurtar a introdução, corrigir um exemplo e fazer uma pequena alteração no código do site. Ainda pode expressar essas mudanças por voz; não precisa ditar cada chave e ponto e vírgula.",
    "Encurte a introdução do rascunho. Depois adicione uma indicação de tempo de leitura ao componente do artigo, seguindo as convenções do projeto. Execute os testes relevantes e me diga quais arquivos mudaram.",
    "Aqui quem escreve é o agente de programação. A interface de voz leva a instrução; o acesso ao repositório, as ferramentas disponíveis e as permissões determinam se ele pode editar os arquivos e implementar o componente. Aplicar essas capacidades a este blog específico é um fluxo proposto, não uma demonstração verificada de que os quatro produtos o concluíram. O T3 Code oferece edição por agentes e ações de Git; o Moshi fornece um terminal de verdade; o Paseo documenta fluxos de desenvolvimento com agentes; o Mobile SSH no Android pode atuar em um terminal ou destino de comando autorizado. O agente escolhido ainda precisa entender a tarefa.",
    "O Mobile SSH continua útil quando a sessão de voz termina: o mesmo aplicativo tem um terminal SSH, edição de texto por SFTP e acesso ao lazygit remoto. Isso oferece um lugar prático para inspecionar os arquivos reais e o diff com o carro estacionado. São ferramentas de revisão interativas, não prova de que todos os seus botões possam ser operados por voz. <a href=\"#source-mobile-voice\">[8]</a>",
    "Preparar alterações merece uma frase própria",
    "Adicione à área de preparação apenas o rascunho do blog e o componente do artigo que acabamos de revisar. Deixe todas as outras alterações intactas. Não faça commit nem push.",
    "Adicionar à área de preparação seleciona o conteúdo do próximo commit do Git; isso é separado de salvar, fazer commit e publicar. O fluxo de commit móvel do T3 Code seleciona arquivos e os prepara como parte do commit. Isso não equivale a documentar uma ação falada independente para prepará-los. No Moshi, no Paseo ou em uma sessão do Mobile SSH Android com escrita habilitada, pedir a um agente capaz que prepare arquivos específicos é um uso razoável de suas ferramentas de shell, sujeito às permissões. Nada disso comprova uma aprovação confiável de qualquer diff apenas por voz. Confira o diff preparado na parada segura. <a href=\"#source-t3-git\">[2]</a> <a href=\"#source-paseo-work\">[6]</a>",
    "Então a estrada fica mais barulhenta",
    "Na nossa viagem imaginada, a chuva chega, o ventilador acelera e um passageiro começa a falar. É aqui que uma demonstração bem produzida deixa de responder à pergunta importante. Não encontramos resultados controlados e comparáveis sobre ruído de estrada para esses quatro produtos. Não há evidência aqui para apontar um vencedor em reconhecimento, uma distância confiável do microfone ou uma promessa de que conversas ao fundo nunca se tornarão comandos.",
    "A transcrição no dispositivo do T3 Code descreve onde o reconhecimento acontece, não sua precisão em um carro barulhento. O Moshi oferece vários mecanismos de reconhecimento no iOS e sugere transcrição hospedada quando o reconhecimento local tem dificuldade com ruído; essa sugestão não é uma avaliação comparativa. O Paseo oferece serviços de voz locais e alternativas em nuvem configuráveis, mas a escolha do provedor, sozinha, não estabelece o desempenho no seu carro. Ruído da estrada, outras falas, posição do microfone e modelo de reconhecimento selecionado precisam ser avaliados na configuração real. <a href=\"#source-t3-voice\">[1]</a> <a href=\"#source-moshi-voice\">[3]</a> <a href=\"#source-paseo-voice\">[5]</a>",
    "O Mobile SSH oferece controles úteis para avaliar no Android: o caminho de áudio do telefone ativa a supressão de ruído e o cancelamento de eco da plataforma quando disponíveis, e o host de voz tem filtragem RNNoise opcional e um filtro de locutor cadastrado. São escolhas de implementação verificadas, não superioridade verificada. A proteção de entrada vem desativada, exige configuração e pode rejeitar o locutor desejado ou aceitar fala indesejada. Sua documentação diz explicitamente que as verificações sintéticas registradas não medem a precisão com pessoas usando headsets nem com ruído de carro. <a href=\"#source-mobile-noise\">[10]</a>",
    "No caminho de reconhecimento em servidor do Mobile SSH para Android, os controles documentados de headset podem iniciar ou retomar uma conversa configurada e controlar uma sessão ativa em segundo plano, sujeitos ao roteamento do Android e à prioridade de outros aplicativos. Isso é relevante para reduzir a interação com a tela. Ainda precisa ser testado com seu telefone e headset, com o carro estacionado; não é garantia sobre botões do volante, palavras de ativação ou todos os carros. Se a conversa exigir correção ou atenção, pause-a. <a href=\"#source-mobile-headset\">[9]</a>",
    "Chegar com algo que valha a revisão",
    "O resultado útil é um rascunho e uma pequena alteração fácil de inspecionar esperando quando a viagem termina. T3 Code e Moshi oferecem formas diferentes de falar instruções dentro de um fluxo de programação existente. O Paseo oferece uma alternativa de conversa documentada. O Mobile SSH merece especialmente ser avaliado por usuários Android que querem voz junto aos terminais SSH e às sessões de multiplexadores existentes, depois ferramentas completas de terminal e arquivos para revisar. Esse julgamento vem das capacidades, não de uma disputa contra o ruído que não realizamos.",
    "Os quatro têm lugar na comparação. Escolha a interação que combina com seu dispositivo e o trabalho, faça pedidos específicos e dê atenção à estrada. O rascunho pode esperar. O diff final merece sua atenção."
  ],
  "comparison": {
    "heading": "O que a viagem imaginada pode pedir de cada produto, de forma razoável",
    "productHeading": "Produto",
    "voiceHeading": "Funcionamento de voz verificado",
    "fitHeading": "Uso e limites",
    "rows": [
      {
        "id": "t3",
        "voice": "Dispositivos iOS compatíveis: ditado em um rascunho; envio separado.",
        "fit": "Edição por agentes e ações móveis de Git; diálogo falado contínuo não estabelecido."
      },
      {
        "id": "moshi",
        "voice": "Ditado no terminal ou no editor de mensagem; Enter opcional.",
        "fit": "Use um agente existente no terminal; a voz documentada é de mão única."
      },
      {
        "id": "mobile",
        "voice": "Conversa Live experimental no Android e controle do terminal com autorização explícita.",
        "fit": "Destinos SSH e multiplexadores existentes; o novo assistente iOS é somente de leitura e exige Enviar."
      },
      {
        "id": "paseo",
        "voice": "Ditado, reconhecimento de fala e respostas faladas no modo de voz.",
        "fit": "Controle de agentes por conversa; o áudio em segundo plano depende da plataforma e da compilação."
      }
    ],
    "note": "Documentação e código estabelecem mecanismos, não a conclusão bem-sucedida deste cenário. Não há desempenho comparativo estabelecido sob ruído de estrada para nenhum dos quatro."
  },
  "sources": {
    "heading": "Fontes desta comparação",
    "t3Voice": "T3 Code: entrada de voz e limite do envio a partir do rascunho",
    "t3Ios": "T3 Code: disponibilidade de voz no iOS",
    "t3Git": "T3 Code: seleção de arquivos para commits no celular",
    "t3Stage": "T3 Code: preparação dos arquivos selecionados no servidor",
    "moshiVoice": "Moshi: mecanismos de voz, entrada do terminal e comportamento do editor de mensagem",
    "moshiConversation": "Moshi: sua descrição de ditado versus conversa",
    "paseoVoice": "paseo.sh: ditado e conversas por voz",
    "paseoWork": "paseo.sh: fluxos de desenvolvimento em repositórios",
    "paseoBackground": "Paseo: ciclo de vida do áudio Android na v0.11.2",
    "mobileVoice": "Mobile SSH: controles de voz Android e fluxos habituais de terminal e arquivos",
    "mobileHeadset": "Mobile SSH: controles de headset e seus limites",
    "mobileNoise": "Mobile SSH: proteção opcional de entrada e implementação de áudio",
    "mobileAudio": "Mobile SSH: processamento de áudio da plataforma",
    "mobileIos": "Mobile SSH: implementação de voz no iOS e limites da compilação privada",
    "mobileCar": "Mobile SSH: adaptador Android Auto exclusivo para desenvolvimento",
    "mobileAudit": "As referências do Mobile SSH registram nossa análise dos repositórios privados de Android e iOS nas revisões indicadas. São constatações no código-fonte, não confirmações de lançamentos públicos nem resultados de testes em um carro."
  },
  "cta": {
    "heading": "Mantenha a conversa perto do trabalho.",
    "body": "Explore os fluxos documentados do Mobile SSH e confira as capacidades da sua plataforma e compilação antes de configurar uma sessão de voz.",
    "docsLink": "Ler a documentação",
    "featuresLink": "Conferir os recursos por plataforma"
  }
});
