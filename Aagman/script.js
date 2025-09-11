const loginForm = document.getElementById("loginForm");
const errorMessage = document.getElementById("errorMessage");
const loginButtonChange =  document.getElementById("login-signup");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (username === "admin" && password === "1234") {
    localStorage.setItem("loggedIn", "true");
    window.location.href = "../index.html";
  } 
  else {
    errorMessage.style.fontSize = "10px";
    errorMessage.innerHTML = "Incorrect password or username";
  }
});

function showError(msg) {
  errorMessage.textContent = msg;
  errorMessage.style.display = "block";
}
