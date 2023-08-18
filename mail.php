<?php
require 'vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;


// Load the PHPMailer library
require '/public/vendor/phpmailer/src/Exception.php';
require '/public/vendor/phpmailer/src/PHPMailer.php';
require '/public/vendor/phpmailer/src/SMTP.php';



// Create a new PHPMailer instance
$mail = new PHPMailer(true);

try {
    // SMTP settings
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'averyvorwerkdesigns@gmail.com';
    $mail->Password = 'Snickers456!';
    $mail->SMTPSecure = 'tls'; // Use 'ssl' for SSL
    $mail->Port = 587; // Use 465 for SSL

    // Sender and recipient
    $mail->setFrom('averyvorwerkdesigns@gmail.com', 'Your Name');
    $mail->addAddress('averyvorwerkdesigns@gmail.com', 'Receiver Name');

    // Email content
    $mail->isHTML(true);
    $mail->Subject = 'Subject of the Email';
    $mail->Body = '<html><body><p>This is the HTML message body.</p></body></html>';

    // Send the email
    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo 'Message could not be sent. Mailer Error: ', $mail->ErrorInfo;
}
?>
