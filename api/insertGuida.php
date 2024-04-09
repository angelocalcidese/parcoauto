<?php
require_once "../../portale/cors.php";
require_once "../../portale/config.php";
require_once "utility.php";

$data = getRequestDataBody();


$sql = "INSERT INTO `guidatori` (`id`, `veicolo`, `da`, `a`, `dipendente`, `kmda`, `kma`) 
VALUES (NULL, '" . $data["veicolo"] . "', '" . $data["da"] . "', '-', '" . $data["dipendente"] . "', '" . $data["kmda"] . "', '-')";

$result = $conn->query($sql);
echo $result;
