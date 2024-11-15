<?php
require_once "../../portale/cors.php";
require_once "../../portale/config.php";
require_once "../../portale/utility.php";
require_once "../../portale/api/getUserCoockie.php";

$data = getRequestDataBody();

$sql = "SELECT * FROM `interventi` WHERE `company` = '" . $user_params->company . "'";
$result = $conn->query($sql);

$res = array();

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

echo json_encode($res);

$conn->close();
