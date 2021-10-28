<?php

    $email = $_POST['email'];
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];

    $subject = "=?utf-8?B?".base64_decode("Сообщение с сайта")."?=";
    $headers = "From: $email\r\nReply-to: $email\r\nContent-type: text/html; charset=utf-8\r\n";

    $succes =  mail("sayana_0308@mail.ru", $subject, $message, $headers);
    echo $succes;