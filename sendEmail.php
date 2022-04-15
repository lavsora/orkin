<?php

// Replace this with your own email address
$siteOwnersEmail = '#';
$senderBy = '#';

$method = $_SERVER['REQUEST_METHOD'];

if ( $method === 'POST' ) {

    $name = trim(stripslashes($_POST['contactName']));
    $surname = trim(stripslashes($_POST['contactSurname']));
    $email = trim(stripslashes($_POST['contactEmail']));
    $phone = trim(stripslashes($_POST['contactPhone']));
    $city = trim(stripslashes($_POST['contactCity']));

    // Check Name
    if (strlen($name) < 2) {
        $error['name'] = "Пожалуйста, введите Ваше имя.";
    }
	// Check Phone
    if (strlen($phone) < 11) {
        $error['phone'] = "Пожалуйста, введите корректный номер телефона.";
    }
    // Check Email
    if (!preg_match('/^[a-z0-9&\'\.\-_\+]+@[a-z0-9\-]+\.([a-z0-9\-]+\.)*+[a-z]{2}/is', $email)) {
        $error['email'] = "Пожалуйста, введите Ваш email адрес.";
    }


    // Set Message
    $message .= "Имя: " . $name . "<br />";
    $message .= "Фамилия: " . $surname . "<br />";
    $message .= "Email: " . $email . "<br />";
	$message .= "Номер телефона: " . $phone . "<br />";
    $message .= "Город: " . $city;

    // Set From: header
	$subject = "Заявка от клиента";
    $from =  $name . " <" . $senderBy . ">";

    // Email Headers
    $headers = "From: " . $from . "\r\n";
    $headers .= "Reply-To: ". $senderBy . "\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";


    if (!$error) {

        ini_set("sendmail_from", $siteOwnersEmail); // for windows server
        $mail = mail($siteOwnersEmail, $subject, $message, $headers);

        if ($mail) { echo "Заявка отправлена"; }
        else { echo "Что-то пошло не так. Пожалуйста, попробуйте еще раз."; }
        
    } # end if - no validation error

    else {

        $response = (isset($error['name'])) ? $error['name'] . "\n" : null;
		$response .= (isset($error['phone'])) ? $error['phone'] . "\n" : null;
        $response .= (isset($error['email'])) ? $error['email'] . "\n" : null;
        $response .= (isset($error['city'])) ? $error['city'] . " " : null;
        
        echo $response;

    } # end if - there was a validation error

}

?>