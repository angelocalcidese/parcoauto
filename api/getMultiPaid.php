<?php
require_once "../../portale/cors.php";
require_once "../../portale/config.php";
require_once "../../portale/utility.php";

$data = getRequestDataBody();
$res = array();
$sql = "SELECT * FROM `multicard_spesa` WHERE `codice` = '". $data["id"]. "' AND `anno` = '" . $data["anno"] . "'";
$result = $conn->query($sql);


if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $object = new stdClass();
        $object->id = $row["id"];
        $object->mese = $row["mese"];
        $object->spesa = $row["spesa"];
        $object->tipocontratto = $row["tipocontratto"];
        array_push($res, $object);
    }
}

echo json_encode($res);
//echo $sql;

$conn->close();
