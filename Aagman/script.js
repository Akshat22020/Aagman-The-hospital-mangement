const loginForm = document.getElementById("loginForm");
const errorMessage = document.getElementById("errorMessage");
const loginButtonChange =  document.getElementById("login-signup");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (username === "admin" && password === "1234") {
    localStorage.setItem("loggedIn", "true");
    window.location.href = "user-dashboard.html";
  } 
  else {
    alert("Please enter correct username & password");
  }
});

function showError(msg) {
  errorMessage.textContent = msg;
  errorMessage.style.display = "block";
}
