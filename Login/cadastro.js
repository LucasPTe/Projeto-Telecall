// Formatacao de cpf usando JQuery e o plugin Jquery Mask
$("#cpf").mask("000.000.000-00", { reverse: true });

// Formatacao numeros de telefone
$("#celular").mask("(00) 00000-0000");
$("#fixo").mask("(00) 0000-0000");

// Voltar

function voltar() {
  window.location = "";
}

let validRua = false;
let validFixo = false;
let validNome = false;
let validMae = false;
let validCpf = false;
let validCelular = false;
let validUsuario = false;
let validSenha = false;
let validData = false;
let validSexo = false;

// Validação da Rua
const ruaInput = document.getElementById("endereco");
const labelRua = document.getElementById("labelRua");

function validateRua() {
  const rua = ruaInput.value;

  if (rua.length < 6) {
    labelRua.textContent = "Endereço muito curto";
    labelRua.style.color = "red";
    validRua = false;
  } else {
    labelRua.textContent = "Endereço";
    labelRua.style.color = "green";
    validRua = true;
  }
}
ruaInput.addEventListener("input", validateRua);

ruaInput.addEventListener("keydown", function (event) {
  // Verifica se a tecla pressionada é um número
  const key = event.key;
  if (key.match(/[0-9]/)) {
    // Retorna false para impedir que o número seja inserido
    event.preventDefault();
  }
});

//Validação do telefone fixo

const fixoInput = document.getElementById("fixo");
const labelFixo = document.getElementById("labelFixo");

function validateFixo() {
  const fixo = fixoInput.value;

  if (fixo.length < 14) {
    labelFixo.textContent = "O número é inválido";
    labelFixo.style.color = "red";
    validFixo = false;
  } else {
    labelFixo.textContent = "Número válido";
    labelFixo.style.color = "green";
    validFixo = true;
  }
}
fixoInput.addEventListener("input", validateFixo);

//validação do nome completo

const nomeInput = document.getElementById("nome_completo");
const labelNome = document.getElementById("labelNome");

function validateNome() {
  const nome = nomeInput.value;

  if (nome.length < 15) {
    labelNome.textContent = "Nome muito curto";
    labelNome.style.color = "red";
    validNome = false;
  } else {
    labelNome.textContent = "Nome completo";
    labelNome.style.color = "green";
    validNome = true;
  }
}
nomeInput.addEventListener("input", validateNome);

nomeInput.addEventListener("keydown", function (event) {
  // Verifica se a tecla pressionada é um número
  const key = event.key;
  if (key.match(/[0-9]/)) {
    // Retorna false para impedir que o número seja inserido
    event.preventDefault();
  }
});

// validação nome da mãe

const maeInput = document.getElementById("mae");
const labelMae = document.getElementById("labelMae");

function validateMae() {
  const mae = maeInput.value;

  if (mae.length < 15) {
    labelMae.textContent = "Nome da mãe é muito curto";
    labelMae.style.color = "red";
    validMae = false;
  } else {
    labelMae.textContent = "Nome da mãe";
    labelMae.style.color = "green";
    validMae = true;
  }
}
maeInput.addEventListener("input", validateMae);

maeInput.addEventListener("keydown", function (event) {
  // Verifica se a tecla pressionada é um número
  const key = event.key;
  if (key.match(/[0-9]/)) {
    // Retorna false para impedir que o número seja inserido
    event.preventDefault();
  }
});

//validação CPF

const cpfInput = document.getElementById("cpf");
const labelCpf = document.getElementById("labelCpf");

function validateCpf() {
  const cpf = cpfInput.value;

  if (cpf.length < 14) {
    labelCpf.textContent = "CPF é inválido";
    labelCpf.style.color = "red";
    validCpf = false;
  } else {
    labelCpf.textContent = "CPF válido";
    labelCpf.style.color = "green";
    validCpf = true;
  }
}
cpfInput.addEventListener("input", validateCpf);

// validação numero de celular

const celularInput = document.getElementById("celular");
const labelCelular = document.getElementById("labelCelular");

function validateCelular() {
  const celular = celularInput.value;

  if (celular.length < 15) {
    labelCelular.textContent = "O número é inválido";
    labelCelular.style.color = "red";
    validCelular = false;
  } else {
    labelCelular.textContent = "Número válido";
    labelCelular.style.color = "green";
    validCelular = true;
  }
}
celularInput.addEventListener("input", validateCelular);

// validação nome do usuário

const usuarioInput = document.getElementById("usuario");
const labelUsuario = document.getElementById("labelUsuario");

function validateUsername() {
  const usuario = usuarioInput.value;

  if (usuario.length < 6) {
    labelUsuario.textContent = "O usuário deve ter  6 caracteres";
    labelUsuario.style.color = "red";
    validUsuario = false;
  } else {
    labelUsuario.textContent = "Nome de usuário válido";
    labelUsuario.style.color = "green";
    validUsuario = true;
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

function validarData(data) {
  // Obtém a data atual
  const dataAtual = new Date();

  // Converte a data digitada para um objeto Date
  const dataDigitada = new Date(data);

  // Compara as duas datas
  if (dataDigitada >= dataAtual) {
    // Data inválida
    validData = false;
    return false;
  } else {
    validData = true;
  }

  // Data válida
  return true;
}

// Obtém o elemento input
const inputData = document.querySelector("#data");

// Adiciona um evento de blur ao input
inputData.addEventListener("blur", function () {
  // Valida a data
  const dataValida = validarData(inputData.value);

  // Altera a cor da label
  const labelData = document.querySelector("#label-data");
  labelData.style.color = dataValida ? "green" : "red";
});

const labelSexo = document.querySelector("#sexo_titulo");

// Adiciona um evento de click a todos os radio buttons
const radioButtons = document.querySelectorAll("input[name='Sexo']");
for (const radioButton of radioButtons) {
  radioButton.addEventListener("click", function () {
    // Verifica se algum radio button está selecionado
    if (radioButton.checked) {
      // Altera a cor da label para verde
      labelSexo.style.color = "green";
      validSexo = true;
    } else {
      validSexo = false;
    }
  });
}

//validação senha e confirmar senha

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
      validSenha = true;
    } else {
      labelSenha.textContent = "As senhas não coincidem";
      labelSenha.style.color = "red";
      labelConfirmSenha.textContent = "As senhas não coincidem";
      labelConfirmSenha.style.color = "red";
      validSenha = false;
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

function showModal(message) {
  const modalMessage = document.getElementById("modalMessage");
  modalMessage.innerText = message;

  const myModal = new bootstrap.Modal(document.getElementById("myModal"));
  myModal.show();
}

function cadastrar() {
  if (
    validCelular &&
    validCpf &&
    validFixo &&
    validMae &&
    validNome &&
    validRua &&
    validSenha &&
    validUsuario &&
    validData &&
    validSexo
  ) {
    showModal("Tudo certo! Usuário cadastrado.");

    // Recupera a lista de usuários do localStorage
    let listaUser = JSON.parse(localStorage.getItem("listaUser") || "[]");

    // Adiciona o novo usuário à lista
    listaUser.push({
      usuarioCad: usuarioInput.value,
      senhaCad: passwordInput.value,
    });

    setTimeout(() => {
      window.location.href = "/Login/login.html";
    }, 5000);

    // Salva a lista atualizada de usuários no localStorage
    localStorage.setItem("listaUser", JSON.stringify(listaUser));
  } else {
    showModal("Algum item está incorreto ou vazio!");
  }
}

/*function redirect() {
  window.location.href = "/Login/login.html";
}*/
