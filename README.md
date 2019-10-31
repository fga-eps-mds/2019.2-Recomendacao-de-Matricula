# Grupo 15 - Projeto de recomendação de matrícula nas disciplinas da unb
<h2> Recomendações de Matricula para disciplinas na UnB
<p> projeto destinado á auxiliar os estudantes durante o periodo de matricula em disciplina , através da sugestão de disciplinas para matrícula . O projeto é uma extensão que  funciona a partir do navegador google chorome . ele depende paara funcionar que o usuario além de estar utilizando este navegador , esteja logado na pagina do matricula web da unb. e ja tenha importado no google chorome o compactado referente a esta extensão.   
<h2> Para executar (Para desenvolvimento): </h2>
<p>É necessário adicionar a pasta 'src/build' ao Google Chrome acessando o endereço 'chrome://extensions', habilitando o modo de desenvolvedor e em seguida carregar a pasta descompactada;É nela que estão os arquivos a serem lidos pelo navegador.

Para atualizar a extensão devido à alterações no código, primeiro é necessário compilar uma versão de build com o comando:</p>

```
npm run build
```
<p>
    > QUANDO EXECUTAR O COMANDO, É NECESSÁRIO QUE COPIE OS ARQUIVOS DA PASTA 'paste_in_build' NA PASTA 'build' POIS O COMANDO REESCREVE OS ARQUIVOS!
</p>
<p>E em seguida ir em 'chrome://extensions' no navegador e clicar no ícone de atualização para atualizar a página.</p>
