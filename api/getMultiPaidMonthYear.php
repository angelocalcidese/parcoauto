<?php
require_once "../../portale/cors.php";
require_once "../../portale/config.php";
require_once "../../portale/utility.php";
require_once "../../portale/api/getUserCoockie.php";

$data = getRequestDataBody();
$res = array();
$sql = "SELECT * FROM `multicard_spesa` WHERE `mese` = '". $data["mese"]. "' AND `anno` = '" . $data["anno"] . "' AND `company` = '" . $user_params->company . "' 
AND `tipocontratto` = '" . $data["tipocontratto"] . "'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $object = new stdClass();
        $object->id = $row["id"];
        $object->codice = $row["codice"];
        $object->mese = $row["mese"];
        $object->spesa = $row["spesa"];
        array_push($res, $object);
    }
}

echo json_encode($res);
//echo $sql;

$conn->close();
