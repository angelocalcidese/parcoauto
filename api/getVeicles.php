<?php 
require_once "../cors.php";
require_once "../config.php";

/** GET VEICOLI */
$sql = "SELECT * FROM `veicoli`";
$result = $conn->query($sql);
$veicle = array();

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $object = new stdClass(); 
        $object->id = $row["id"]; 
        $object->tipologia = $row["tipologia"]; 
        $object->marca = $row["marca"]; 
        $object->modello = $row["modello"]; 
        $object->targa = $row["targa"]; 
        $object->assegnatoa = $row["assegnazione"]; 
        $object->acquisto = $row["acquisto"]; 
        array_push($veicle, $object);
    }
  } else {
    //echo "0 results";
  }
/** GET TELEPASS */
$sql1 = "SELECT * FROM `telepass`";
$result1 = $conn->query($sql1);
$telepass = array();

if ($result1->num_rows > 0) {
    while($row = $result1->fetch_assoc()) {
        $object1 = new stdClass(); 
        $object1->id = $row["id"]; 
        $object1->codice = $row["codice"];
        $object1->veicolo = $row["veicolo"];
        $object1->stato = $row["stato"];
        array_push($telepass, $object1);
    }
  } else {
    //echo "0 results";
  }
/** GET MULTICARD */
  $sql2 = "SELECT * FROM `multicard`";
$result2 = $conn->query($sql2);
$multicard = array();

if ($result2->num_rows > 0) {
    while($row = $result2->fetch_assoc()) {
        $object2 = new stdClass(); 
        $object2->id = $row["id"]; 
        $object2->tipologia = $row["tipologia"]; 
        $object2->codice = $row["codice"]; 
        $object2->veicolo = $row["veicolo"];
        $object2->stato = $row["stato"];
        array_push($multicard, $object2);
    }
  } else {
    //echo "0 results";
  }


  /** CREO OBJECT */

  $obj = (object) array('veicoli' => $veicle, 'telepass' => $telepass, 'multicard' => $multicard);

  //print_r($data);
 //echo json_encode($veicle);
 echo json_encode($obj);

$conn->close();

?>