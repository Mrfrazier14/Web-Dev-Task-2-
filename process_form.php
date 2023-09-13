<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $first_name = $_POST["first-name"];
    $last_name = $_POST["last-name"];
    $email = $_POST["email"];
    $question = $_POST["question"];
    
    $to = "afraz91@wgu.edu"; // Your email address
    $subject = "Contact Form Submission";
    $message = "First Name: $first_name\n";
    $message .= "Last Name: $last_name\n";
    $message .= "Email: $email\n";
    $message .= "Question or Comment:\n$question";

    $headers = "From: $email";

    if (mail($to, $subject, $message, $headers)) {
        echo "success"; // You can use this response in JavaScript to show a success message
    } else {
        echo "error";
    }
}
?>

