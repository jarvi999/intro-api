document.addEventListener('DOMContentLoaded', function(){
    //como obtengo la informacion de los actores de la api?
    //usando fetch
    fetch('https://web.dragonball-api.com/api/characters')
        .then(res => respuesta)
});