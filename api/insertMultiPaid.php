<?php
require_once "../../portale/cors.php";
require_once "../../portale/config.php";
require_once "../../portale/utility.php";
require_once "../../portale/api/getUserCoockie.php";

$data = getRequestDataBody();


    $sql= "INSERT INTO `multicard_spesa` (`id`, `codice`, `mese`, `anno`, `spesa`, `company`, `tipocontratto`) 
    VALUES (NULL, '".$data["idcodice"]. "', '" . $data["mese"] . "', '" . $data["anno"] . "', 
    '" . $data["spesa"] . "', '" . $user_params->company . "', '" . $data["tipocontratto"] . "');";
    $result = $conn->query($sql);
    echo $result;

?>