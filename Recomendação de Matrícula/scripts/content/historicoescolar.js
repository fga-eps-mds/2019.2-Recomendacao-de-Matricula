var elements = document.querySelectorAll("tr");
let indexCodigoMateria = 0
let indexNomeMateria = 1
let indexMencao = 3
let indexCreditos = [4, 5, 6, 7]

var materias = []
var codigo, nomeMateria, aprovado, reprovacoes, mencao;
var semestres = []
var periodo = null, quantidadeAprovacoes, creditos;

chrome.storage.local.get(["materiasHistorico", "semestresCursados", "status"], function(result){
    if(result.materiasHistorico == null){
        leituraFeita = false;
    }
    else{
        leituraFeita = true;
    }
    console.log(leituraFeita)

    if(leituraFeita == false){
        for (element of elements) {

            //Creditos por periodo
            if (element.textContent[0] == 'P') {
                if (periodo != null) {
                    semestres.push({
                        periodo,
                        quantidadeAprovacoes,
                        creditos
                    });
                }
                periodo = element.children[1].innerText;
                quantidadeAprovacoes = 0;
                creditos = 0;
            }

            //Materias cursadas
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
                
                if (aprovado) {
                    quantidadeAprovacoes++;
                    for (index of indexCreditos) { //Percorre todas as casas da tabela onde pode haver valor de creditos
                        let valorCreditos = parseInt(element.children[index].innerText);
                        if (!isNaN(valorCreditos)) {
                            creditos += valorCreditos;
                        }
                    }
                }
            }
        }
        semestres.push({
            periodo,
            quantidadeAprovacoes,
            creditos
        });

        result.status.historico = true;

        chrome.storage.local.set({
            materiasHistorico : materias,
            semestresCursados : semestres,
            status : result.status
        }, function(result){
            console.log("materias armazenadas", materias.length);
            console.log("semestres:", semestres);
        })
    }
 
})
