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
$message = "Salve <b>". $data["nominativo"]. "</b>,<br> &egrave; stato richiesto il suo intervento per l'inserimento dei<br><br>  
<b>KM ATTUALI SEGNATI SUL CONTA KM DEL VEICOLO TARGATO <i>" . $targa . "</i> A LEI ASSEGNATO</b><br><br>
CLICCARE SUL SEGUENTE LINK PER INSERIRE I KM <br>
<h2><a href='" . $emailAddress ."portale/insertkm.php?t=". $base64Targa. "&i=" . $data["id"] . "&v=". $data["veicolo"]."&mese=". $data["mese"]. "'> -----> LINK <----- </a></h2><br><br>
<b>Cordiali Saluti</b><br><br>
".$company;

sendEmail($data["email"], $message, $title, $company);
?>