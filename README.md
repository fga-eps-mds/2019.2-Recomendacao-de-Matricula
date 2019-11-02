# Grupo 15 - Projeto de recomendação de matrícula nas disciplinas da UNB
<h2> Recomendações de Matricula para disciplinas na UnB
<p>projeto destinado á auxiliar os estudantes durante o periodo de matricula em disciplina , através da sugestão de disciplinas para matrícula . O projeto é uma extensão que  funciona a partir do navegador google chorome . ele depende paara funcionar que o usuario além de estar utilizando este navegador , esteja logado na pagina do matricula web da unb. e ja tenha importado no google chorome o compactado referente a esta extensão. </p>

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
