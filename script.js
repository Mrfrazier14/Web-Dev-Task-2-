document.addEventListener("DOMContentLoaded", function () {
  const emailField = document.getElementById("email");
  const confirmEmailField = document.getElementById("confirm-email");
  const emailError = document.getElementById("email-error");
  const contactForm = document.getElementById("contact-form");

  // Function to validate email fields
  function validateEmails() {
      const email = emailField.value.trim();
      const confirmEmail = confirmEmailField.value.trim();

      if (email !== confirmEmail) {
          emailError.textContent = "Email addresses do not match.";
          return false;
      } else {
          emailError.textContent = "";
          return true;
      }
  }

 // Inside your handleSubmit function
function handleSubmit(event) {
  event.preventDefault(); // Prevent the default form submission

  // Validate email addresses
  if (validateEmails()) {
      // Form is valid; you can submit the form to your server or perform other actions here
      document.getElementById("confirmation-message").textContent = "Thank you for your submission. We will contact you soon!";
  } else {
      // Form is not valid; do not submit
      alert("Form submission failed. Please correct the errors.");
  }
}


 // Inside your JavaScript code
document.getElementById("contact-form").reset();
document.getElementById("confirmation-message").textContent = "";


// Add event listener for email field and confirm email field
  emailField.addEventListener("input", validateEmails);
  confirmEmailField.addEventListener("input", validateEmails);

  // Add event listener for form submission
  contactForm.addEventListener("submit", handleSubmit);
});

