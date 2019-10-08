|Data|Versão|Descrição|Autor|
|----|------|---------|-----|
|25/09/2019|0.1|Criação do documento base|Matheus Clemente|

---

## Documento de Arquitetura

### 1. Intrudoção

#### 1.1. Finalidade

<p>
Este documento visa esclarecer as decisões arquiteturais tomadas em relação ao sistema a ser produzido. Nele, procura-se ilustrar detalhes do modelo de arquitetura de software utilizado no desenvolvimento da aplicação.
</p>


#### 1.2. Escopo

<p>
Este documento de arquitetura retrata o modelo arquitetural implementado no desenvolvimento do projeto "___", uma extensão para o navegador Google Chrome para recomendação de matérias na plataforma Matrícula Web, com intuito de auxiliar alunos na elaboração de suas grades horárias.
</p>


#### 1.3. Definições, acrônimos e abreviações

//EDITAR COM AS SIGLAS RELEVANTES AO PROJETO
|Sigla|Significado|
|----|------|
|HTML|Hypertext Markup Language (Linguagem de Marcação de Hipertexto)|
|HTTP|Hypertext Transfer Protocol (Protocolo de Transferência de Hipertexto)|
|||


#### 1.4. Referências

Microsserviços em poucas palavras. ThoughtWorks. Disponível em: (https://goo.gl/AQNy6p). Acesso em: 28 de março de 2018.


#### 2. Visão geral

<p>
O presente documento descreve detalhadamente as características de arquitetura de software escolhidas pela equipe.
</p>

### 2. Representação da arquitetura
#### 2.1 Diagrama de relações
![Diagrama de relações da arquitetura](https://i.imgur.com/UoeLLqi.png)

<p>
O usuário interage primariamente com o site Matrícula Web, que tem sua interface alterada em pontos chave, através da extensão. O programa, por si, comunica-se com a interface HTML do site e apresenta os dados da mesma de forma personalizada ao usuário.
</p>

### 3. Objetivos e restrições da arquitetura

<p>
A seguir, estao listadas objetivos e restriçÕes do sistema relevantes à arquitetura:

- A aplicação, por se tratar de uma extensão para navegador, necessita obrigatoriamente que o usuário utilize o referido navegador (Google Chrome Versão 77.0.3865.90).
- Funciona exclusivamente no site Matrícula Web, além de depender dos dados providos por ele.
 </p>
