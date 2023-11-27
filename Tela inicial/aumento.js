window.onload = function () {
  // Obtém o tamanho da fonte inicial
  var tamanhoFonteInicial = document.documentElement.style.fontSize;

  // Evento de clique no botão de aumentar fonte
  document
    .getElementById("aumentar-fonte")
    .addEventListener("click", function () {
      // Aumenta o tamanho da fonte em 10%
      var tamanhoFonte = parseInt(tamanhoFonteInicial) * 1.1;
      document.documentElement.style.fontSize = tamanhoFonte + "px";
    });

  // Evento de clique no botão de diminuir fonte
  document
    .getElementById("diminuir-fonte")
    .addEventListener("click", function () {
      // Diminui o tamanho da fonte em 10%
      var tamanhoFonte = parseInt(tamanhoFonteInicial) * 0.9;
      document.documentElement.style.fontSize = tamanhoFonte + "px";
    });
};
