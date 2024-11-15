<?php
require_once "../../portale/cors.php";
require_once "../../portale/config.php";
require_once "../../portale/utility.php";
require_once "../../portale/api/getUserCoockie.php";

$data = getRequestDataBody();

 $sql = "UPDATE `multicard_spesa` SET `spesa` = '" . $data["spesa"] . "' WHERE `multicard_spesa`.`codice` = '" . $data["idcodice"] . "' AND `multicard_spesa`.`mese` = '" . $data["mese"] . "'
    AND `multicard_spesa`.`anno` = '" . $data["anno"] . "' AND `multicard_spesa`.`company` = '" . $user_params->company . "' AND `multicard_spesa`.`tipocontratto` = '" . $data["tipocontratto"] . "'";
    $result = $conn->query($sql);


    echo $result;

?>