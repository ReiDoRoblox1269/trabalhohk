function insert(num) {
  var resultado = document.getElementById("resultado");
  resultado.value += num; // concatena o numero ao valor atual do input
}

function clean() {
  document.getElementById("resultado").value = ""; // apaga tudo
}

function back() {
  var resultado = document.getElementById("resultado");
  var valorAtual = resultado.value;
  resultado.value = valorAtual.substring(0, valorAtual.length - 1); //apaga o ultimo caractere do valor do input
}

function handleEnter(event) {
  //event só acontece quando o usuario faz algo
  if (event.key === "Enter") {
    calcular(); // chama a função calcular() quando aperta ENTER
  }
}

function calcular() {
  var resultado = document.getElementById("resultado").value;
  if (resultado) {
    // SE tiver algo escrito
    document.getElementById("resultado").value = eval(resultado); // calcula e mostra o valor do input
  } else {
    // Caso contrário
    document.getElementById("resultado").value = "Nada..."; // Mostra o texto "Nada..."
  }
}

function validarEntrada(input) {
  var valor = input.value;
  var regex = /^[0-9\/+\-.*]*$/; // deixa apenas números, "/", "+", "-" e "." (/ e /: Delimitadores da expressão regular em JavaScript. Eles indicam o início e o fim da expressão regular. ^: Âncora que indica o início da string. Isso significa que a correspondência deve começar no início da string. *: Quantificador que significa "zero ou mais vezes". Isso indica que o conjunto [0-9\/+\-.] pode aparecer zero ou várias vezes na string. $: Âncora que indica o final da string. Isso significa que a correspondência deve terminar no final da string.)

  // ve se ta tudo certo
  if (!regex.test(valor)) {
    // tira o que nao pode (exceto números, "/", "+", "-", ".")
    input.value = valor.replace(/[^0-9\/+\-.]/g, "");
  }
}
