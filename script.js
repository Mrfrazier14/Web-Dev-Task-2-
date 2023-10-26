document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const emailField = document.getElementById("email-address");
  const confirmEmailField = document.getElementById("confirm-email-address");
  const emailMatchMessage = document.getElementById("email-match-message");

  // Function to validate email fields
  function validateEmails() {
      const email = emailField.value.trim();
      const confirmEmail = confirmEmailField.value.trim();

      if (email!== confirmEmail) {
          emailMatchMessage.textContent = "Email addresses do not match.";
      } else {
          emailMatchMessage.textContent = "Email addresses match!";
      }
  }

  // Add event listener for email field and confirm email field
  emailField.addEventListener("input", validateEmails);
  confirmEmailField.addEventListener("input", validateEmails);

  // Add event listener for form submission
  form.addEventListener("submit", function (event) {
      event.preventDefault();

      // Validate email fields
      validateEmails();

      // If email fields are valid, submit the form
      if (emailMatchMessage.textContent === "Email addresses match!") {
          form.submit();
      }
  });
});
