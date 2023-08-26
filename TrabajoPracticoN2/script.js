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

function botonPiedra() {
    eleccionJugador = opciones[0]
    gana(eleccionJugador)
}

function botonPapel() {
    eleccionJugador = opciones[1]
    gana(eleccionJugador)
}

function botonTijera() {
    eleccionJugador = opciones[2]
    gana(eleccionJugador)
}

function aleatorio(minimo, maximo) {
    let numero = 0;
    numero = Math.floor(Math.random() * (maximo - minimo + 1) + minimo);
    return numero;
}

function jugadaCPU() {
    numero = aleatorio(0, 2)
    eleccionMaquina = opciones[numero];
    return eleccionMaquina
}

function gana(eleccionJugador) {
    jugadaCPU();
    switch (eleccionJugador) {
        case 0: //el usuario eligio piedra 
            if (opciones[eleccionMaquina] == 1) {//si la maquina eligio papel 
                document.getElementById('resultado').innerHTML = '¡Perdiste! La maquina eligio papel y tu piedra.';
            } else if (opciones[eleccionMaquina] == 2) {
                document.getElementById('resultado').innerHTML = '¡Ganaste! La maquina eligio tijera y tu piedra.';
            } else {
                document.getElementById('resultado').innerHTML = '¡Empate! Ambos eligieron piedra.';
            }
            break;

        case 1: //el usuario eligio papel
            if (opciones[eleccionMaquina] == 2) {
                document.getElementById('resultado').innerHTML = '¡Perdiste! La maquina eligio tijera y tu papel';
            } else if (opciones[eleccionMaquina] == 0) {
                document.getElementById('resultado').innerHTML = '¡Ganaste! La maquina eligio piedra y tu papel';
            } else {
                document.getElementById('resultado').innerHTML = '¡Empate! Ambos eligieron papel.';
            }
            break;

        case 2: //el usuario eligio tijera 
            if (opciones[eleccionMaquina] == 1) {
                document.getElementById('resultado').innerHTML = '¡Ganaste! La maquina eligio papel y tu tijera';

            } else if (opciones[eleccionMaquina] == 0) {
                document.getElementById('resultado').innerHTML = '¡Perdiste! La maquina eligio piedra y tu tijera.';
            } else {
                document.getElementById('resultado').innerHTML = '¡Empate! Ambos eligieron tijera.';
            }
            break;

        default:
            console.log("no ha elegido nada")
    }
}

document.addEventListener("DOMContentLoaded", function () {
    //llama a todas las funciones
    botonIniciar.addEventListener("click", saludarJugador, true);


    botonPiedra.addEventListener("click", botonPiedra(), true)
    botonPapel.addEventListener("click", botonPapel(), true)
    botonTijera.addEventListener("click", botonTijera(), true)


})