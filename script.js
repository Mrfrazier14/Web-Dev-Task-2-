document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const successMessage = document.getElementById("success-message");

  form.addEventListener("submit", function (event) {
      event.preventDefault();

      // Validate email fields (for example, check if they match)
      const email = document.getElementById("email").value;
      const confirmEmail = document.getElementById("confirm-email").value;

      if (email !== confirmEmail) {
          alert("Email addresses must match.");
          return; // Prevent form submission if emails don't match
      }

      // Fetch request to send data to the PHP script
      fetch(form.action, {
          method: "POST",
          body: new FormData(form),
      })
      .then(response => response.text())
      .then(data => {
          if (data === "success") {
              // Hide the form and display success message
              form.style.display = "none";
              successMessage.style.display = "block";
          } else {
              alert("An error occurred. Please try again later.");
          }
      })
      .catch(error => {
          console.error("Error:", error);
      });
  });
});
