const mobileBtn = document.getElementById("mobile-cta");
nav = document.querySelector("nav");
mobileBtnExit = document.getElementById("mobile-exit");

mobileBtn.addEventListener("click", () => {
  nav.classList.add("menu-btn");
});

mobileBtnExit.addEventListener("click", () => {
  nav.classList.remove("menu-btn");
});

const form = document.getElementById("myForm");
const response = document.getElementById("response");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the form from submitting

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (password === "" || email === "") {
    response.innerHTML = "";
    response.innerText = "*Please fill in all fields.";
  } else if (!validateEmail(email)) {
    response.innerHTML = "*Please enter a valid email address.";
  }
});

function validateEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
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
