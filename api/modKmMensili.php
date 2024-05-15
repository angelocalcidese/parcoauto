<?php
require_once "../../portale/cors.php";
require_once "../../portale/config.php";
require_once "../../portale/utility.php";
require_once "../../portale/api/getUserCoockie.php";

$data = getRequestDataBody();

if($data["lastmonth"] == true){
    $sql1 = "UPDATE `veicoli` SET `km` = '" . $data["km"] . "' WHERE `veicoli`.`id` = " . $data["veicolo"];
    $result11 = $conn->query($sql1);
}

if(isset($data["id"])){
   $sql = "UPDATE `kmveicolo` SET `km` = '" . $data["km"] . "', `spesaextra` = '" . $data["spese"]. "' , `kmold` = '" . $data["kmold"] . "'WHERE `kmveicolo`.`id` = " . $data["id"];
    $result = $conn->query($sql); 
} else {
    $sql = "INSERT INTO `kmveicolo` (`id`, `veicolo`, `assegnata`, `kmold`, `km`, `spesaextra`, `mese`, `anno`) 
    VALUES (NULL, '" . $data["veicolo"] . "', '" . $data["assegnato"] . "', " . $data["kmold"] . ", '" . $data["km"] . "', '" . $data["spese"] . "', '" . $data["mounth"] . "', '" . $data["year"] . "')";
    $result = $conn->query($sql); 
}


echo $result;
