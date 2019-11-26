# Recomendação de Matrícula
### Visão
#### Versão 1.1

## Histórico de Revisão

| Data | Versão | Descrição | Autor |
| ---- | ------ | --------- | ----- |
|27/09/2019| 1.0 | Criação do documento. | Lucas Cortes
|26/11/2019| 1.1 | Atualização do escopo. | Wagner Martins

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

A extensão Recomendação de Matrícula irá atuar juntamente com o site do matrícula web, analisando os dados dos alunos, será capaz de destacar as matérias do curso de alunos regularmente matrículados em um curso da UnB Gama - FGA.

Os destaques serão implementados de acordo com as principais matérias presentes no curso do aluno, portanto a extensão possuirá as seguintes funcionalidades:

* A extensão terá a funcionalidade de destacar na página da oferta, currículo e fluxo, as matérias específicas de acordo com a opção de curso do usuário.

* A extenção destacará as matérias de acordo com o histórico do aluno, desta forma, a mostrar as matérias já aprovadas, com pré-requisitos atendidos, e disciplinas que ainda não podem ser cursadas.

* A extensão destacará disciplinas que tenham algum tipo de risco de desligamento.

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
Em geral, os alunos da FGA gastam horas para montar uma grade horária que se adeque aos seus horários e necessidades. A extensão Recomendação de Matrícula visa auxiliar na procura das matérias, auxiliando o aluno para que ele possua uma melhor experiência com a plataforma do Matricula Web.

### 2.2 Declaração do Problema
| O problema | afeta | cujo impacto é | uma boa solução seria | 
| ------------- | ----- | -------------- | --------------------- | 
| Dificuldade em montar uma grade horária compatível com as adversidades internas e externas vida acadêmica | Alunos da FGA | Grades horárias com janelas de horários e/ou atrasos na graduação | Automatizar a montagem das grades horárias para que sejam compatíveis as necessidades dos alunos sem que gerem problemas futuros. |

### 2.3 Declaração da Posição do Produto
| Público Alvo | Que | Recomendação de Matrícula | Que | | Nosso produto | 
| ---- | --- | ------ | --- | ------------ | ------------- |
| Estudantes da FGA | Possuem dificuldades em encontrar as matérias do curso no período de matrícula | É uma extensão do navegador web Google Chrome | Destaca as matérias do curso de acordo com o histórico do aluno | |  | 

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
| Alunos da FGA | Alunos que desejam encontrar as matérias de seu curso em menor tempo. | Interagir com a extensão e se matricular, no site do matrícula web, nas matérias recomendadas. |

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
| Alunos da FGA | Alunos que desejam poupar tempo no momento da matrícula. | Usuário | Matricular nas matérias recomendadas | Obter um destaque das principais matérias do curso nas páginas de oferta, currículo e fluxo. | Alto |

### 3.6 Necessidades Principais do Investidor ou Usuário
| Necessidade | Prioridade | Interesse | Solução Atual | Solução Proposta |
| ----------- | ---------- | --------- | ------------- | ---------------- |
| Filtragem das matérias na página de oferta, currículo e fluxo | Alta | Facilitar a busca de matérias específicas da opção de curso | Identificar manualmente | Destacar as matérias na página de oferta de acordo com a opção de curso do aluno, diferenciando as matérias restantes das já concluídas |
| Filtragem das matérias visando os pré-requisitos | Alta | Facilitar a busca de matérias que já podem ser cursadas dentro do fluxo | Busca manual | Destacar as matérias que ainda não foram cursadas de acordo com a possibilidade atual de cursar a disciplina através dos pré-requisitos |
| Filtragem das matérias visando as condições de desligamento | Alta | Ser informado antes de entrar em condição e/ou risco de desligamento | Recebe a informação no site somente quando entra em condição | Exibir no destaque as matérias que apresentarem riscos |

## 4. Visão Geral do Produto
### 4.1 Perspectiva do Produto
A Recomendação de Matrícula será uma extensão do navegador Google Chrome em que o usuário poderá, com alguns cliques, visualizar as principais matérias de seu curso destacadas.

### 4.2. Resumo de Recursos
| Benefício para o cliente | Recursos de suporte |
|------------------------- | ------------------- |
| Reduzir o tempo gasto procurando matérias do curso no site do Matrícula Web | Lendo o quadro resumo, e o histórico do aluno, a extensão destacará as disciplinas principais de seu curso. |
| Filtragem das matérias na página de oferta | Serão destacadas na página da oferta as matérias referentes a opção de curso do aluno, distinguindo as matérias concluídas e não concluídas, e identificando se elas podem ou não ser cursadas. |
| Reduzir o risco de desligamento | Destacar as matérias que apresentarem as condições para o risco de desligamento. |

## 5. Recursos do Produto
### 5.1 Extensão de fácil uso e instalação.
### 5.2 Auxiliar o usuário na visualização das matérias de seu curso, nas páginas de oferta, fluxo e currículo, visando:
* Se a matéria já foi cursada;
* Se a matéria não foi cursada, e se ela pode ser cursada;
* Se a matéria apresenta riscos de desligamento;

## 6. Restrições do Produto
### 6.1 Restrições de implementação
O software será implementado em Javascript para o Back-end e sua biblioteca React para o Front-end.

### 6.2 Restrições externas
A pouca experiência com as tecnologias da implementação e com as tecnicas de desenvolvimento em grupo, em conjunto com o tempo justo, trazem grandes riscos a entrega completa do produto. 

### 6.3 Restrições de Confiabilidade
O sistema terá uma cobertura de testes.

## 7. Faixas de Qualidade
A interação com usuário será rápida, de forma que o usuário apenas logue no site do matrícula web e siga alguns passos para que o destaque esteja disponível.

Pelo motivo do site do matrícula web não possuir uma API, os dados serão obtidos com Web crawler, logo, todo funcionamento da extensão depende da estabilidade do site.

## 8. Requisitos do Produto

### 8.1 Requisitos do Sistema
Para ter acesso a extensão o usuário terá que utilizar, necessariamente, o navegador de internet Google Chrome, ter acesso a internet, ser aluno regularmente matrículado na UnB Gama e estar logado no site matrícula web.

### 8.2 Requisitos de Design
O sistema deverá ser intuitivo, com uma tela limpa e poucos botões. Em poucos passos e uma fácil interação, o usuário deverá ter o resultado das recomendações de matrícula em poucos minutos.

### 8.3 Requisitos de Portabilidade
O sistema será utilizável em qualquer computador compatível com o navegador Google Chrome.
