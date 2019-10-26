var elements = document.querySelectorAll("tr");
let indexCodigoMateria = 0
let indexNomeMateria = 1
let indexMencao = 3

var materias = []
var codigo, nomeMateria, mencao;

for (element of elements) {
    
    if (!isNaN(parseInt(element.textContent[0]))) { //Seleciona apenas as linhas da tabela de materias
        codigo = element.children[indexCodigoMateria].innerText;
        nomeMateria = element.children[indexNomeMateria].innerText;
        mencao = element.children[indexMencao].innerText;

        var jaCursada = false;
        var reprovacoes = 0;

        if (mencao == "SR" || mencao == "II" || mencao == "MI") { //Verifica se o usuario reprovou
            reprovacoes = 1;
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
                reprovacoes,
                mencoes : [mencao]
            });
        }
        
    }
}