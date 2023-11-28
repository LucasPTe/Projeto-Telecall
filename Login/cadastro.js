// Formatacao de cpf usando JQuery e o plugin Jquery Mask
$("#cpf").mask("000.000.000-00", { reverse: true });

// Formatacao numeros de telefone
$("#celular").mask("(00) 00000-0000");
$("#fixo").mask("(00) 0000-0000");

// Voltar

function voltar() {
  window.location = "";
}

const maeInput = document.getElementById("mae");
const labelMae = document.getElementById("labelMae");

function validateMae() {
  const mae = maeInput.value;

  if (mae.length < 6) {
    labelMae.textContent = "Nome da mãe é muito curto";
    labelMae.style.color = "red";
  } else {
    labelMae.textContent = "Nome da mãe";
    labelMae.style.color = "green";
  }
}
maeInput.addEventListener("input", validateMae);

const cpfInput = document.getElementById("cpf");
const labelCpf = document.getElementById("labelCpf");

function validateCpf() {
  const cpf = cpfInput.value;

  if (cpf.length < 14) {
    labelCpf.textContent = "CPF é inválido";
    labelCpf.style.color = "red";
  } else {
    labelCpf.textContent = "CPF válido";
    labelCpf.style.color = "green";
  }
}
cpfInput.addEventListener("input", validateCpf);

const celularInput = document.getElementById("celular");
const labelCelular = document.getElementById("labelCelular");

function validateCelular() {
  const celular = celularInput.value;

  if (celular.length < 15) {
    labelCelular.textContent = "O número é inválido";
    labelCelular.style.color = "red";
  } else {
    labelCelular.textContent = "Número válido";
    labelCelular.style.color = "green";
  }
}
celularInput.addEventListener("input", validateCelular);

const usuarioInput = document.getElementById("usuario");
const labelUsuario = document.getElementById("labelUsuario");

function validateUsername() {
  const usuario = usuarioInput.value;

  if (usuario.length < 6) {
    labelUsuario.textContent = "O usuário deve ter  6 caracteres";
    labelUsuario.style.color = "red";
  } else {
    labelUsuario.textContent = "Nome de usuário válido";
    labelUsuario.style.color = "green";
  }
}

usuarioInput.addEventListener("input", validateUsername);

usuarioInput.addEventListener("keydown", function (event) {
  // Verifica se a tecla pressionada é um número
  const key = event.key;
  if (key.match(/[0-9]/)) {
    // Retorna false para impedir que o número seja inserido
    event.preventDefault();
  }
});

const passwordInput = document.getElementById("senha");
const confirmPasswordInput = document.getElementById("confirmSenha");
const labelSenha = document.getElementById("labelSenha");
const labelConfirmSenha = document.getElementById("labelConfirmSenha");

function validatePasswords() {
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;

  if (password.length < 8) {
    labelSenha.textContent = "Obrigatório 8 letras";
    labelSenha.style.color = "red";
    labelConfirmSenha.textContent = "Obrigatório 8 letras";
    labelConfirmSenha.style.color = "red";
  } else {
    if (password === confirmPassword) {
      labelSenha.textContent = "As senhas coincidem";
      labelSenha.style.color = "green";
      labelConfirmSenha.textContent = "As senhas coincidem";
      labelConfirmSenha.style.color = "green";
    } else {
      labelSenha.textContent = "As senhas não coincidem";
      labelSenha.style.color = "red";
      labelConfirmSenha.textContent = "As senhas não coincidem";
      labelConfirmSenha.style.color = "red";
    }
  }
}

passwordInput.addEventListener("keyup", validatePasswords);
confirmPasswordInput.addEventListener("keyup", validatePasswords);

function preventNumberInput(event) {
  const key = event.key;
  if (key.match(/[0-9]/)) {
    event.preventDefault();
  }
}

passwordInput.addEventListener("keydown", preventNumberInput);
confirmPasswordInput.addEventListener("keydown", preventNumberInput);
