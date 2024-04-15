<?php
require_once "../../portale/cors.php";
require_once "../../portale/config.php";
require_once "utility.php";
require_once "../../portale/api/getUserCoockie.php";

$data = getRequestDataBody();

$sql = "UPDATE `multicard` SET 
`tipologia` = '" . $data["tipologia"] . "', `codcliente` = '" . $data["codcliente"] . "', `tipocontratto` = '" . $data["tipocontratto"] . "', `statocliente` = '" . $data["statocliente"] . "', 
`statocarta` = '" . $data["statocarta"] . "', `scadenzacarta` = '" . $data["scadenzacarta"] . "', `rinnovabile` = '" . $data["rinnovabile"] . "', `prodottiacq` = '" . $data["prodottiacq"] . "', 
`validitaterritoriale` = '" . $data["validitaterritoriale"] . "', `pin` = '" . $data["pin"] . "', `codice` = '" . $data["codice"] . "'  WHERE `multicard`.`id` = " . $data["id"];
$result = $conn->query($sql);

echo $result;
