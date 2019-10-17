option = ["193674", "119466"]
var i = 0

for(a in option){
    $.get( "https://matriculaweb.unb.br/graduacao/disciplina.aspx?cod=" + a, function( data ) {
        console.log(data);
    });
}