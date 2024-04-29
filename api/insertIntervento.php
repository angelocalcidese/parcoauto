<?php
require_once "../../portale/cors.php";
require_once "../../portale/config.php";
require_once "utility.php";

$data = getRequestDataBody();
$km = 0;
$sql1 = "SELECT * FROM `veicoli` WHERE `id` = ".$data["veicolo"];
$result1 = $conn->query($sql1);
if ($result1->num_rows > 0) {
    while ($row = $result1->fetch_assoc()) {
        $km = $row["km"];
    }
} 

if($data["intervento"] == "Revisione"){
    $dataExpl = explode("/", $data["data"]);
	$calcolo = intval($dataExpl[2]) + 2;
    $proxrev = $dataExpl[0]."/". $dataExpl[1]."/". $calcolo;
    $sql2 = "UPDATE `veicoli` SET `revisione` = '". $proxrev."' WHERE `veicoli`.`id` = ".$data["veicolo"];
    $result2 = $conn->query($sql2);
}  else if($data["intervento"] == "Bollo"){
    $dataExpl = explode("/", $data["data"]);
	$calcolo = intval($dataExpl[2]) + 1;
    $proxrev = $dataExpl[0]."/". $dataExpl[1]."/". $calcolo;
    $sql2 = "UPDATE `veicoli` SET `bollo` = '" . $proxrev . "' WHERE `veicoli`.`id` = " . $data["veicolo"];
    $result2 = $conn->query($sql2);
} else if ($data["intervento"] == "Assicurazione") {
    $dataExpl = explode("/", $data["data"]);
    $calcolo = intval($dataExpl[2]) + 1;
	$proxrev = $dataExpl[0] . "/" . $dataExpl[1] . "/" . $calcolo;
    $sql2 = "UPDATE `veicoli` SET `assicurazione` = '" . $proxrev . "' WHERE `veicoli`.`id` = " . $data["veicolo"];
    $result2 = $conn->query($sql2);
}
$sql4 = "SELECT MAX(id) FROM file";
$result4 = $conn->query($sql4);

if ($result4->num_rows > 0) {
    while ($row = $result4->fetch_assoc()) {
        $idveicolo = $row["MAX(id)"];
    }
}
$idveicolo = $idveicolo + 1;
$nameFile = $data["intervento"]."_". $idveicolo;

$sql3 = "INSERT INTO `file` (`id`, `type`, `file`) VALUES (NULL, '". $nameFile. "',  '".$data["fattura"]."')";
$result3 = $conn->query($sql3);

$sql = "INSERT INTO `interventi` (`id`, `veicolo`, `intervento`, `data`, `km`, `prezzo`, `fattura`) 
VALUES (NULL, '" . $data["veicolo"] . "', '" . $data["intervento"] . "', '" . $data["data"] . "', '" . $data["km"] . "', '" . $data["prezzo"] . "', '" . $nameFile . "')";
$result = $conn->query($sql);

if($km < $data["km"]){
    $sql2 =
    "UPDATE `veicoli` SET `km` = '". $data["km"]."' WHERE `veicoli`.`id` =" . $data["veicolo"];
    $result1 = $conn->query($sql2);
}
echo $result;
