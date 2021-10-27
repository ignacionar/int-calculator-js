const resultado = document.querySelector("#result");
const operacion = document.querySelector("#operation_");
const botones = document.querySelector("#botones");

resultado.innerText = ""

let numeroA1;
let numeroB2;
let operador;
let condicion = true;
let segundoN = false;

let elArray = [];
let primerElemento = [];
let segundoElemento = [];

let elementoA
let elementoB


const losBotones = (evento) => {   
    if (evento.target.className === "--number") {
        if (segundoN == false) {
            numeroA1 = evento.target.innerText;
            operacion.innerText += parseFloat(numeroA1)
            elArray.push(numeroA1);
            primerElemento.push(operacion.innerText);
            elementoA = primerElemento.pop();
    
        } else {
            numeroB2 = evento.target.innerText;
            operacion.innerText += parseFloat(numeroB2);
            if (operador === "+") {
                segundoElemento = operacion.innerText.split("+");
                elementoB = segundoElemento.pop()
                elArray.push(numeroB2);
            }
            else if (operador === "-") {
                segundoElemento = operacion.innerText.split("-");
                elementoB = segundoElemento.pop()
                elArray.push(numeroB2);
            }
            else if (operador === "/") {
                segundoElemento = operacion.innerText.split("/");
                elementoB = segundoElemento.pop()
                elArray.push(numeroB2);
            }
            else if (operador === "x") {
                segundoElemento = operacion.innerText.split("x");
                elementoB = segundoElemento.pop()
                elArray.push(numeroB2);
            }
        }

    } else if (evento.target.className === "--fn") {
        if (condicion == true) {
            if (elArray.includes(numeroA1)) {
                operador = evento.target.innerText;
                operacion.innerText += operador;
                elArray.push(operador)
                condicion = false
                segundoN = true
            }
        }
        else {
            if (elArray.includes(operador)) {
                return;
            }
        }
    
    } else if (evento.target.className === "--igual") { ///  ???? NO FUNCIONA
        operacion.innerText = "";
        resetear1()
    }
    
    operar()
    
}  

function resetear1() { 
    numeroA1 = "";
    numeroB2 = "";
    operador = "";

    elArray = [];
    primerElemento = [];
    segundoElemento = [];

    condicion = true;
    segundoN = false;
    
    elementoA = "";
    elementoB = "";
}


let textResultado

function operar () {
    a = parseFloat(elementoA)
    b = parseFloat(elementoB)
    
    if (condicion == false) {
        if (operador === "+") {
            textResultado = `${a + b}`
            resultado.innerText = textResultado
        }
        else if (operador === "-") {
            textResultado = `${a - b}`
            resultado.innerText = textResultado
        }
        else if (operador === "/") {
            textResultado = `${a / b}`
            resultado.innerText = textResultado
        }
        else {
            textResultado = `${a * b}`
            resultado.innerText = textResultado
        }

        if (resultado.innerText === "NaN") {
            resultado.innerText = a
        }

    }


}




botones.addEventListener('click', losBotones)