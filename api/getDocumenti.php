<?php
require_once "../../portale/cors.php";
require_once "../../portale/config.php";
require_once "../../portale/utility.php";

$data = getRequestDataBody();
$res = array();
//$sql = "SELECT * FROM `interventi` WHERE `veicolo` = " . $data["veicolo"]." AND `intervento` = 'Libretto'";
$sql = "SELECT * FROM `interventi` WHERE `veicolo` = '". $data["veicolo"]."' AND `intervento` = 'Libretto'";
$result = $conn->query($sql);


if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $object = new stdClass();
        $object->id = $row["id"];
        $object->intervento = $row["intervento"];
        $object->data = $row["data"];
        $object->km = $row["km"];
        $object->prezzo = $row["prezzo"];
        $object->fattura = $row["fattura"];
        array_push($res, $object);
    }
}

//$sql1 = "SELECT * FROM `interventi` WHERE `veicolo` = " . $data["veicolo"] . " AND `intervento` = 'Assicurazione'";
$sql1 = "SELECT * FROM `interventi` WHERE `veicolo` = '" . $data["veicolo"] . "' AND `intervento` = 'Assicurazione'";
$result1 = $conn->query($sql1);

if ($result1->num_rows > 0) {
    while ($row = $result1->fetch_assoc()) {
        $object = new stdClass();
        $object->id = $row["id"];
        $object->intervento = $row["intervento"];
        $object->data = $row["data"];
        $object->km = $row["km"];
        $object->prezzo = $row["prezzo"];
        $object->fattura = $row["fattura"];
        array_push($res, $object);
    }
}

echo json_encode($res);
//echo $sql;

$conn->close();
