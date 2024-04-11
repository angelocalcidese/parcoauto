<?php
require_once "../../portale/cors.php";
require_once "../../portale/config.php";
require_once "utility.php";

$data = getRequestDataBody();

if($data["intervento"] == "Revisione"){
    $dataExpl = explode("/", $data["data"]);
    $proxrev = $dataExpl[0]."/". $dataExpl[1]."/". $dataExpl[2] + 2;
    $sql2 = "UPDATE `veicoli` SET `revisione` = '". $proxrev."' WHERE `veicoli`.`id` = ".$data["veicolo"];
    $result2 = $conn->query($sql2);
}  else if($data["intervento"] == "Bollo"){
    $dataExpl = explode("/", $data["data"]);
    $proxrev = $dataExpl[0]."/". $dataExpl[1]."/". $dataExpl[2] + 1;
    $sql2 = "UPDATE `veicoli` SET `bollo` = '" . $proxrev . "' WHERE `veicoli`.`id` = " . $data["veicolo"];
    $result2 = $conn->query($sql2);
} else if ($data["intervento"] == "Assicurazione") {
    $dataExpl = explode("/", $data["data"]);
    $proxrev = $dataExpl[0] . "/" . $dataExpl[1] . "/" . $dataExpl[2] + 1;
    $sql2 = "UPDATE `veicoli` SET `assicurazione` = '" . $proxrev . "' WHERE `veicoli`.`id` = " . $data["veicolo"];
    $result2 = $conn->query($sql2);
}

$sql = "INSERT INTO `interventi` (`id`, `veicolo`, `intervento`, `data`, `km`, `prezzo`) 
VALUES (NULL, '" . $data["veicolo"] . "', '" . $data["intervento"] . "', '" . $data["data"] . "', '" . $data["km"] . "', '" . $data["prezzo"] . "')";

$result = $conn->query($sql);

echo $result;
