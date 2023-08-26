//variables globales
let nombre;

// opciones = ["piedra", "papel", "tijera"];
let opciones = [0, 1, 2];
let eleccionMaquina;
let eleccionJugador;

//funciones


function saludarJugador() {
    nombre = document.getElementById("nombreUsuario").value;

    if (nombre == "" || !(isNaN(nombre))) {
        document.getElementById("saludoUsuario").innerHTML = "Ingrese su nombre";
    }
    document.getElementById("saludoUsuario").innerHTML = "Hola " + " " + nombre + " " + "empecemos a jugar!!!";
}


function partida(eleccionJugador) {
    let contadorJugador;
    let contadorCPU;

    numero = Math.floor(Math.random() * 2);
    eleccionMaquina = opciones[numero];


    if (eleccionJugador == 0 && opciones[eleccionMaquina] == 1 || eleccionJugador == 1 && opciones[eleccionMaquina] == 2 || eleccionJugador == 2 && opciones[eleccionMaquina] == 0) {
        //gana la compu
        contadorCPU ++ ;
    } else if (eleccionJugador == 0 && opciones[eleccionMaquina] == 2 || eleccionJugador == 1 && opciones[eleccionMaquina] == 0 || eleccionJugador == 2 && opciones[eleccionMaquina] == 1) {
        // gana jugador
        contadorJugador ++ ;
    } else {
        //empate-
    }
    
    if (contadorCPU > 3) {
        //gana el juego CPU
    } else if (contadorJugador > 3) {
        //gana el juego el jugador
    } else {

    }


}

function botonPiedra() {
    eleccionJugador = opciones[0]
    partida(eleccionJugador)
}

function botonPapel() {
    eleccionJugador = opciones[1]
    partida(eleccionJugador)
}

function botonTijera() {
    eleccionJugador = opciones[2]
    partida(eleccionJugador)
}


document.addEventListener("DOMContentLoaded", function () {
    //llama a todas las funciones
    botonIniciar.addEventListener("click", saludarJugador, true);


    botonPiedra.addEventListener("click", botonPiedra(), true)
    botonPapel.addEventListener("click", botonPapel(), true)
    botonTijera.addEventListener("click", botonTijera(), true)


})