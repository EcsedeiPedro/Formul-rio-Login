const formulario = document.getElementById("form");
const usuario = document.getElementById("username");
const email = document.getElementById("email");
const senha = document.getElementById("password");
const senhaConfirma = document.getElementById("senhaConfirma");

function verificaUsuario() {
  const usuarioValue = usuario.value;

  if (usuarioValue === "") {
    setErrorFor(usuario, "O nome de usuário é obrigatório");
  } else if (usuarioValue.length < 7) {
    setErrorFor(
      usuario,
      "O nome de usuário deve ter no mínimo 7 caracteres e no máximo 14"
    );
  } else setSuccessFor(usuario, "Usuário Válido");
}

function verificaEmail() {
  const emailValue = email.value;

  if (emailValue === "") {
    setErrorFor(email, "O email é obrigatório.");
  } else if (!checkEmail(emailValue)) {
    setErrorFor(email, "Por favor, insira um email válido.");
  } else {
    setSuccessFor(email);
  }
}

function verificaSenha() {
  const senhaValue = senha.value;

  if (senhaValue === "") {
    setErrorFor(senha, "A senha é obrigatória");
  } else if (senhaValue.length < 7) {
    setErrorFor(
      senha,
      "A senha deve conter no mínimo 7 caracteres e no máximo 14"
    );
  } else setSuccessFor(senha);
}

function confirmaSenha() {
  const senhaConfirmaValue = senhaConfirma.value;

  if (senhaConfirmaValue === "") {
    setErrorFor(senhaConfirma, "A confirmação de senha é obrigatória.");
  } else if (senhaConfirmaValue !== senha.value) {
    setErrorFor(senhaConfirma, 'As senhas não conferem');
  } else setSuccessFor(senhaConfirma);
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  //Adicionar a mensagem de erro
  small.innerText = message;

  //Adicionar a classe de erro
  formControl.className = "form-control error";
}

function setSuccessFor(input, message) {
  const formControl = input.parentElement;

  // Adicionar a classe de sucesso
  formControl.className = "form-control success";
}

function checkEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
