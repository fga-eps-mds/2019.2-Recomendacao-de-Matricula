
# Grupo 15 - Projeto de recomendação de matrícula nas disciplinas da UNB
<h2> Recomendações de Matrícula para disciplinas na UnB </h2>
<p>Projeto destinado à aplicação, que é uma extensão para Google Chrome, que realiza um auxilio aos estudantes durante o periodo de matricula em disciplina, através da sugestão de disciplinas para matrícula.</p>

<h2> Instalação: </h2>
<p>É necessário ter o Node.JS instalado para poder compilar os arquivos gerados pelo ReactJS; Basta seguir o guia do link abaixo para instalá-lo </p>

[Guia para instalação do Node.JS](https://nodejs.dev/how-to-install-nodejs)

<p>É necessário ter a versão mais atualizada do Python; Basta seguir o guia do link abaixo para instalá-lo</p>

[Guia para instalação do Python](https://python.org.br/instalacao-linux/)



<h2> Execução: </h2>
<p>
Para executar a extensão é necessário que se execute o  que gera os arquivos da extensão pelomenos uma vez (ou a cada alteração no código para os arquivos serem atualizados). Uma vez executado esse  basta ativar o Modo de Desenvolvedor no Google Chrome e adicionar a extensão descompactada ao navegador (a cada alteração na extensão, ela deverá ser atualizada manualmente no navegador).
</p>

<h3>Executando o  que gera os arquivos:</h3>

+ Na pasta "/Recomendação de Matrícula" se encontra o arquivo "build.py"
+ Execute-o usando o comando
    
    ```
    python3 build.py
    ```
    
+ Se houver sucesso na execução do script, a pasta "Recomendação de Matricula/extensao" será gerada    
    
<h3>Ativando o Modo de Desenvolvedor do navegador:</h3>

+ No Google Chrome, acesse o endereço "chrome://extensions"
+ No canto superior direito, ative o botão estilo switch referente ao modo de desenvolvedor

<h3>Adicionando e Atualizando a extensão</h3>

<h5>Adicionando a extensão pela primeira vez:</h2>

+ Na parte superior esquerda da tela, no endereço "chrome://extensions", clique no botão *Carregar sem Compactação*
+ Selecione a pasta "Recomendação de Matricula/extensão"
+ Pronto, a extensão foi adicionada ao chrome

<h5>Atualizando a extensão:</h5>

+ Uma vez que a extensão foi adicionada no Chrome, ela não precisa ser adicionada novamente
+ Depois que executado o script de compilar a extensão, basta clicar no ícone de seta circular localizado no card da extensão na própria página "chrome://extensions"

<h2>Instalando a extensão pela Web Store</h2>
<p>Uma forma mais prática e acessível de um usuário comum instalar a extensão no seu navegador chrome.

+ É necessário ter uma conta do google [Guia para criar uma conta do Google](https://support.google.com/accounts/answer/27441?hl=pt-BR)
+ Entrar com essa conta na [Chrome Web Store](https://chrome.google.com/webstore/category/extensions)
+ Ir na [Recomendação de Matrícula](https://chrome.google.com/webstore/search/Recomenda%C3%A7%C3%A3o%20de%20Matricula) e clicar em "Usar no Chrome".
+ Pronto, a extensão foi adicionada ao chrome
</p>
<h2>Sobre funcionalidade:</h2>

<p>A extensão para Google Chrome tem como objetivo facilitar a escolha de disciplinas para os alunos matrículados na Universidade de Brasília (UNB).
    
A UNB tem o [Matrícula Web] como plataforma de matrículas, logo a extensão tem que trabalhar em conjunto com essa plataforma. Esse serviço de gestão de matrículas do Matrícula Web não disponibiliza nenhuma API para requisição de dados, logo, toda a programação da captura de dados para as recomendações de matrículas estão sendo feitas aqui nesse projeto.

[Matrícula Web]:www.matriculaweb.unb.br

<h4>Das funcionalidades:<h4>
<h5>Disponíveis e úteis para o usuário, podemos citar:</h5>

+ Highlight de matrículas disponíveis para matrícula na página de oferta de disciplinas
    + O destaque é relativo às matérias já cursadas pelo usuário, as matérias que o usuário pode cursar, as matérias que ele não pode cursar e as matérias em que o usuário está notificado como em condição de desligamento

<h5>Internas, com o objetivo de integrá-las para que as funcionalidades para o usuário existam</h5>

+ In a nutshell, a extensão verifica se o usuário está logado no Matrícula Web, recolhe dados do usuário (como disciplinas já concluídas) na página de quadro resumo por meio de um Crawler, verifica situação de pré-requisitos e co-requisitos das matérias para poder classificá-las, recolhe dados sobre condição de desligamento da faculdade na página do histórico escolar, organiza os dados e integra as funcionalidades usando o ReactJS para o usuário poder ter uma rápida identificação do interesse dele.
