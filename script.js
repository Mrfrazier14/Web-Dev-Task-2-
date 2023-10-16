document.addEventListener("DOMContentLoaded", function () {
  const emailField = document.getElementById("email");
  const confirmEmailField = document.getElementById("confirm-email");
  const emailError = document.getElementById("email-error");

  // Function to validate email fields
  function validateEmails() {
      const email = emailField.value.trim();
      const confirmEmail = confirmEmailField.value.trim();

      if (email !== confirmEmail) {
          emailError.textContent = "Email addresses do not match.";
      } else {
          emailError.textContent = "Good job!";
      }
  }

  // Add event listeners for email fields
  emailField.addEventListener("input", validateEmails);
  confirmEmailField.addEventListener("input", validateEmails);
});
