# Histórias de Usuário

Data     | Versão  | Descrição | Autor 
:----:   | :----:  | :----:    | :----: 
29/09/19 | 0.1     | Primeira versão | Marcos Diego e Wagner Martins
07/10/19 | 1.0     | Edição e revisão do documento | Marcos Diego
26/11/19 | 1.1     | Atualização das histórias dentro do novo escopo | Wagner Martins 

### Como usuário, eu gostaria de visualizar as principais matérias do meu curso para facilitar a escolha no momento da matrícula.

- Identificar matérias do curso do usuário
- Destacar na página de ofertas, currículo e fluxo as matérias do curso do usuário

### Como usuário, eu gostaria de visualizar quais matérias eu já estou aprovado, e quais não.

- Identificar matérias do curso do usuário
- Identificar em quais matérias do curso o usuário já está aprovado
- Destacar com cores distintas as matérias que o usuário está aprovado e as que ele não está

### Como usuário, eu gostaria de saber quais matérias do fluxo eu posso ou não cursar.

- Identificar matérias do curso do usuário
- Identificar pré-requisitos das matérias
- Destacar com cores distintas as matérias que o usuário pode cursar e as que não pode

### Como usuário, eu gostaria de saber quais matérias apresentam risco de desligamento.

- Identificar pelo histórico do usuário se ele está em condição/risco em alguma matéria
- Destacar as matérias que apresentarem riscos

### Como usuário, eu gostaria de saber o que cada cor do destaque significa.

- Exibir no popup uma legenda que indique o que cada cor no destaque representa.

### Como usuário, eu gostaria de visualizar uma janela com instruções para auxiliar na utilização da aplicação.

- Exibir os passos que o usuário deve seguir para usar corretamente a extenção
- Deve ser exibido na janela popup

### Como desenvolvedor, eu gostaria de ter acesso ao quadro resumo do usuário para verificar seu curso.

- O usuário deve logar no Matricula Web
- Os dados serão retirados da página do quadro resumo
- Os dados serão guardados no armazenamento do google chrome

### Como desenvolvedor, eu gostaria de ter acesso ao histórico escolar do usuário para verificar as matérias que já foram cursadas.

- O usuário deve estar logado para acessar a página
- Os dados serão retirados da página do histórico escolar
- Os dados serão guardados no armazenamento do google chrome

### Como desenvolvedor, eu gostaria de ter acesso aos dados de cada matéria para a utilização na aplicação.

- Usar a API chrome.storage para guardar e carregar dados das matérias lidas no histórico, no quadro resumo e seus pré-requisitos

### Como desenvolvedor, eu gostaria de ter acesso aos dados do usuário para verificar seu login.

- Verificar se os elementos da página apresentam status de login

### Como desenvolvedor, eu gostaria de ter acesso aos dados das matérias referentes aos pré-requisitos.

- Ler os dados das matérias
- Guardar os dados no armazenamento do google chrome
