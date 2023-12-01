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

const passwordInput = document.getElementById("senha");
const labelSenha = document.getElementById("labelSenha");

function validatePasswords() {
  const password = passwordInput.value;

  if (password.length < 8) {
    labelSenha.textContent = "Obrigatório 8 letras";
    labelSenha.style.color = "red";
    labelConfirmSenha.textContent = "Obrigatório 8 letras";
    labelConfirmSenha.style.color = "red";
  } else {
    labelSenha.textContent = "As senhas coincidem";
    labelSenha.style.color = "green";
    labelConfirmSenha.textContent = "As senhas coincidem";
    labelConfirmSenha.style.color = "green";
    validSenha = true;
  }
}

function preventNumberInput(event) {
  const key = event.key;
  if (key.match(/[0-9]/)) {
    event.preventDefault();
  }
}

passwordInput.addEventListener("keydown", preventNumberInput);

passwordInput.addEventListener("keyup", validatePasswords);

function login() {
  let listaUser = [];
  let usuario = document.querySelector("#usuario");
  let senha = document.querySelector("#senha");
  let userValid = {
    user: "",
    password: "",
  };

  listaUser = JSON.parse(localStorage.getItem("listaUser"));
  console.log(listaUser);

  listaUser.forEach((item) => {
    if (usuario.value == item.usuarioCad && senha.value == item.senhaCad) {
      userValid = {
        user: item.usuarioCad,
        senha: item.senhaCad,
      };
    }
  });

  if (usuario.value == userValid.user && senha.value == userValid.senha) {
    showModal("Usuário e senha corretos!");
    setTimeout(() => {
      window.location.href = "/Tela Inicial/index.html";
    }, 3000);
    let token = Math.random().toString(16).substr(2);
    localStorage.setItem("token", token);

    localStorage.setItem("userLogado", JSON.stringify(userValid));
  } else {
    showModal("Usuário ou senha incorretos!");
  }
}

// Se o token não estiver presente, redireciona para a página de login

function showModal(message) {
  const modalMessage = document.getElementById("modalMessage");
  modalMessage.innerText = message;

  const myModal = new bootstrap.Modal(document.getElementById("myModal"));
  myModal.show();
}

function sair() {
  if (localStorage.getItem("token") == null) {
    alert("Você precisa estar logado para sair da sua conta.");
    window.location.href = "/Login/login.html";
  } else {
    localStorage.removeItem("token");
    localStorage.removeItem("userLogado");
    alert("Usuário deslogado!");
    window.location.href = "/Login/login.html";
  }
}
