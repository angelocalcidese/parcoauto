<?php
require_once "../../portale/cors.php";
require_once "../../portale/config.php";
require_once "../../portale/utility.php";

$data = getRequestDataBody();

$sql = "SELECT * FROM `kmveicolo` WHERE `veicolo` = ". $data["id"]." AND `anno` = " . $data["anno"]. " ORDER BY `mese`";
$result = $conn->query($sql);

$km = array();

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $object = new stdClass();
        $object->id = $row["id"];
        $object->assegnata = $row["assegnata"];
        $object->kmold = $row["kmold"];
        $object->km = $row["km"];
        $object->spesacard = $row["spesacard"];
        $object->spesaextra = $row["spesaextra"];
        $object->mese = $row["mese"];
        array_push($km, $object);
    }
}

echo json_encode($km);

$conn->close();
?>