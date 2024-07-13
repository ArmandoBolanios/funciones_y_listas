let listaCompras = [];

listaCompras.push("Manzana");
listaCompras.push("Arroz");
listaCompras.push("Leche");
listaCompras.push("Pan");
listaCompras.push("Carne");

console.log(listaCompras.length);
console.log(listaCompras[3]);

//************************************* */
let frutas = ["Manzana", "Uva", "Naranja"];
console.log(frutas[0]); // Salida: "Manzana"
console.log(frutas[2]); // Salida: "Naranja"

frutas.push("Fresa");
console.log(frutas); // Salida: ["Manzana", "Uva", "Naranja", "Fresa"]

frutas.pop();
console.log(frutas); // Salida: ["Manzana", "Uva", "Naranja"]
