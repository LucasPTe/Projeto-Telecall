// Formatacao de cpf usando JQuery e o plugin Jquery Mask
$("#cpf").mask("000.000.000-00", { reverse: true });

// Formatacao numeros de telefone
$("#celular").mask("(00) 00000-0000");
$("#fixo").mask("(00) 0000-0000");

// Voltar

function voltar() {
  window.location = "";
}

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

const passwordInput = document.getElementById("senha");
const confirmPasswordInput = document.getElementById("confirmSenha");
const labelSenha = document.getElementById("labelSenha");
const labelConfirmSenha = document.getElementById("labelConfirmSenha");

function validatePasswords() {
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;

  if (password === confirmPassword) {
    labelSenha.textContent = "As senhas coincidem";
    labelSenha.style.color = "green";
    labelConfirmSenha.textContent = "As senhas coincidem";
    labelConfirmSenha.style.color = "green";
  } else {
    labelSenha.textContent = "As senhas não coincidem";
    labelConfirmSenha.textContent = "As senhas não coincidem";
    labelSenha.style.color = "red";
    labelConfirmSenha.style.color = "red";
  }
}

passwordInput.addEventListener("keyup", validatePasswords);
confirmPasswordInput.addEventListener("keyup", validatePasswords);
