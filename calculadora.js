

const btnSumar = document.getElementById("sumar");
const btnRestar = document.getElementById("restar");
const btnDividir = document.getElementById("dividir");
const btnMultiplicar = document.getElementById("multiplicar");

btnSumar.addEventListener('click', hacerSuma);

function hacerSuma(){
    let num1 = parseFloat(document.getElementById("num1").value);
let num2 = parseFloat(document.getElementById("num2").value);
    let suma = num1 + num2;
    resultado.innerHTML = suma;

}

btnRestar.addEventListener('click', hacerResta);

function hacerResta(){
    let num1 = parseFloat(document.getElementById("num1").value);
let num2 = parseFloat(document.getElementById("num2").value);
    let resta = num1 - num2;
    resultado.innerHTML = resta;

}

btnDividir.addEventListener('click', hacerDivi);

function hacerDivi(){
    let num1 = parseFloat(document.getElementById("num1").value);
let num2 = parseFloat(document.getElementById("num2").value);
    let divi = num1 / num2;
    resultado.innerHTML = divi;

}

btnMultiplicar.addEventListener('click', hacerMulti);

function hacerMulti(){
    let num1 = parseFloat(document.getElementById("num1").value);
let num2 = parseFloat(document.getElementById("num2").value);
    let multi = num1 * num2;
    resultado.innerHTML = multi;

}