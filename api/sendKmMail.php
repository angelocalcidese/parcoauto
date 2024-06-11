<?php
require_once '../../portale/config.php';
require_once "../../portale/utility.php";
require_once "sendMailMessageCompany.php";
//require_once "userExist.php";

$data = getRequestDataBody();

$company = $data["company"];
//$emailComp = $data["emailComp"];
$targa = $data["targa"];
$base64Targa = base64_encode($targa);
$title = "Richiesta Inserimento KM";
$message = "Salve <b>". $data["nominativo"]."</b>,<br> &egrave; stato richiesto il suo intervento per l'inserimento dei km mensili percorsi, <br>
per il veicolo a lei assegnato targato <b>".$targa. "</b> presso la societ&agrave; <b>".$company. "</b>.<br>
Pu&ograve; cliccare sul seguente <b><a href='" . $emailAddress ."portale/insertkm.php?t=". $base64Targa. "&i=" . $data["id"] . "&v=". $data["veicolo"]."&mese=". $data["mese"]."'>Link</a></b> per inserire i dati richiesti.<br><br>
<b>Cordiali Saluti</b><br><br>
".$company;

sendEmail($data["email"], $message, $title, $company);
?>