//1. Tener una referencia en el elemento del DOM que queremos (escuchar) el evento.
const boton = document.getElementById("btn-guardar");

boton.addEventListener(
    'click',
    async (event) => {
        event.preventDefault();
        const num1 = parseInt(document.getElementById("num1").value);
        const num2 = parseInt(document.getElementById("num2").value);

        const respuesta = await fetch('http://localhost:3000/sumar', {
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
        console.log(dato);
        const div_resultado = document.getElementById("resultado");
        div_resultado.innerHTML = dato;
    });