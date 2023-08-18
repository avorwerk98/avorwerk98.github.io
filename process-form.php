<?php
$msg = array(); // Initialize the message array

// Check if the form data was submitted
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Validate form fields
    $name = trim($_POST['contact-name']);
    $phone = trim($_POST['contact-phone']);
    $email = trim($_POST['contact-email']);
    $message = trim($_POST['contact-message']);

    if ($name == "") {
        $msg['err'] = "Name cannot be empty!";
        $msg['field'] = "contact-name";
        $msg['code'] = FALSE;
    } else if ($phone == "") {
        $msg['err'] = "Phone number cannot be empty!";
        $msg['field'] = "contact-phone";
        $msg['code'] = FALSE;
    } else if (!preg_match("/^[0-9 \\-\\+]{4,17}$/i", $phone)) {
        $msg['err'] = "Please enter a valid phone number!";
        $msg['field'] = "contact-phone";
        $msg['code'] = FALSE;
    } else if ($email == "") {
        $msg['err'] = "Email cannot be empty!";
        $msg['field'] = "contact-email";
        $msg['code'] = FALSE;
    } else if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $msg['err'] = "Please enter a valid email address!";
        $msg['field'] = "contact-email";
        $msg['code'] = FALSE;
    } else if ($message == "") {
        $msg['err'] = "Message cannot be empty!";
        $msg['field'] = "contact-message";
        $msg['code'] = FALSE;
    } else {
        // Form data is valid, send email
        $to = 'averyvorwerkdesigns@gmail.com';
        $subject = 'Contact Query from InBio';
        $_message = '<html><head></head><body>';
        $_message .= '<p>Name: ' . $name . '</p>';
        $_message .= '<p>Phone: ' . $phone . '</p>';
        $_message .= '<p>Email: ' . $email . '</p>';
        $_message .= '<p>Message: ' . $message . '</p>';
        $_message .= '</body></html>';

        $headers = 'MIME-Version: 1.0' . "\r\n";
        $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
        $headers .= 'From: InBio <contact@example.com>' . "\r\n";
        // Add cc and bcc if needed

        if (mail($to, $subject, $_message, $headers, '-f contact@example.com')) {
            $msg['success'] = "Email has been sent successfully.";
            $msg['code'] = TRUE;
        } else {
            $msg['err'] = "Failed to send email. Please try again later.";
            $msg['code'] = FALSE;
        }
    }
} else {
    $msg['err'] = "Invalid request method.";
    $msg['code'] = FALSE;
}

echo json_encode($msg);
?>
