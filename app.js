const form = document.querySelector("form");
const errorMessage = document.getElementById("error");

form.email.addEventListener("focus", function () {
  cleanErrors();
});

form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Clean previous errors if any
  cleanErrors();

  const emailValue = form.email.value;

  if (!isValidEmail(emailValue)) {
    triggerErrors();
  }
});

function isValidEmail(email) {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
}

function cleanErrors() {
  form.email.removeAttribute("aria-invalid");
  form.email.removeAttribute("aria-describedby");
  form.classList.remove("form-invalid");
  errorMessage.setAttribute("aria-hidden", "true");
}

function triggerErrors() {
  form.email.setAttribute("aria-invalid", "true");
  form.classList.add("form-invalid");
  form.email.setAttribute("aria-describedby", errorMessage.id);
  errorMessage.removeAttribute("aria-hidden");
}
