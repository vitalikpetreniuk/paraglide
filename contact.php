<?php

$method = $_SERVER['REQUEST_METHOD'];

//Script Foreach
$c = true;
if ( $method === 'POST' ) {

	$project_name_contact = trim($_POST["project_name_contactr"]);
	$admin_email_contact  = trim($_POST["admin_email_contact"]);
	$form_subject_contact = trim($_POST["form_subject_contact"]);

	foreach ( $_POST as $key => $value ) {
		if ( $value != "" && $key != "project_name_contact" && $key != "admin_email_contact" && $key != "form_subject_contact" ) {
			$message .= "
			" . ( ($c = !$c) ? '<tr>':'<tr style="background-color: #f8f8f8;">' ) . "
				<td style='padding: 10px; border: #e9e9e9 1px solid;'><b>$key</b></td>
				<td style='padding: 10px; border: #e9e9e9 1px solid;'>$value</td>
			</tr>
			";
		}
	}
} else if ( $method === 'GET' ) {

	$project_name_contact = trim($_GET["project_name_contact"]);
	$admin_email_contact  = trim($_GET["admin_email_contact"]);
	$form_subject_contact = trim($_GET["form_subject_contact"]);

	foreach ( $_GET as $key => $value ) {
		if ( $value != "" && $key != "project_name_contact" && $key != "admin_email_contact" && $key != "form_subject_contact" ) {
			$message .= "
			" . ( ($c = !$c) ? '<tr>':'<tr style="background-color: #f8f8f8;">' ) . "
				<td style='padding: 10px; border: #e9e9e9 1px solid;'><b>$key</b></td>
				<td style='padding: 10px; border: #e9e9e9 1px solid;'>$value</td>
			</tr>
			";
		}
	}
}

$message = "<table style='width: 100%;'>$message</table>";

function adopt($text) {
	return '=?UTF-8?B?'.Base64_encode($text).'?=';
}

$headers = "MIME-Version: 1.0" . PHP_EOL .
"Content-Type: text/html; charset=utf-8" . PHP_EOL .
'From: '.adopt($project_name_contact).' <'.$admin_email_contact.'>' . PHP_EOL .
'Reply-To: '.$admin_email_contact.'' . PHP_EOL;

mail($admin_email_contact, adopt($form_subject_contact), $message, $headers );
