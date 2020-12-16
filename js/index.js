//Quiero crear cartas que "peleen" entre sí y quien tenga mayor valor de la estadistica que elijas, gane.


//Primero quiero saber un poco sobre el Usuario.
sessionStorage.setItem('nombreDelUsuario', prompt('Ingrese su Nombre'))
sessionStorage.setItem('edadDelUsuario', prompt('Ingrese su Edad'))
sessionStorage.setItem('equipoDelUsuario', prompt("¿De que equipo sos hincha?"))

var equipoDelUsuario = sessionStorage.getItem('equipoDelUsuario');

var tuEquipoEs = document.createElement('p')
tuEquipoEs.innerHTML = "¡WOW!¡Sos hincha de " + equipoDelUsuario + "!";
$("#titulo").append(tuEquipoEs)


function cartas(nombre, equipo, posicion, defensa, ataque) {
    this.Nombre = nombre;
    this.Equipo = equipo;
    this.Posicion = posicion;
    this.Defensa = defensa;
    this.Ataque = ataque;
    this.Promedio = ((this.Ataque + this.Defensa) / 2);

    this.estadisticaAUsar = function estadisticaQueUsa(posicion) {
        if (posicion == "delantero") {
            console.log("Su carta usa la estadística: " + this.Ataque)
        }
        else if (posicion == "mediocampista") {
            console.log("Su carta usa la estadística: " + this.Promedio)
        }
        else {
            console.log("Su carta usa la estadistica: " + this.Defensa)
        }
    }

    var listaPosiciones = ["arquero", "defensa", "mediocampista", "delantero"]

}

//Quiero obtener los datos que ingreso el usuario en el Form
// y cuando el usuario apriete el boton, le salte un alert 
// de la carta que el creó.


var carta1JSON = '{"nombre":"Franco Armani",  "equipo":"River Plate",  "posicion":"arquero","defensa":"90","ataque":"5"}'
var carta1 = new cartas(JSON.parse(carta1JSON))

var carta2 = new cartas("Rafa Borre", "River Plate", "delantero", 20, 80)
var carta2JSON = JSON.parse(JSON.stringify(carta2))


var ataqueRandom = calcularAtaque(posicionJugador);
var defensaRandom = calcularDefensa(posicionJugador);
var promedioJugador = ((ataqueRandom + defensaRandom) / 2);



var cartaCreadaUsuario = new cartas(nombreJugador, equipoJugador, posicionJugador, ataqueRandom, defensaRandom, promedioJugador)

$('#btn1').click(function mostrarJugador() { 
  debugger
    var nombreJugador = $('#nombreJugador').val();
    var equipoJugador = $('#equipoJugador').val();
    var posicionJugador = $('#posicionJugador').val();

    // var ataqueRandom = calcularAtaque(posicionJugador);
    
    // var defensaRandom = calcularDefensa(posicionJugador);

    // var promedioJugador = ((ataqueRandom + defensaRandom) / 2);



    var cartaCreadaUsuario = new cartas(nombreJugador, equipoJugador, posicionJugador, ataqueRandom, defensaRandom, promedioJugador)

    // alert('Tu jugador se llama ' + cartaCreadaUsuario.Nombre + ', juega para ' + cartaCreadaUsuario.Equipo + ' de ' + cartaCreadaUsuario.Posicion + '. Su ataque es ' +
    // cartaCreadaUsuario.Defensa + ' y su defensa es ' + cartaCreadaUsuario.Ataque + '.');
    
    document.getElementById('informacion-jugador').innerHTML = ('Tu jugador se llama ' + cartaCreadaUsuario.Nombre + ', juega para ' + cartaCreadaUsuario.Equipo + ' de ' + cartaCreadaUsuario.Posicion + '. Su ataque es ' +
       cartaCreadaUsuario.Defensa + ' y su defensa es ' + cartaCreadaUsuario.Ataque + '.');    

    document.getElementById('stats-jugador-1').innerHTML = ('El promedio de las estadisticas de ' + cartaCreadaUsuario.Nombre + ' es: ' + cartaCreadaUsuario.Promedio);
});




$('#mostrarForm').click(function () {
    $('.espacio-grande').fadeIn(1000)
});

$('#ocultarForm').click(function(){
    $('.espacio-grande').fadeOut(1000)
})


$('#nombreJugador').keypress(function (event) { 
    if(event.which == 13 || event.keyCode == 13){
        alert('Acá va el nombre de tu jugador')
    }
    
});

$('#equipoJugador').keypress(function (event) { 
    if(event.which == 13 || event.keyCode == 13){
        alert('Acá va el nombre del pais de tu jugador')
    }
    
});

$('#IdJugador').keypress(function (event) { 
    if(event.which == 13 || event.keyCode == 13){
        alert('Ingresá un número del 1 al 500 aquí')
    }
    
});

function calcularDefensa(posicionJugador) {
    if (posicionJugador == "delantero") {
        return Math.floor(Math.random() * 33) + 1;
    }
    else if (posicionJugador == "mediocampista") {
        return Math.floor(Math.random() * (66 - 34 + 1) ) + 34;
    }
    else {
        return Math.floor(Math.random() * (99 - 67 + 1) ) + 67 ;
    }
}


function calcularAtaque(posicionJugador) {
    if (posicionJugador == "delantero") {
        return Math.floor(Math.random() * (99 - 67 + 1) ) + 67;
    }
    else if (posicionJugador == "mediocampista") {
        return Math.floor(Math.random() * (66 - 34 + 1) ) + 34;
    }
    else  {
        return Math.floor(Math.random() * 33) + 1;
    }
}




function ConsultarAPI() { 
    var IdJugador = $('#IdJugador').val()
debugger
    $.ajax({
        headers: { 'X-Auth-Token': '752eb13a3cf9471e9d56e4f8b67ea839' },
        url: 'http://api.football-data.org/v2/players/'+IdJugador,
        dataType: 'json',
        type: 'GET',
        data: {

        }
      }).done(function(response) {
          debugger
        $("#nombre").val(response.name)
            console.log(response)
        $("#pais").val(response.nationality)
            console.log(response)  
        $("#position").val(response.position)
            console.log(response)
      });




    return false;
};










//se le van a agregar estadísticas de la misma forma que al jugador creado por el usuairo y las medire entre sí

var posicionJugadorAPI = $('#pais').val();
var ataqueRandomAPI = calcularAtaqueAPI(posicionJugadorAPI);
var defensaRandomAPI = calcularDefensaAPI(posicionJugadorAPI);
var promedioJugadorAPI = ((ataqueRandomAPI + defensaRandomAPI) / 2); 

$('#btn2').click(function(){
    $('#pelea').fadeIn(1000);

    var nombreJugadorAPI = $("#nombre").val();
    var posicionJugadorAPI = $('#pais').val();
    var ataqueRandomAPI = calcularAtaqueAPI(posicionJugadorAPI);
    var defensaRandomAPI = calcularDefensaAPI(posicionJugadorAPI);
    // var promedioJugadorAPI = ((ataqueRandomAPI + defensaRandomAPI) / 2) ;


    document.getElementById('stats-jugador-2').innerHTML = ('El promedio de las estadisticas de ' + nombreJugadorAPI + ' es: ' + promedioJugadorAPI);
});


function resultadoPelea(){
    debugger
    var promedio1 = promedioJugador;
    var promedio2 = promedioJugadorAPI;
    var nombre1 = $('#nombreJugador').val();
    var nombre2 = $("#nombre").val();

    if( promedio1 > promedio2){
        alert("¡GANASTE! El vencedor de la batalla es: " + nombre1);
        document.getElementById('pelea').style.backgroundColor='#59FF00'
    } else if( promedio2 > promedio1){
        alert("¡UPS!¡Ganó la máquina! El ganador de la batalla es: " + nombre2);
        document.getElementById('pelea').style.backgroundColor='#FF0000'
    }else{
        alert("!HAY UN EMPATE EN EL SISTEMA¡")
        document.getElementById('pelea').style.backgroundColor='#FFFB00'
    }
};

function calcularDefensaAPI(posicionJugadorAPI) {
    if (posicionJugadorAPI == "Attacker") {
        return Math.floor(Math.random() * 33) + 1;
    }
    else if (posicionJugadorAPI == "Midfielder") {
        return Math.floor(Math.random() * (66 - 34 + 1) ) + 34;
    }
    else {
        return Math.floor(Math.random() * (99 - 67 + 1) ) + 67 ;
    }
}


function calcularAtaqueAPI(posicionJugadorAPI) {
    if (posicionJugadorAPI == "Attacker") {
        return Math.floor(Math.random() * (99 - 67 + 1) ) + 67;
    }
    else if (posicionJugadorAPI == "Midfielder") {
        return Math.floor(Math.random() * (66 - 34 + 1) ) + 34;
    }
    else  {
        return Math.floor(Math.random() * 33) + 1;
    }
}