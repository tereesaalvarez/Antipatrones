// script.js

let primerNumero = 0;
let operador = '';
let numeros = [];

function guardarOperador(op) {
    const input = document.getElementById('inputNumbers').value;
    primerNumero = parseFloat(input);

    if (!Number.isNaN(primerNumero)) {
        operador = op;
        document.getElementById('inputNumbers').value = '';
    } else {
        alert('Error: Introduce un número válido como primer operando.');
    }
}

function calcularResultado() {
    const input = document.getElementById('inputNumbers').value;
    const segundoNumero = parseFloat(input);

    if (!Number.isNaN(segundoNumero)) {
        let resultado;

        switch (operador) {
            case '+':
                resultado = primerNumero + segundoNumero;
                break;
            case '-':
                resultado = primerNumero - segundoNumero;
                break;
            case '*':
                resultado = primerNumero * segundoNumero;
                break;
            case '/':
                resultado = primerNumero / segundoNumero;
                break;
            default:
                break;
        }

        document.getElementById('inputNumbers').value = resultado;
        actualizarInfo(resultado);
    } else {
        alert('Error: Introduce un número válido como segundo operando.');
    }
}

function calcularCuadrado() {
    const input = document.getElementById('inputNumbers').value;
    const numero = parseFloat(input);

    if (!Number.isNaN(numero)) {
        const cuadrado = numero ** 2;
        document.getElementById('inputNumbers').value = cuadrado;
        actualizarInfo(cuadrado);
    } else {
        alert('Error: Introduce un número válido.');
    }
}

function calcularCubo() {
    const input = document.getElementById('inputNumbers').value;
    const numero = parseFloat(input);

    if (!Number.isNaN(numero)) {
        const cubo = numero ** 3;
        document.getElementById('inputNumbers').value = cubo;
        actualizarInfo(cubo);
    } else {
        alert('Error: Introduce un número válido.');
    }
}

function sumatorio() {
    const input = document.getElementById('inputNumbers').value;
    const numerosArray = input.split(',').map(Number);

    const sum = numerosArray.reduce((a, b) => a + b, 0);
    document.getElementById('inputNumbers').value = sum;
    actualizarInfo(sum);
}

function ordenar() {
    const input = document.getElementById('inputNumbers').value;
    const numerosArray = input.split(',').map(Number);

    numerosArray.sort((a, b) => a - b);
    document.getElementById('inputNumbers').value = numerosArray.join(',');
    actualizarInfo(numerosArray);
}

function revertir() {
    const input = document.getElementById('inputNumbers').value;
    const numerosArray = input.split(',').map(Number);

    numerosArray.reverse();
    document.getElementById('inputNumbers').value = numerosArray.join(',');
    actualizarInfo(numerosArray);
}

function quitar() {
    const input = document.getElementById('inputNumbers').value;
    const numerosArray = input.split(',');

    numerosArray.pop();
    document.getElementById('inputNumbers').value = numerosArray.join(',');
    actualizarInfo(numerosArray);
}

function mod() {
    const input = document.getElementById('inputNumbers').value;
    const numero = parseFloat(input);

    if (!Number.isNaN(numero)) {
        const resultado = numero < 0 ? -numero : numero;
        document.getElementById('inputNumbers').value = resultado;
        actualizarInfo(resultado);
    } else {
        alert('Error: Introduce un número válido.');
    }
}

function fact() {
    const input = document.getElementById('inputNumbers').value;
    const numero = parseInt(input);

    if (!Number.isNaN(numero) && numero >= 0) {
        let factorial = 1;

        for (let i = 2; i <= numero; i++) {
            factorial *= i;
        }

        document.getElementById('inputNumbers').value = factorial;
        actualizarInfo(factorial);
    } else {
        alert('Error: Introduce un número entero no negativo válido.');
    }
}

function resetCalculadora() {
    primerNumero = 0;
    operador = '';
    numeros = [];
    document.getElementById('inputNumbers').value = '';
    document.getElementById('info').textContent = 'Info sobre el número';
}

function actualizarInfo(resultado) {
    const infoElement = document.getElementById('info');

    if (resultado < 100) {
        infoElement.textContent = 'Info: El resultado es menor que 100';
    } else if (resultado >= 100 && resultado <= 200) {
        infoElement.textContent = 'Info: El resultado está entre 100 y 200';
    } else {
        infoElement.textContent = 'Info: El resultado es superior a 200';
    }
}
