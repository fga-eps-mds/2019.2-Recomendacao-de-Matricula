# Recomendação de Matrícula
### Visão
#### Versão 1.0

## Histórico de Revisão

| Data | Versão | Descrição | Autor |
| ---- | ------ | --------- | ----- |
|27/09/2019| 1.0 | Criação do documento. | Lucas Cortes

## Sumário
 [1. Introdução](#_1-introdução) <br>
&emsp; [1.1 Objetivo](#_11-objetivo) <br>
&emsp; [1.2 Escopo](#_12-escopo) <br>
&emsp; [1.3 Definições, Acrônimos e Abreviações](#_13-definições-acrônimos-e-abreviações) <br>
&emsp; [1.4 Referências](#_14-referências) <br>
&emsp; [1.5 Visão Geral](#_15-visão-geral) <br>
[2. Posicionamento](#_2-Posicionamento) <br>
&emsp; [2.1. Oportunidade de Negócios](#_21-oportunidade-de-negócios) <br>
&emsp; [2.2. Declaração do Problema](#_22-declaração-do-problema) <br>
&emsp; [2.3. Declaração da Posição do Produto](#_23-declaração-da-posição-do-produto) <br>
[3. Descrições da Parte Interessada e do Usuário](#_3-descrições-da-parte-interessada-e-do-usuário) <br>
&emsp; [3.1 Resumo da parte interessada](#_31-resumo-da-parte-interessada) <br>
&emsp; [3.2 Resumo do usuário](#_32-resumo-do-usuário) <br>
&emsp; [3.3 Ambiente do Usuário](#_33-ambiente-do-usuário) <br>
&emsp; [3.4 Perfis das partes interessadas](#_34-perfis-das-partes-interessadas) <br>
&emsp; &emsp; [3.4.1 Equipe de Desenvolvimento](#_341-equipe-de-desenvolvimento) <br>
&emsp; &emsp; [3.4.2 Equipe de Engenharia de Produto](#_342-equipe-de-engenharia-de-produto) <br>
&emsp; &emsp; [3.4.3 Professoras](#_343-professoras) <br>
&emsp; [3.5 Perfis de Usuários](#_35-perfis-de-usuário) <br>
&emsp; [3.6 Necessidades Principais do Investidor ou Usuário](#_36-necessidades-principais-do-investidor-ou-usuário) <br>
[4. Visão geral do Produto](#_4-visão-geral-do-produto) <br>
&emsp; [4.1. Perspectiva do Produto](#_41-perspectiva-do-produto) <br>
&emsp; [4.2. Resumo de Recursos](#_42-resumo-de-recursos) <br>
[5. Recursos do Produto](#_5-recursos-do-produto) <br>
[6. Restrições do Produto](#_6-restrições-do-produto) <br>
&emsp; [6.1  Restrições de implementação](#_61-restrições-de-implementação) <br>
&emsp; [6.2  Restrições externas](#_62-restrições-externas) <br>
&emsp; [6.3  Restrições de Confiabilidade](#_63-restrições-de-confiabilidade) <br>
[7. Faixas de Qualidade](#_7-faixas-de-qualidade) <br>
[8. Requisitos do Produto](#_8-requisitos-do-produto) <br>
&emsp; [8.1 Requisitos do Sistema](#_81-requisitos-do-sistema) <br>
&emsp; [8.2 Requisitos de Design](#_82-requisitos-de-design) <br>
&emsp; [8.3 Requisitos de Portabilidade](#_83-requisitos-de-Portabilidade) <br>

## 1. Introdução
Essa introdução possui a finalidade de abordar os principais tópicos da visão geral do produto, definindo seu propósito, escopo, definições, acrônimos, abreviações e referências.
### 1.1 Objetivo
Esse documento tem o propósito de determinar as características gerais do desenvolvimento da extensão Recomendação de Matrícula, definindo seu objetivo, suas funcionalidades, sua razão de necessidade, restrições e seus requisitos. 

### 1.2 Escopo

A extensão Recomendação de Matrícula irá atuar juntamente com o site do matrícula web, analisando os dados dos alunos, será capaz de montar grades horárias para alunos regularmente matrículados em um curso da UnB Gama - FGA.

As grades horárias serão montadas de acordo com a necessidade do aluno, portanto a extensão possuirá as seguintes funcionalidades:

* A extensão irá montar a grade horária por período e dias da semana, de acordo com que o usuário desejar.

* A grade horária poderá ser montada de acordo com o número desejado de créditos semestrais.

* A extensão terá a funcionalidade de destacar na página da oferta as matérias específicas de acordo com a opção de curso do usuário.

* Montar um fluxograma com as matérias necessárias para o término do curso.

* A extensão irá notificar o aluno caso possua algum tipo de risco de desligamento.

### 1.3 Definições, Acrônimos e Abreviações
| Abreviação | Definição |
|--|--|
| UnB | Universidade do Brasília |
| FGA | Faculdade do Gama |
| MDS | Métodos de Desenvolvimento de Software|
| EPS | Engenharia do Produto de Software|

### 1.4 Referências

 - IBM Knowledge Center - Documento de Visão: A estrutura de tópicos do documento de visão. Disponível em: [https://www.ibm.com/support/knowledgecenter/pt-br/SSWMEQ_4.0.6/com.ibm.rational.rrm.help.doc/topics/r_vision_doc.html](https://www.ibm.com/support/knowledgecenter/pt-br/SSWMEQ_4.0.6/com.ibm.rational.rrm.help.doc/topics/r_vision_doc.html)
 - Chatbot Gaia: Documento de Visão. Disponível em: [https://github.com/fga-eps-mds/2019.1-Gaia/blob/master/docs/produto/DocVisao.md](https://github.com/fga-eps-mds/2019.1-Gaia/blob/master/docs/produto/DocVisao.md)
 
### 1.5 Visão Geral
Esse documento detalha o planejamento e a construção da extensão Recomendação de Matrícula, bem como suas características e funcionalidades. Esse documento é organizado para facilitar o entendimento do produto e será divido em tópicos referentes a posicionamento, descrições de usuário, visão geral do produto, recursos e restrições.

## 2. Posicionamento
### 2.1 Oportunidade de Negócios
Em geral, os alunos da FGA gastam horas para montar uma grade horária que se adeque aos seus horários e necessidades. A extensão Recomendação de Matrícula visa automatizar esse processo, montando grades horárias de acordo com que o usuário desejar, auxiliando o aluno para que ele possua uma melhor experiência na universidade, concluir a graduação em tempo hábil e sem riscos de desligamento.

### 2.2 Declaração do Problema
| O problema | afeta | cujo impacto é | uma boa solução seria | 
| ------------- | ----- | -------------- | --------------------- | 
| Dificuldade em montar uma grade horária compatível com as adversidades internas e externas vida acadêmica | Alunos da FGA | Grades horárias com janelas de horários e/ou atrasos na graduação | Automatizar a montagem das grades horárias para que sejam compatíveis as necessidades dos alunos sem que gerem problemas futuros. |

### 2.3 Declaração da Posição do Produto
| Público Alvo | Que | Recomendação de Matrícula | Que | | Nosso produto | 
| ---- | --- | ------ | --- | ------------ | ------------- |
| Estudantes da FGA | Possuem dificuldades e/ou desejam automatizar a montagem de grades horárias | É uma extensão do navegador web Google Chrome | Automotiza a montagem de grades horárias de acordo com a necessidade do aluno | |  | 

## 3. Descrições da Parte Interessada e do Usuário
### 3.1 Resumo da parte interessada
| Nome | Descrição | Responsabilidade |
| ---- | --------- | ---------------- |
| Equipe de desenvolvimento |Alunos da UnB Gama - FGA matrículados na disciplina MDS. | Desenvolvimento e teste do software, elaborar documentação. |
| Equipe de engenharia de produto | Alunos da UnB Gama - FGA matrículados na disciplina EPS. |Gerenciar a equipe de desenvolvimento, aplicando as metodologias ágeis e configurando o ambiente de desenvolvimento. |
| Carla Rocha e Joenio Marques | Professores da FGA, do curso de Engenharia de Software. | Orientar e acompanhar o desenvolvimento do projeto. |

### 3.2 Resumo do Usuário
| Nome | Descrição | Responsabilidades |
|----- | --------- | ----------------- |
| Alunos da FGA | Alunos que desejam poupar tempo e automatizar a criação de grades horárias. | Interagir com a extensão e se matricular, no site do matrícula web, nas matérias recomendadas. |

### 3.3 Ambiente do Usuário
Para ter acesso a extensão o usuário terá que utilizar, necessariamente, o navegador de internet Google Chrome, ter acesso a internet, ser aluno regularmente matrículado na UnB Gama e estar logado no site matrícula web.

### 3.4 Perfis das partes interessadas
#### 3.4.1 Equipe de Desenvolvimento
| Representantes | Descrição | Tipo | Responsabilidade | Critério de sucesso | Envolvimento |
| -------------- | --------- | ---- | ---------------- | ------------------- | ------------ |
| Felipe Machado, Lucas Cortes, Matheus Clemente, Thiago Luiz e Wagner Martins | Desenvolvedores | Alunos da UnB Gama - FGA matrículados na disciplina MDS. | Desenvolvimento e teste do software, elaborar documentação. | Desenvolver o produto no prazo com todas as funcionalidades atendidas| Alto |

#### 3.4.2 Equipe de Engenharia de Produto
| Representantes | Descrição | Tipo | Responsabilidade | Critério de sucesso | Envolvimento |
| -------------- | --------- | ---- | ---------------- | ------------------- | ------------ |
| Emanuel Holanda Barroso e Marcos Diego | Gestores | Alunos da UnB Gama - FGA matrículados na disciplina EPS. | Gerenciar a equipe de desenvolvimento, aplicando as metodologias ágeis e configurando o ambiente de desenvolvimento. | Garantir a qualidade e o prazo estipulado | Alto |

#### 3.4.3 Professoras
| Representantes | Descrição | Tipo | Responsabilidade | Critério de sucesso | Envolvimento |
| -------------- | --------- | ---- | ---------------- | ------------------- | ------------ |
| Carla Rocha e Joenio Marques| Orientadores | Professores da FGA |Orientar, acompanhar e avaliar o desenvolvimento do projeto. | Avaliar o produto em âmbito geral | Médio |

### 3.5 Perfis de Usuário
| Representantes | Descrição | Tipo | Responsabilidade | Critério de sucesso | Envolvimento |
| -------------- | --------- | ---- | ---------------- | ------------------- | ------------ |
| Alunos da FGA | Alunos que desejam poupar tempo e automatizar a criação de grades horárias. | Usuário | Matricular nas matérias recomendadas | Obter as recomendações em formato de grade horária de acordo com sua necessidade. | Alto |

### 3.6 Necessidades Principais do Investidor ou Usuário
| Necessidade | Prioridade | Interesse | Solução Atual | Solução Proposta |
| ----------- | ---------- | --------- | ------------- | ---------------- |
| Receber as recomendações de matrícula por período e dias da semana | Alta | Automatizar o processo | Montar manualmente | Receber a grade horária montada através da extensão Recomendação de Matrícula |
| Montar a grade horária de acordo com o número de créditos desejados. | Alta | Automatizar o processo | Montar manualmente | Receber a grade horária montada através da extensão Recomendação de Matrícula |
| Receber um fluxograma com o planejamento do restante da graduação | Alta | Possuir um planejamento do curso e estimativa de conclusão | Verificar, individualmente, as matérias restantes no quadro resumo | Receber a grade horária montada através da extensão Recomendação de Matrícula |
| Receber uma notificação caso haja algum risco de desligamento | Alta | Ser informado antes de entrar em condição e/ou risco de desligamento | Recebe a informação no site somente quando entra em condição | Receber a notificação de risco de desligamente antecipadamente para poder evitá-la |
| Filtragem das matérias na página de oferta | Alta | Facilitar a busca de matérias específicas da opção de curso | Identificar manualmente | Destacar as matérias na página de oferta de acordo com a opção de curso do aluno, diferenciando as matérias restantes das já concluídas |
## 4. Visão Geral do Produto
### 4.1 Perspectiva do Produto
A Recomendação de Matrícula será uma extensão do navegador Google Chrome em que o usuário poderá, com alguns cliques, gerar grades horárias planejadas de acordo com a sua necessidade do momento. A extensão será capaz de montar e mostrar a grade horária para o usuário, restando a ele somente se matrícular nas matérias recomendadas.

### 4.2. Resumo de Recursos
| Benefício para o cliente | Recursos de suporte |
|------------------------- | ------------------- |
| Reduzir o tempo gasto com planejamento e montagem das grades horárias | Lendo o histórico do aluno e a oferta das matérias, a extensão será capaz de montar as grades horárias e gerar um fluxograma com as matérias restantes para conclusão da graduação. |
| Filtragem das matérias na página de oferta | Serão destacadas na página da oferta as matérias referentes a opção de curso do aluno, distinguindo as matérias concluídas e não concluídas. |
| Reduzir o risco de desligamento | Montar as grades horárias visando evitar qualquer tipo de riso de desligamento, notificando o usuário caso sua grade o deixe em condição |

## 5. Recursos do Produto
### 5.1 Extensão de fácil uso e instalação.
### 5.2 Permitir ao usuário escolher qual critério de montagem de sua grade horária, tais como:
* Período e dias da semana;
* Número de créditos por semestre;

### 5.3 Notificar o usuário caso haja algum riso de desligamento.
### 5.4 Destacar na página de oferta as matérias específicas de seu curso.
### 5.5 Montar um fluxograma com o planejamento do restante do curso.

## 6. Restrições do Produto
### 6.1 Restrições de implementação
O software será implementado em Javascript para o Back-end e sua biblioteca React para o Front-end.

### 6.2 Restrições externas
A pouca experiência com as tecnologias da implementação e com as tecnicas de desenvolvimento em grupo, em conjunto com o tempo justo, trazem grandes riscos a entrega completa do produto. 

### 6.3 Restrições de Confiabilidade
O sistema terá uma cobertura de testes.

## 7. Faixas de Qualidade
A interação com usuário será rápida, de forma que o usuário apenas logue no site do matrícula web e abra a extensão, escolhendo em alguns passos como sua grade horária será montada.

Pelo motivo do site do matrícula web não possuir uma API, os dados serão obtidos com Web crawler, logo, todo funcionamento da extensão depende da estabilidade do site.

## 8. Requisitos do Produto

### 8.1 Requisitos do Sistema
Para ter acesso a extensão o usuário terá que utilizar, necessariamente, o navegador de internet Google Chrome, ter acesso a internet, ser aluno regularmente matrículado na UnB Gama e estar logado no site matrícula web.

### 8.2 Requisitos de Design
O sistema deverá ser intuitivo, com uma tela limpa e poucos botões. Em poucos passos e uma fácil interação, o usuário deverá ter o resultado das recomendações de matrícula em poucos minutos.

### 8.3 Requisitos de Portabilidade
O sistema será utilizável em qualquer computador compatível com o navegador Google Chrome.
