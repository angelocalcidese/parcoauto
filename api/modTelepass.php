<?php
require_once "../../portale/cors.php";
require_once "../../portale/config.php";
require_once "../../portale/utility.php";
require_once "../../portale/api/getUserCoockie.php";

$data = getRequestDataBody();

$sql = "UPDATE `telepass` SET `codice` = '" . $data["codice"] . "',`tipologia` = '" . $data["tipologia"] . "', `stato` = '" . $data["stato"] . "', `validitaterritoriale` = '" . $data["validitaterritoriale"] . "', `seriale` = '" . $data["seriale"] . "' , `attivazione` = '" . $data["attivazione"] . "', `tessera` = '" . $data["tessera"] . "' WHERE `telepass`.`id` =" . $data["id"];
$result = $conn->query($sql);

echo $result;
