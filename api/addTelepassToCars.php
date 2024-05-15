<?php
require_once "../../portale/cors.php";
require_once "../../portale/config.php";
require_once "../../portale/utility.php";
require_once "../../portale/api/getUserCoockie.php";

$data = getRequestDataBody();

$sql =
"UPDATE `veicoli` SET `telepass` = '" . $data["idcard"] . "' WHERE `veicoli`.`id` = " . $data["idveicle"];
$result = $conn->query($sql);

echo $result;
?>