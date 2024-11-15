<?php 
require_once "../../portale/cors.php";
require_once "../../portale/config.php";
require_once "../../portale/utility.php";
require_once "../../portale/api/getUserCoockie.php";

/** GET VEICOLI */

$sql = "SELECT * FROM `veicoli` WHERE `company` = ".$user_params ->company. " AND `stato` = 'Attiva'  ORDER BY `targa`";

$result = $conn->query($sql);
$veicle = array();

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
      $object = new stdClass(); 
      $object->id = $row["id"]; 
      $object->targa = $row["targa"];
      $object->km = $row["km"];
      $object->assegnazione = $row["assegnazione"]; 
      array_push($veicle, $object);
    }
  } 

 echo json_encode($veicle);

$conn->close();

?>