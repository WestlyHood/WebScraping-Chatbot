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

  if (email === "") {
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
