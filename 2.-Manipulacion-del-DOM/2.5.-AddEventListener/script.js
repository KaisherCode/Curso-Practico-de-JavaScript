const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calcular1');
const input2 = document.querySelector('#calcular2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

// form.addEventListener('submit',sumarInputValues);// Agrega un escuchador de eventos - Escucha cada vez que ocurra cierto evento

// function sumarInputValues(event){
//     event.preventDefault();

//     const sumaInputs = input1.value + input2.value;
//     pResult.innerText = "Resultado: " + sumaInputs;
// }

btn.addEventListener('click',sumarInputValues);// Agrega un escuchador de eventos - Escucha cada vez que ocurra cierto evento

function sumarInputValues(event){
    // console.log({event});
    //event.preventDefault();

    const sumaInputs = input1.value + input2.value;
    pResult.innerText = "Resultado: " + sumaInputs;
}