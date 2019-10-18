var option = ["193674", "119466"]
var i = 0

for(a of option){
    $.get( "https://matriculaweb.unb.br/graduacao/disciplina.aspx?cod=".concat(a), function( data ) {
        console.log(data)
    });
}
