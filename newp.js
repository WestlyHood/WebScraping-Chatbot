const mobileBtn = document.getElementById("mobile-cta");
nav = document.querySelector("nav");
mobileBtnExit = document.getElementById("mobile-exit");

mobileBtn.addEventListener("click", () => {
  nav.classList.add("menu-btn");
});

mobileBtnExit.addEventListener("click", () => {
  nav.classList.remove("menu-btn");
});

function validateForm() {
  const response = document.getElementById("response");

  // Get form inputs
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm-password").value;

  // Validate password
  if (password.length < 8) {
    response.innerHTML = "*Password must be at least 8 characters long.";
    return false;
  }

  // Validate confirm password
  if (password !== confirmPassword) {
    response.innerHTML = "*Passwords do not match.";
    return false;
  }

  // All inputs are valid
  return true;
}

function togglePassword(inputId) {
  const passwordInput = document.getElementById(inputId);
  const passwordToggle = passwordInput.nextElementSibling;
  const passwordType = passwordInput.getAttribute("type");

  if (passwordType === "password") {
    passwordInput.setAttribute("type", "text");
    passwordToggle.classList.add("active");
  } else {
    passwordInput.setAttribute("type", "password");
    passwordToggle.classList.remove("active");
  }
}
