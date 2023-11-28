document
  .getElementById("increaseFontBtn")
  .addEventListener("click", function () {
    changeFontSize(1.1); // Aumenta o tamanho da fonte em 10%
  });

document
  .getElementById("decreaseFontBtn")
  .addEventListener("click", function () {
    changeFontSize(0.9); // Diminui o tamanho da fonte em 10%
  });

function changeFontSize(scale) {
  const elementsWithText = document.querySelectorAll(
    "p, h1, h2, h3, h4, h5, h6, span, a, li, td, th, label"
  );

  elementsWithText.forEach(function (element) {
    const currentSize = parseFloat(
      window.getComputedStyle(element, null).getPropertyValue("font-size")
    );
    element.style.fontSize = currentSize * scale + "px";
  });
}

function toggleDarkMode() {
  const body = document.body;
  body.classList.toggle("dark-mode");
}
