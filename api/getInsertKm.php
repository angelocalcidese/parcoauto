<?php
require_once "../../portale/cors.php";
require_once "../../portale/config.php";
require_once "../../portale/utility.php";
require_once "../../portale/api/getUserCoockie.php";

$data = getRequestDataBody();

$sql = "SELECT * FROM `kmveicolo` WHERE `mese` = " . $data["mese"] . " AND `anno` = " . $data["anno"];
$result = $conn->query($sql);
$km = array();

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $object = new stdClass();
        $object->id = $row["id"];
        $object->veicolo = $row["veicolo"];
        array_push($km, $object);
    }
}

echo json_encode($km);

$conn->close();
