let listaGenerica = [];

let lenguajesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];
lenguajesDeProgramacion.push('Java', 'Ruby', 'GoLang')
//***************************************************************** */

function mostrarLista(arreglo) {
    return console.log(arreglo);
}
//***************************************************************** */

function mostrarInverso(arreglo) {
    return console.log(arreglo.reverse());
}

//***************************************************************** */
let calific = [1, 8, 6, 7, 5, 8, 10];
let calific2 = [3, 5, 2, 7, 4, 6, 9];

var suma = 0;

for (let index = 0; index < calific.length;) {
    suma += calific[index];
    index++;
}

function promedio(arra, suma) {
    let pro = suma / arra.length;
    return pro;
}

//mostrarLista(lenguajesDeProgramacion);
//mostrarInverso(lenguajesDeProgramacion);
//console.log(promedio(calific, suma));

//***************************************************************** */
function arrayMayorMenor(array) {
    var numeroMayor = Math.max(...array);
    var numeroMenor = Math.min(...array);
    console.log(`El numero mayor es ${numeroMayor} mientras que, el numero menor es ${numeroMenor}`);
}

//arrayMayorMenor(calific);
//***************************************************************** */
function sumaArreglo(array) {
    var sumatoria = 0
    for (let index = 0; index < calific.length;) {
        sumatoria += calific[index];
        index++;
    }
    return `La suma del arreglo total es ${sumatoria}`;
}
//console.log(sumaArreglo(calific));

//***************************************************************** */
function buscarElemento(array, elemento) {
    let elementoEncontrado = array.indexOf(elemento);
    return console.log(`la posición del número ${elemento} en el arreglo es: ${elementoEncontrado}`);
}
//buscarElemento(calific, 10);

//***************************************************************** */
function sumaDosArreglos(array1, array2) {
    var suma1 = 0;
    var suma2 = 0;
    var res = [];
    for (let index = 0; index < array1.length; index++) {
        res[index] = array1[index] + array2[index];
    }
    return res;
}

//console.log(sumaDosArreglos(calific, calific2));

//***************************************************************** */
function cuadrado(array) {
    let nuevosElementos = [];
    for (let index = 0; index < array.length; index++) {
        var element = Math.pow(array[index], 2);
        nuevosElementos.push(element);
    }    
    console.log((nuevosElementos));
}

cuadrado(calific);