<?php
require_once "../../portale/cors.php";
require_once "../../portale/config.php";
//require_once "../../portale/api/fileUpload.php";
require_once "../../portale/utility.php";

function uploadFile($base64_file, $folder, $name)
{
    $file = $base64_file;
    $pos = strpos($file, ';');
    $type = explode(':', substr($file, 0, $pos))[1];
    $mime = explode('/', $type);

    //$ext = explode(".", $base64_file["imageName"]);

    $pathImage = $folder . $name;
    //print_r($pathImage);
    $file = substr($file, strpos($file, ',') + 1, strlen($file));
    $dataBase64 = base64_decode($file);
    file_put_contents($pathImage, $dataBase64);
    return true;
}

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
} else if ($data["intervento"] == "Tagliando") {
    $sql3 = "UPDATE `veicoli` SET `ultimo_tagliando` = '" . $data["km"] . "' WHERE `veicoli`.`id` =" . $data["veicolo"];
    $result3 = $conn->query($sql3);
}
$sql4 = "SELECT MAX(id) FROM interventi";
$result4 = $conn->query($sql4);

if ($result4->num_rows > 0) {
    while ($row = $result4->fetch_assoc()) {
        $idveicolo = $row["MAX(id)"];
    }
}

if(isset($data["fattura"])){
    $file = explode(".",$data["nomefile"]);
    $idveicolo = $idveicolo + 1;
    $nameFile = $data["intervento"]."_". $idveicolo.".". $file[1];
    $type = uploadFile($data["fattura"], "../../portale/file/", $nameFile);
} else {
    $nameFile = NULL;
}

$sql = "INSERT INTO `interventi` (`id`, `veicolo`, `intervento`, `data`, `km`, `prezzo`, `fattura`) 
VALUES (NULL, '" . $data["veicolo"] . "', '" . $data["intervento"] . "', '" . $data["data"] . "', '" . $data["km"] . "', '" . $data["prezzo"] . "', '" . $nameFile . "')";
$result = $conn->query($sql);

if($km < $data["km"]){
    $sql2 = "UPDATE `veicoli` SET `km` = '". $data["km"]."' WHERE `veicoli`.`id` =" . $data["veicolo"];
    $result1 = $conn->query($sql2);
}
echo $result;
