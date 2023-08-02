let resultado = 0;
let simbolo_operacao = "";

function PegarValorBotao(objeto) {
  let valor = objeto.value;
  let numero = parseFloat(valor);
  if (valor != ".") {
    document.getElementById("resultado").innerHTML += numero;
  } else {
    document.getElementById("resultado").innerHTML += ".";
  }
}

function PegarValorOperador(operador) {
  let visor = document.getElementById("resultado").innerHTML;
  if (visor.length > 0) {
    simbolo_operacao = operador;
    resultado = parseFloat(document.getElementById("resultado").innerHTML);
    document.getElementById("resultado").innerHTML = "";
  } else {
    alert("Por favor digite um numero primeiro!");
  }
}

function CalcularResultado() {
  let visor = document.getElementById("resultado").innerHTML;
  var numero = parseFloat(document.getElementById("resultado").innerHTML);
  if (visor.length > 0) {
    if (simbolo_operacao == "+") {
      resultado = resultado + numero;
    }
    if (simbolo_operacao == "-") {
      resultado = resultado - numero;
    }
    if (simbolo_operacao == "x") {
      resultado = resultado * numero;
    }
    if (simbolo_operacao == "/") {
      resultado = resultado / numero;
    }
    document.getElementById("resultado").innerHTML = resultado;
    resultado = 0;
  } else {
    alert("Por favor digite um numero primeiro!");
  }
}

function limpar() {
  let resultado = 0;
  let simbolo_operacao = "";
  var numero = 0;
  document.getElementById("resultado").innerHTML = "";
}
