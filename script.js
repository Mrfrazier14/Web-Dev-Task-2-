document.addEventListener("DOMContentLoaded", function () {
  const emailField = document.getElementById("email");
  const confirmEmailField = document.getElementById("confirm-email");
  const emailMatchMessage = document.getElementById("email-match-message");

  // Function to validate email fields
  function validateEmails() {
      const email = emailField.value.trim();
      const confirmEmail = confirmEmailField.value.trim();

      if (email !== confirmEmail) {
          emailMatchMessage.textContent = "Email addresses do not match.";
      } else {
          emailMatchMessage.textContent = "Email addresses match!";
      }
  }

  // Add event listener for email field and confirm email field
  emailField.addEventListener("input", validateEmails);
  confirmEmailField.addEventListener("input", validateEmails);
});
