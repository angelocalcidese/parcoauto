<?php 
require_once "../../portale/cors.php";
require_once "../../portale/config.php";
require_once "utility.php";
require_once "../../portale/api/getUserCoockie.php";

$data = getRequestDataBody();

$ut_sql = "SELECT * FROM `telepass` WHERE `codice` = '".$data["codice"]. "' AND `company` = '" . $user_params->company . "'";
    $ut_result = $conn->query($ut_sql);
   
    if ($ut_result->num_rows > 0) {
        $exist = false;
        $respData = (object) array('error' => "Codice già esistente");
    } else {
        $exist = true;
    }

if($exist){
    $sql= "INSERT INTO `telepass` (`id`, `company`, `tipologia`, `codice`, `stato`, `validitaterritoriale`, `seriale`, `attivazione`) VALUES 
    (NULL, '" . $user_params->company . "', '" . $data["tipologia"] . "', '" . $data["codice"] . "', '" . $data["stato"] . "', '" . $data["validitaterritoriale"] . "', '" . $data["seriale"] . "', '" . $data["attivazione"] . "');";

    $result = $conn->query($sql);
    echo $result;
} else {
    echo json_encode($respData);
}
?>