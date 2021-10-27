const $operacion = document.querySelector('#operation_');
const $resultado = document.querySelector('#result');
const $btnsCalculadora = document.querySelector('.calculator__body');
// SELECTORES

// VARIABLES
let primerNumero;
let operacion;
let segundoNumero;

// HANDLER FUNCTION

function manejarCalculadora(evento) {
  // SI LA CLASS ES UN NUMERO, AGREGAR SU TEXTO A LA OPERACION (ABAJO)
  if (evento.target.className === '--number') {
    $operacion.innerText += evento.target.innerText;
    number = $operacion.innerText

// SI LA CLASS ES UNA FUNCION, 
  } else if (evento.target.classList.contains('--fn')) {
    primerNumero = parseFloat($operacion.innerText); // 2
    limpiar(); // PROBLEMA 1 - NO PONER OPERADOR EN $OPERACION
    operacion = evento.target.innerText;
    
  } else if (primerNumero && operacion && evento.target.className === '--igual') { // SI EN CUALQUIER CASO SE PRESIONA IGUAL, PASA ESTO
    segundoNumero = parseFloat($operacion.innerText); // 2
    limpiar();
    operar();
    resetear();
  } else {
      limpiar();
      resetear();
      $resultado.innerText = '';
  }
}

// LLAMAR HANDLER FUNC
$btnsCalculadora.addEventListener('click', manejarCalculadora);

function limpiar() {
  $operacion.innerText = '';
}

function resetear() {
  primerNumero = '';
  operacion = '';
  segundoNumero = '';
}

function operar() {
  if (operacion === '+') {
    $resultado.innerText = `${(primerNumero + segundoNumero).toFixed(2)}`;
  } else if (operacion === '-') {
    $resultado.innerText = `${(primerNumero - segundoNumero).toFixed(2)}`;
  } else if (operacion === 'x') {
    $resultado.innerText = `${(primerNumero * segundoNumero).toFixed(2)}`;
  } else {
    $resultado.innerText = `${(primerNumero / segundoNumero).toFixed(2)}`;
  }
}


  