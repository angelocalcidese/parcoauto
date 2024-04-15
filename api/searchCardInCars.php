<?php
require_once "../../portale/cors.php";
require_once "../../portale/config.php";
require_once "utility.php";
require_once "../../portale/api/getUserCoockie.php";

$data = getRequestDataBody();
/** GET VEICOLI */

$sql= "SELECT * FROM `veicoli` WHERE `multicard` = ". $data["id"]." AND `company` = ". $user_params->company;
$result = $conn->query($sql);
$veicle = array();

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $object = new stdClass();
        $object->id = $row["id"];
        $object->multicard = $row["multicard"];
        $object->telepass = $row["telepass"];
        array_push($veicle, $object);
    }
}

echo json_encode($veicle);

$conn->close();
