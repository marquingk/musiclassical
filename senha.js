const form = document.getElementById('login');

form.addEventListener('submit', (event) =>
{
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  let senha = "string";
  if (password == senha) {
    window.location.href = "bandas.html"
  } else {
    
   document.getElementById("senha").innerHTML = "Senha Incorreta"
  }
  console.log('Usuário:', username);
  console.log('Senha:', password);

})