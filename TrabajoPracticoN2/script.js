//variables globales
let nombre;

let contadorJugador = 0;
let contadorCPU = 0;
let contadorJugadas = 0;

let eleccionMaquina;
let eleccionJugador;

//funciones


function saludarJugador() {
    nombre = document.getElementById("nombreUsuario").value;

    if (nombre == "" || !(isNaN(nombre))) {
        document.getElementById("saludoUsuario").innerHTML = "Ingrese su nombre";

        document.getElementById("botonIniciar");
        botonera.style.display = "none";
        resultadoFinal.style.display = "none";
        portada.style.display = "block";
        tablero.style.display = "none";

    } else {
        document.getElementById("saludoUsuario").innerHTML = "Hola " + " " + nombre + " " + "empecemos a jugar!!!";
        botonera.style.display = "block";
        portada.style.disabled = "none";
        portada.style.display = "none";
        tablero.style.display = "block";

    }
}


function partida(eleccionJugador) {
    numero = Math.floor(Math.random() * 3);
    eleccionMaquina = numero;

    // opciones = [0 = "piedra", 1= "papel", 2="tijera"];
    if (eleccionJugador == 0 && eleccionMaquina == 1 || eleccionJugador == 1 && eleccionMaquina == 2 || eleccionJugador == 2 && eleccionMaquina == 0) {
        //gana la compu
        contadorCPU++;
        contadorJugadas++;
        document.getElementById("computadora").innerHTML = contadorCPU;

        console.log("gana la compu" + contadorCPU + " " + contadorJugadas)
    } else if (eleccionJugador == 0 && eleccionMaquina == 2 || eleccionJugador == 1 && eleccionMaquina == 0 || eleccionJugador == 2 && eleccionMaquina == 1) {
        // gana jugador
        contadorJugador++;
        contadorJugadas++;
        document.getElementById("jugador").innerHTML = contadorJugador;

        console.log("gana la Jugador" + contadorJugador + " " + contadorJugadas)
    } else {
        //empate
    }


    if (contadorCPU >= 3 && contadorJugadas <= 5 && contadorCPU > contadorJugador) {
        //gana el juego CPU
        document.getElementById("resultado").innerHTML = "Resultado: Gana la Computadora";
        document.getElementById("resultado1").innerHTML = "Presione el boton reiniciar para poder volver a jugar";

        document.getElementById("botonPiedra").disabled = true;
        document.getElementById("botonPapel").disabled = true;
        document.getElementById("botonTijera").disabled = true;

        resultadoFinal.style.display = "block"

        console.log("contadorcPU >=3")
    } else if (contadorJugador >= 3 && contadorJugadas <= 5 && contadorCPU < contadorJugador) {
        //gana el juego el jugador
        document.getElementById("resultado").innerHTML = "Resultado: Gana la Jugador";
        document.getElementById("resultado1").innerHTML = "Presione el boton reiniciar para poder volver a jugar";

        document.getElementById("botonPiedra").disabled = true;
        document.getElementById("botonPapel").disabled = true;
        document.getElementById("botonTijera").disabled = true;

        resultadoFinal.style.display = "block"
        console.log("contadorjug >=3")
    } else if (contadorJugadas > 5) {

        document.getElementById("botonPiedra").disabled = true;
        document.getElementById("botonPapel").disabled = true;
        document.getElementById("botonTijera").disabled = true;

        document.getElementById("resultado1").innerHTML = "Presione el boton reiniciar para poder volver a jugar";
        resultadoFinal.style.display = "block"
    }
}

function reiniciar() {
    contadorJugador = 0;
    contadorCPU = 0;
    contadorJugadas = 0;
    document.getElementById("resultado").innerHTML = "Resultado: ";
    document.getElementById("nombreUsuario").innerHTML = "";
    document.getElementById("resultado1").innerHTML = "";

    document.getElementById("botonPiedra").disabled = false;
    document.getElementById("botonPapel").disabled = false;
    document.getElementById("botonTijera").disabled = false;
    botonera.style.display = "none";
    resultadoFinal.style.display = "none";
    portada.style.display = "block"
    document.getElementById("saludoUsuario").innerHTML = ""
    tablero.style.display = "none";
}


document.addEventListener("DOMContentLoaded", function () {
    //traer botones de HTML
    const botonIniciar = document.getElementById("botonIniciar")

    const botonPiedra = document.getElementById("botonPiedra")
    const botonPapel = document.getElementById("botonPapel")
    const botonTijera = document.getElementById("botonTijera")

    const botonReiniciar = document.getElementById("reiniciar")


    const botonera = document.getElementById("botonera");
    //saludo y portada
    const portada = document.getElementById("portada")
    portada.style.display = "block"
    //llama a todas las funciones
    botonIniciar.addEventListener("click", saludarJugador, true);

    botonPiedra.addEventListener("click", () => partida(0), true)
    botonPapel.addEventListener("click", () => partida(1), true)
    botonTijera.addEventListener("click", () => partida(2), true)

    //boton reiniciar
    botonReiniciar.addEventListener("click", () => reiniciar(), true)
    botonera.style.display = "none";


    //Resultado Final
    resultadoFinal.style.display = "none"

    //tablero de partidas
    const tablero = document.getElementById("tablero");
    tablero.style.display = "none"
})