const botaoAumentar = document.querySelector(".aumentar");
botaoAumentar.addEventListener("click", aumentarFonte);

const botaoDiminuir = document.querySelector(".diminuir");
botaoDiminuir.addEventListener("click", diminuirFonte);

function aumentarFonte() {
  // Obtém o valor atual do tamanho da fonte
  const tamanhoAtual = document.querySelector("body").style.fontSize;

  // Define o novo tamanho da fonte
  document.querySelector("body").style.fontSize = tamanhoAtual + "px";
}

function diminuirFonte() {
  // Obtém o valor atual do tamanho da fonte
  const tamanhoAtual = document.querySelector("body").style.fontSize;

  // Define o novo tamanho da fonte
  document.querySelector("body").style.fontSize = tamanhoAtual - "px";
}
