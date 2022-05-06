const formulario = document.getElementById('form').value;
const usuario = document.getElementById('username').value;
const eMail = document.getElementById('email').value;
const senha = document.getElementById('password').value;
const senhaConfirma = document.getElementById('passwordConfirmation').value;

function usuario() {
  if () {
    
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  //Adicionar a mensagem de erro
  small.innerText = message;

  //Adicionar a classe de erro
  formControl.className = "form-control error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;

  // Adicionar a classe de sucesso
  formControl.className = "form-control success";
}


