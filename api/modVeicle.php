<?php
require_once "../../portale/cors.php";
require_once "../../portale/config.php";
require_once "utility.php";
require_once "../../portale/api/getUserCoockie.php";

$data = getRequestDataBody();

$sql = "UPDATE `veicoli` SET `tipologia` = '" . $data["tipologia"] . "', `marca` = '" . $data["marca"] . "', `modello` = '" . $data["modello"] . "', `targa` = '" . $data["targa"] . "', `acquisto` = '" . $data["acquisto"] . "', 
`assegnazione` = '" . $data["assegnazione"] . "', `stato` = '" . $data["stato"] . "', `proprieta` = '" . $data["proprieta"] . "', `km` = '" . $data["km"] . "' WHERE `veicoli`.`id` = " . $data["id"];
$result = $conn->query($sql);

echo $result;
