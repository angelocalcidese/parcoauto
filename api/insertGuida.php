<?php
require_once "../../portale/cors.php";
require_once "../../portale/config.php";
require_once "utility.php";

$data = getRequestDataBody();


if(isset($data["idex"])){
    $sql1 = "UPDATE `guidatori` SET `a` = '" . $data["da"] . "',`kma` = '". $data["km"]."' WHERE `guidatori`.`id` = ". $data["idex"];

    $result1 = $conn->query($sql1);
}

$sql = "INSERT INTO `guidatori` (`id`, `veicolo`, `da`, `a`, `dipendente`, `kmda`, `kma`) 
VALUES (NULL, '" . $data["veicolo"] . "', '" . $data["da"] . "', NULL, '" . $data["dipendente"] . "', '" . $data["kmda"] . "', NULL)";

$result = $conn->query($sql);

$sql2 = "UPDATE `veicoli` SET `km` = '".$data["kmda"]."', `assegnazione` = '". $data["dipendente"]."' WHERE `veicoli`.`id` = ". $data["veicolo"];

$result2 = $conn->query($sql2);
echo $result + $result2;
