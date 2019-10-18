var materias

chrome.storage.local.get(["materiasR"], function(result){ 
    materias = result.materiasR
    for(codigo of materias){
        $.get( "https://matriculaweb.unb.br/graduacao/disciplina.aspx?cod=".concat(codigo), function( data ) {
            console.log(data)
        });
    }
})
