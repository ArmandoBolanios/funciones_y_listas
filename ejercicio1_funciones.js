function saludar() {
    console.log('Hola, mundo');
}
saludar();
//********************************************************* */

function saludo(usuario) {
    console.log(`Hola, ${usuario}`);
}
saludo('Armando');

//********************************************************* */
function doble(numero) {
    console.log(`El doble de número es ${numero * numero}`);
}
doble(2);

//********************************************************* */
function promedio(a, b, c) {
    let resultado = (a + b + c) / 3;
    console.log(`El promedio es ${resultado}`);
}
promedio(8, 5, 10);

//********************************************************* */
function mayor(num1, num2) {
    if (num1 > num2) {
        console.log(`EL numero mayor es ${num1}`);
    } else {
        console.log(`El numero mayor es ${num2}`);
    }
}
mayor(9, 10);

//********************************************************* */
function mult(numero) {
    return numero * numero;
}

console.log(mult(9));

//********************************************************* */

let nota1 = 7;
let nota2 = 6;
let nota3 = 3;
let nota4 = 5;

function calcularPromedio(nota1, nota2, nota3, nota4) {
    let promedio = (nota1 + nota2 + nota3 + nota4) / 4
    return promedio;
}

console.log(calcularPromedio(8, 9, 5, 6));

//********************************************************* */

function calcularDobleTriple(numero) {
    const doble = numero * 2;
    const triple = numero * 3;

    return `El doble de ${numero} es ${doble} y el triple es ${triple}.`;
}

const numero = 5;
const resultado = calcularDobleTriple(numero);
console.log(resultado);

//****************************************************** */
const nombre = "Juan";
const edad = 30;
const mensaje = `Hola, soy ${nombre} y tengo ${edad} años.`;
console.log(mensaje);

// Salida: Hola, soy Juan y tengo 30 años.