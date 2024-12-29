const number1 = document.getElementById('number1');
const number2 = document.getElementById('number2');

const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const dziel = document.getElementById('dziel');
const mnoz = document.getElementById('mnoz');
const czysc = document.getElementById('czysc');

let a = 0;
let b = 0;
let result;

function Fplus() {
    result = a + b;
    console.log(result); 
    alert('wynik to ' + result)
}
function Fminus() {
    result = a - b;
    console.log(result);
    alert('wynik to ' + result)
}
function Fdziel() {
    result = a / b;
    console.log(result);
    alert('wynik to ' + result)
}
function Fmnoz() {
    result = a * b;
    console.log(result);
    alert('wynik to ' + result)
}

plus.addEventListener('click', () => {
    Fplus()
});
minus.addEventListener('click', () => {
    Fminus()
});
dziel.addEventListener('click', () => {
    Fdziel()
});
mnoz.addEventListener('click', () => {
    Fmnoz()
});

number1.addEventListener('input', (event) => {
    a = +(event.target.value)
});
number2.addEventListener('input', (event) => {
    b = +(event.target.value)
});

czysc.addEventListener('click', (event) => {
    number1.value = 0;
});
czysc.addEventListener('click', (event) => {
    number2.value = 0;
});