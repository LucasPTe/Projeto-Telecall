// Formatacao de cpf usando JQuery e o plugin Jquery Mask
$("#cpf").mask("000.000.000-00", { reverse: true });

// Formatacao numeros de telefone
$("#tel_celular").mask("(00) 00000-0000");
$("#tel_fixo").mask("(00) 0000-0000");

// Permitir apenas letras no usuario e senha
function validarLetras(event) {
  // Obtenha o valor do input
  const valor = event.target.value;

  // Verifique se o valor contém um número
  const temNumero = /[0-9]/.test(valor);

  // Se o valor conter um número, remova o número
  if (temNumero) {
    event.target.value = valor.replace(/[0-9]/g, "");
  }
}

// Adicione o evento ao input
document.querySelector("#usuario").addEventListener("input", validarLetras);
document.querySelector("#senha").addEventListener("input", validarLetras);

function cadastrar() {
  window.alert("Cadastro concluído!");
}
