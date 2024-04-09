<?php 
require_once "../../portale/cors.php";
require_once "../../portale/config.php";
require_once "utility.php";
require_once "../../portale/api/getUserCoockie.php";

$data = getRequestDataBody();

$ut_sql = "SELECT * FROM `veicoli` WHERE `targa` = '".$data["targa"]."'";
    $ut_result = $conn->query($ut_sql);
   
    if ($ut_result->num_rows > 0) {
        $exist = false;
        $respData = (object) array('error' => "Targa già esistente");
    } else {
        $exist = true;
        
    }

if($exist){
    
    $sql= "INSERT INTO `veicoli` (`id`, `company`, `tipologia`, `marca`, `modello`, `targa`, `acquisto`, `assegnazione`, `stato`, `proprieta`, `km`) 
    VALUES (NULL, '".$user_params ->company."', '" . $data["tipologia"] . "', '" . $data["marca"] . "', '" . $data["modello"] . "', '" . $data["targa"] . "', '" . $data["acquisto"] . "', '-', 'Libera', '" . $data["proprieta"] . "', '" . $data["km"] . "');";

    $result = $conn->query($sql);
    echo $result;
} else {
    echo json_encode($respData);
}
?>