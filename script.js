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
          return false;
      } else {
          emailError.textContent = "";
          return true;
      }
  }
// Function to handle form submission
function handleSubmit(event) {
  event.preventDefault(); // Prevent the default form submission

  // Validate email addresses
  if (validateEmails()) {
      // Form is valid; you can submit the form to your server or perform other actions here
      alert("Form submitted successfully!");
  } else {
      // Form is not valid; do not submit
      alert("Form submission failed. Please correct the errors.");
  }
}

// Add event listener for email field and confirm email field
emailField.addEventListener("input", validateEmails);
confirmEmailField.addEventListener("input", validateEmails);

// Add event listener for form submission
contactForm.addEventListener("submit", handleSubmit);
});

// Reset the form and clear confirmation message on page load
contactForm.reset();
confirmationMessage.textContent = "";

// Add event listener for email field and confirm email field
emailField.addEventListener("input", validateEmails);
confirmEmailField.addEventListener("input", validateEmails);

// Add event listener for form submission
contactForm.addEventListener("submit", handleSubmit);
});

// JavaScript to handle form submission
document.getElementById("search-form").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the default form submission
  const searchInput = document.getElementById("search-input").value;
  // Implement your search logic here
  alert("Searching for: " + searchInput);
});
