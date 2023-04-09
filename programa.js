//1. Tener una referencia en el elemento del DOM que queremos (escuchar) el evento.

const btnSumar = document.getElementById("btn-sumar");
const btnRestar = document.getElementById("btn-restar");
const btnMultiplicar = document.getElementById("btn-multiplicar");
const btnDividir = document.getElementById("btn-dividir");
const btnBorrar = document.getElementById("btn-borrar");

const regex = new RegExp('[0-9]')

btnSumar.addEventListener(
    'click',
    (event) => {
        event.preventDefault();
        const num1 = parseInt(document.getElementById("num1").value);
        const num2 = parseInt(document.getElementById("num2").value);
        const operacion = 'sumar'
        if (!validarDatos(num1, num2)) { return }
        realizarOperacion(num1, num2,operacion)

    });

btnRestar.addEventListener(
    'click',
    (event) => {
        event.preventDefault();
        const num1 = parseInt(document.getElementById("num1").value);
        const num2 = parseInt(document.getElementById("num2").value);
        const operacion = 'restar'
        if (!validarDatos(num1, num2)) { return }
        realizarOperacion(num1, num2,operacion)
    });
btnMultiplicar.addEventListener(
    'click',
    (event) => {
        event.preventDefault();
        const num1 = parseInt(document.getElementById("num1").value);
        const num2 = parseInt(document.getElementById("num2").value);
        const operacion = 'multiplicar'
        if (!validarDatos(num1, num2)) { return }
        realizarOperacion(num1, num2,operacion)
    });
btnDividir.addEventListener(
    'click',
    (event) => {
        event.preventDefault();
        const num1 = parseInt(document.getElementById("num1").value);
        const num2 = parseInt(document.getElementById("num2").value);
        const operacion = 'dividir'
        if (!validarDatos(num1, num2)) { return }
        realizarOperacion(num1, num2,operacion)
    });
btnBorrar.addEventListener(
    'click',
    (event) => {
        event.preventDefault();
        const div_resultado = document.getElementById("resultado");
        div_resultado.innerHTML = `<input id="pantalla" class="form-control" type="number" name="pantalla" readonly>`;
        document.getElementById('form-operaciones').reset();
    });

function validarDatos(num1, num2) {
    let datosVerificados = regex.test(num1) && regex.test(num2)
    return datosVerificados

}

async function realizarOperacion(num1, num2,operacion) {
    const respuesta = await fetch(`http://localhost:3000/api/${operacion}`, {
        'method': 'POST',
        'headers': {
            'Content-Type': 'application/json'
        },
        'body': JSON.stringify({
            'num1': num1,
            'num2': num2
        })
    });
    const dato = await respuesta.json();
    const div_resultado = document.getElementById("resultado");
    div_resultado.innerHTML = `<input id="pantalla" class="form-control" type="number" name="pantalla" readonly value="${dato}">`;
}