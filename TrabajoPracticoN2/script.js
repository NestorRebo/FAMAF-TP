//variables globales para evitar
let nombre;
let jugadaJugador;


//funciones
function saludarJugador() {
    nombre = document.getElementById("nombreUsuario").value;
    document.getElementById("saludoUsuario").innerHTML = "Hola "+ " " + nombre + " " + "empecemos a jugar!!!";
}

function botonPiedra() {

}


function traerJugadaJugador() {
    jugadaJugador = document.getElementById("");
}

function jugadaCPU() {

}


document.addEventListener("DOMContentLoaded", function () {
    //llama a todas las funciones
    botonIniciar.addEventListener("click", saludarJugador, true);
    botonPiedra.addEventListener("click", )



})