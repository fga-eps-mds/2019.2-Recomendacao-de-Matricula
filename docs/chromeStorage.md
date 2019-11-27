## Chrome Storage

O presente documento busca explanar a organização da persistência de dados pelo <strong>chrome.storage.local</strong>

A API chrome storage salva os dados de forma semelhante ao formato <strong>JSON</strong>

A pesistência do projeto fica salva da seguinte forma atualmente:

```js
status : {
    quadroResumo : true,
    requisitos : false,
    historico : false
}
materias : [{
    codigo : "codigo da matéria",
    aprovado : true,
    podeSerFeita: false,
    requisitos: []
}]
```

<strong>status</strong> indica qual das operações de leitura e salvamento de dados foi feita:

- null = nenhuma leitura realizada
- Assim que o <strong>quadro resumo</strong> é lido, os valores iniciais são configurados como mostrados acima.

<strong>materias</strong> é um vetor com as propriedades descritas acima:

- <strong>codigo</strong> indica o código da matéria
- <strong>aprovado</strong> indica se a matéria foi feita ou está sendo feita(true), senão(false)
- <strong>podeSerFeita</strong> indica se a matéria atende aos pré-requisitos e pode ser pega
- <strong>requisitos</strong> é um vetor que indica todos os pré-requisitos da matéria, salvo da seguinte forma:

    Para exemplificar, usaremos a matéria Fundamentos de Arquitetura de Computadores(FAC) que tem como pré-requisitos Sistemas Digitais 1(SD) OU Teoria de Eletrônica Digital 1(TED) E Prática de Eletrônica Digital 1(PED)

    > SD OU TED E PED

    Os conectores lógicos E e OU são importantes. 

    Todas as matérias conectadas por um E precisam ser feitas, neste caso, TED e PED devem ser feitas para que FAC possa ser cursado.

    O conector OU separa as matérias em grupos, ou seja, se a pessoa fizer SD, ela poderá cursar FAC sem ter feito as outras duas e vice-versa.

    Dessa forma o vetor do exemplo de requisitos fica salvo da seguinte forma:

    ```js
    requisitos = [["Código_SD1"], ["Código_TED", "Código_PED"]] 
    ```
    Dentro dos requisitos são criados vetores internos aos quais salvam separam todos os conectados com OU. Todos os conectados com E são colocados dentro do mesmo vetor. 

## Acesso aos elementos e salvamento

Para acessar os elementos do Chrome.storage, deve-se usar o método get:

```js
    chrome.storage.local.get(["status", "materias"], function(result){
        result.status;             //retornará o número atual do status
        result.materias;           //retornará um Array com todas as materias
        result.materias[i];       //retornará o elemento i das matérias
        result.materias[i].codigo;//retornará o código do elemento i
    })
```

Para salvar novos elementos na persistência, usa-se o método set:
    
```js
    chrome.storage.local.set({
            status : 1,
            materias : index   //index neste caso é o objeto que contém o Array com todas as matérias
        }, function(result){
            console.log("materias salvas");
        })
```

Dependendo da implementação, pode ser interessante limpar a memória e re-fazer a leitura dos dados. Para limpar a memória usa-se o método clear:

```js
    chrome.storage.local.clear();
```
