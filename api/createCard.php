<?php 
require_once "../../portale/cors.php";
require_once "../../portale/config.php";
require_once "utility.php";
require_once "../../portale/api/getUserCoockie.php";

$data = getRequestDataBody();

$ut_sql = "SELECT * FROM `multicard` WHERE `codice` = '".$data["codice"]. "' AND `company` = '" . $user_params->company . "'";
    $ut_result = $conn->query($ut_sql);
   
    if ($ut_result->num_rows > 0) {
        $exist = false;
        $respData = (object) array('error' => "Codice già esistente");
    } else {
        $exist = true;
        
    }

if($exist){
    
    $sql= "INSERT INTO `multicard` (`id`, `company`, `tipologia`, `codcliente`, `tipocontratto`, `statocliente`, `statocarta`, `scadenzacarta`, `rinnovabile`, `prodottiacq`, `validitaterritoriale`, `pin`, `codice`) VALUES 
    (NULL, '" . $user_params->company . "', '" . $data["tipologia"] . "', '" . $data["codcliente"] . "', '" . $data["tipocontratto"] . "', '" . $data["statocliente"] . "', '" . $data["statocard"] . "', '" . $data["scadenza"] . "', '" . $data["rinnovabile"] . "', '" . $data["prodottiacq"] . "', '" . $data["validitaterritoriale"] . "', '" . $data["pincard"] . "', '" . $data["codice"] . "');";

    $result = $conn->query($sql);
    //echo $result;
    echo $sql;
} else {
    echo json_encode($respData);
}
?>