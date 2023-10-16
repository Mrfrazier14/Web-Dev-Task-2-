<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $first_name = $_POST["first-name"];
    $last_name = $_POST["last-name"];
    $email = $_POST["email"];
    $question = $_POST["question"];

    $to = "your_email@example.com"; // Replace with your email address
    $subject = "Contact Form Submission from $first_name $last_name";
    $message = "Name: $first_name $last_name\nEmail: $email\nQuestion or Comment: $question";
    $headers = "From: $email";

    if (mail($to, $subject, $message, $headers)) {
        echo "Email sent successfully. We will get back to you soon.";
    } else {
        echo "Email could not be sent. Please try again later.";
    }
}
?>
