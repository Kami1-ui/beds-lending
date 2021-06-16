<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';

$mail = new PHPMailer(true);
$mail->isSMTP();                                            //Send using SMTP
$mail->Host       = 'smtp.mail.ru';                     //Set the SMTP server to send through
$mail->SMTPAuth   = true;                                   //Enable SMTP authentication
$mail->Username   = 'kamil.kuz@mail.ru';                     //SMTP username
$mail->Password   = 'cR/LiduFbRKS5=~';                               //SMTP password
$mail->SMTPSecure = 'ssl';         //Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
$mail->Port       = 465;                                    //TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

$mail->setFrom('kamil.kuz@mail.ru', 'kamil');
$mail->addAddress('hit.men061@gmail.com');

$mail->CharSet = 'UTF-8';
$mail->setLanguage('ru', 'phpmailer/language/');
$mail->IsHTML(true);

//Тема письма
$mail->Subject = 'Заявка с сайта "Бонлайн кровати';

//Тело письма
$body = '<h1>Заявка с сайта "Бонлайн кровати</h1>';

if (trim(!empty($_POST['name']))) {
    $body .= '<p><strong>Имя: </strong>' . $_POST['name'] . '</p>';
}

if (trim(!empty($_POST['surname']))) {

    $body .= '<p><strong>Фамилия: </strong>' . $_POST['surname'] . '</p>';
}



if (trim(!empty($_POST['phone']))) {
    $body .= '<p><strong>Телефон: </strong>' . $_POST['phone'] . '</p>';
}
if (trim(!empty($_POST['mail']))) {
    $body .= '<p><strong>Почта: </strong>' . $_POST['mail'] . '</p>';
}

if (trim(!empty($_POST['message']))) {
    $body .= '<p><strong>Сообщение: </strong>' . $_POST['message'] . '</p>';
}

$mail->Body = $body;

if (!$mail->send()) {
    $message = 'Ошибка';
} else {
    $message = 'Данные отправлены!';
}

$response = ['message' => $message];

header('Content-type: application/json');
echo json_encode($response);
