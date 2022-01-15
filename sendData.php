<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $para = 'walterlevi98@gmail.com';
    $asunto = 'Contacto en página web';
    $mailMessage = "Nombre: " . $name . "\r\n" . "Email: " . $email . "\r\n" . "Mensaje: " . $message;
    $header = 'Mensaje enviado desde la página web levirosales.com';

    mail($para, $asunto, utf8_decode($mailMessage), $header);
    header("Location:index.html#secContacto");
?>