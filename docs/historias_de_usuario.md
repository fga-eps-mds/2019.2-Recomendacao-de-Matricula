### Histórico de versão

Data     | Versão  | Descrição | Autor 
:----:   | :----:  | :----:    | :----: 
29/09/19 | 0.1     | Primeira versão | Marcos Diego e Wagner Martins

Como usuário, eu gostaria de visualizar uma janela com uma lista de opções para escolher o que desejo.

- Implementar no popup um menu inicial
- O menu deve ter todas as opções de funcionalidades da extenção
- O menu deve apresentar um link para a página inicial do Matrícula Web

Como usuário, eu gostaria de visualizar as principais matérias do meu curso para facilitar a escolha no momento da matrícula.

- Identificar matérias do curso do usuário
- O usuário deve estar logado
- A identificação será feita na página Quadro Resumo
- Destacar na página de ofertas as matérias do curso do usuário

Como usuário, eu gostaria de visualizar um fluxograma com as matérias necessárias para o término do meu curso para facilitar a escolha no momento da matrícula.

- 
- Identificar os pré-requisitos da matérias

Como usuário, eu gostaria de visualizar uma janela inicial para auxiliar na utilização da aplicação.

- Exibir uma tela de boas vindas ao usuário
- Só aparece automaticamente na primeira inicialização
- Pode ser acessado pelo menu

Como usuário, eu gostaria de visualizar uma janela com instruções para auxiliar na utilização da aplicação.

- Exibir os passos que o usuário deve seguir para usar corretamente a extenção
- Deve ser exibido na janela popup

Como desenvolvedor, eu gostaria de ter acesso ao quadro resumo do usuário para verificar seu curso.

- O usuário deve logar no Matricula Web
- Os dados serão retirados da página do quadro resumo
- Os dados serão guardados no armazenamento do google chrome

Como desenvolvedor, eu gostaria de ter acesso ao histórico escolar do usuário para verificar as matérias que já foram cursadas..

- O usuário deve estar logado para acessar a página
- Os dados serão retirados da página do histórico escolar
- Os dados serão guardados no armazenamento do google chrome

Como desenvolvedor, eu gostaria de ter acesso à lista de matérias para priorizar as matérias de cada curso.

- Usando o código da opção do curso, redirecionar o usuário para a página do fluxo curso
- Ler os dados das matérias
- Guardar os dados no armazenamento do google chrome

Como desenvolvedor, eu gostaria de ter acesso aos dados de cada matéria para a utilização na aplicação.

- Usar a API chrome.storage para guardar e carregar dados das matérias lidas no histórico, no quadro resumo e do fluxo

Como desenvolvedor, eu gostaria de ter acesso aos dados do usuário para verificar seu login.

- Verificar se os elementos da página apresentam status de login