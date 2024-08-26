<?php
require_once "../../portale/cors.php";
require_once "../../portale/config.php";
require_once "../../portale/utility.php";
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
    
    $sql= "INSERT INTO `veicoli` (`id`, `company`, `tipologia`, `marca`, `modello`, `targa`, `acquisto`, `assegnazione`, `stato`, `proprieta`, `km`, `tagliando`, `distribuzione`, `kml`, `alimentazione`, `classeinq`, `ztl`, `bollo`, `assicurazione`, `revisione`, `vendita`, `note`, `posti`) 
    VALUES (NULL, '".$user_params ->company."', '" . $data["tipologia"] . "', '" . $data["marca"] . "', '" . $data["modello"] . "', '" . $data["targa"] . "', '" . $data["acquisto"] . "', 
    '-', '" . $data["stato"] . "', '" . $data["proprieta"] . "', '" . $data["km"] . "', '" . $data["tagliando"] . "', '" . $data["distribuzione"] . "', '" . $data["kml"] . "', '" . $data["alimentazione"] . "', '" . $data["classeinq"] . "', '" . $data["ztl"] . "', '" . $data["bollo"] . "'
, '" . $data["assicurazione"] . "', '" . $data["revisione"] . "', '" . $data["vendita"] . "', '" . $data["note"] . "', '" . $data["posti"] . "')";

    $result = $conn->query($sql);
    //echo $result;
    echo $sql;
} else {
    echo json_encode($respData);
}
?>