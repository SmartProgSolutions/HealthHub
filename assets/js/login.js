document.addEventListener("submit", (event) => {
  event.preventDefault();
  const { email, password } = event.target;
  
  localStorage.setItem('email', email.value);
  localStorage.setItem('password', password.value);

  alert('Login feito com sucesso!');
});