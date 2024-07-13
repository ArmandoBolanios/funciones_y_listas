let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora del Desafío';


function mensajeConsole() {
    console.log('El botón fue clicado" siempre que se presione el botón "Console')    
}

function clicPrompt() {
    let ciudad = prompt("Menciona una ciudad de Brasil");
    alert(`Estuve en ${ciudad} y me acordé de ti"`);
}

function mensajeAlerta() {
    alert("Yo amo JS");
}

function suma() {
    let num1 = parseInt(prompt("Ingresa un numero"));
    let num2 = parseInt(prompt("Ingresa otro numero"));
    alert(`La suma de ${num1} y ${num2} es ${num1 + num2}`);
}