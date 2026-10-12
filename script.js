
const yearElement = document.querySelector("#current-year");
const contactForm = document.querySelector("#contact-form");
const formStatus = document.querySelector("#form-status");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

if (contactForm && formStatus) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    formStatus.textContent =
      "Thank you! The demo form works, but messages are not sent yet.";

    contactForm.reset();
  });
}
