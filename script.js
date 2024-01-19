const input1 = document.querySelector('#numero1');
const input2 = document.querySelector('#numero2');
const btnCalc = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#pResultado');
const formulario = document.querySelector('#formulario');

// btnCalc.addEventListener('click', btnCalcFunction);
formulario.addEventListener('submit', sumarInputValue);

function sumarInputValue(event) {
    console.log(event);
    event.preventDefault();
    let result = parseInt(input1) + parseInt(input2);

    pResult.innerText = result;
}

// function btnCalcFunction() {
//     const resultado = parseInt(input1.value) + parseInt(input2.value);
//     pResult.innerText = resultado;
// }