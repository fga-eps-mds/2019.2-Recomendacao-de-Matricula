var elements = document.querySelectorAll("tr");
let indexCodigoMateria = 0
let indexNomeMateria = 1
let indexMencao = 3

var materias = []
var codigo, nomeMateria, aprovado, reprovacoes, mencao;

chrome.storage.local.get(["materiasHistorico"], function(result){
    if(result.materiasHistorico == null){
        leituraFeita = false;
    }
    else{
        leituraFeita = true;
    }
    console.log(leituraFeita)

    if(leituraFeita == false){
        for (element of elements) {
            if (!isNaN(parseInt(element.textContent[0]))) { //Seleciona apenas as linhas da tabela de materias
                codigo = element.children[indexCodigoMateria].innerText;
                nomeMateria = element.children[indexNomeMateria].innerText;
                mencao = element.children[indexMencao].innerText;

                var jaCursada = false;
                aprovado = false;
                reprovacoes = 0;

                if (mencao == "SR" || mencao == "II" || mencao == "MI") { //Verifica se o usuario reprovou
                    reprovacoes = 1;
                } else if (mencao == "MM" || mencao == "MS" || mencao == "SS") {
                    aprovado = true;
                }

                for (materia of materias) {
                    if (codigo == materia.codigo) { //Verifica se a materia ja foi cursada
                        materia.mencoes.push(mencao);
                        materia.reprovacoes += reprovacoes;
                        jaCursada = true;
                        break;
                    }
                }

                if (!jaCursada) {
                    materias.push({ 
                        codigo,
                        nomeMateria,
                        aprovado,
                        reprovacoes,
                        mencoes : [mencao]
                    });
                }   
            }
        }
        chrome.storage.local.set({
            materiasHistorico : materias
        }, function(result){
            console.log(materias.length, "materias armazenadas");
        })
    }
})

for (materia of materias) {
    if (!materia.aprovado && materia.reprovacoes >= 2) {
        console.log("RISCO DE DESLIGAMENTO")
        console.log(materia.nomeMateria)
    }
}

