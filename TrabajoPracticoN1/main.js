// Función para realizar la suma
function suma(operando1, operando2) {
    return operando1 + operando2;
}

// Función para realizar la resta
function resta(operando1, operando2) {
    return operando1 - operando2;
}

// Función para realizar la multiplicación
function multiplicacion(operando1, operando2) {
    return operando1 * operando2;
}

// Función para realizar la división
function division(operando1, operando2) {
    return operando1 / operando2;
}

// Función para obtener el resultado de la operación seleccionada
function calcular() {
    let operando1 = parseFloat(document.getElementById("operando1").value);
    let operando2 = parseFloat(document.getElementById("operando2").value);
    let operador = document.getElementById("operador").value;
    let Resultado = 0;

    // validación de datos numericos - ambos campos deben estar completos para que la calculadora funcione

    if (isNaN(operando1) || isNaN(operando2)) {
        alert("Error: Por favor, Ingrese valores numéricos válidos en ambos campos.")
    } else if (operando1 != 0 && operando2 === 0) {
        window.alert("No se puede dividir por cero");

    } else {


        // eleccion de la función de acuerdo al operador
        switch (operador) {
            case "+":
                Resultado = suma(operando1, operando2);
                break;
            case "-":
                Resultado = resta(operando1, operando2);
                break;
            case "*":
                Resultado = multiplicacion(operando1, operando2);
                break;
            case "/":
                Resultado = division(operando1, operando2);
                break;
            default:
                alert("Operador no válido");
                return;
        }

        document.getElementById("Resultado").innerHTML = "Resultado =" + Resultado;

    }
}
// Función para limpiar la calculadora y poder utilizarla nuevamente sin tener que recargar la pagina
function borrar() {
    document.getElementById("operando1").value = " ";
    document.getElementById("operando2").value = " ";
    document.getElementById("Resultado").textContent = "Resultado = " + 0;
}