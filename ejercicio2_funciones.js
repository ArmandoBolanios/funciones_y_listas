function masa(peso, estatura) {
    let altura = estatura / 100;
    return peso / (Math.pow(altura, 2));
}
console.log(masa(68, 165));

//********************************************* */
function factorial(num) {
    if (num < 0)
        return -1;
    else if (num == 0)
        return 1;
    else {
        return (num * factorial(num - 1));
    }
}
console.log(factorial(6));

//******************************************* */
function dolar(moneda) {
    let mx = 17.77;
    moneda = moneda * mx;
    return `${moneda} pesos mexicanos`;
}
console.log(dolar(20));

//******************************************* */
function salarectangular(altura, anchura) {
    let area = altura * anchura;
    let perimetro = 2 * altura + 2 * anchura;
    return `El área del rectángulo es ${area}\ty el perímetro es ${perimetro}`
}
console.log(salarectangular(6, 10));

//***************************************** */
function salaCircular(radio) {
    const PI = 3.14;


    let area = PI * Math.pow(radio, 2);
    let perimetro = (2 * PI) * radio;
    return `El area del círculo es ${area} y el perímetro es ${perimetro}`
}

console.log(salaCircular(2));

//******************************************************************** */
function tabla(numero) {    
    let i = 1;
    let resultado = 0;
    while (i <= numero) {
        resultado = i * numero;
        console.log(numero + "*" + i + "=" + resultado);
        i++;
    }
}
tabla(10);