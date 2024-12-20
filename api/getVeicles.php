<?php 
require_once "../../portale/cors.php";
require_once "../../portale/config.php";
require_once "../../portale/utility.php";
require_once "../../portale/api/getUserCoockie.php";

/** GET VEICOLI */
$data = getRequestDataBody();

$sql = "SELECT * FROM `veicoli` WHERE `company` = ".$user_params ->company;

if (isset($data["stato"])) {
  $sql .= " AND `stato` = '" . $data["stato"] . "'";
}

if (isset($data["assegnatoa"])) {
  $lista = explode(",", $data["assegnatoa"]);
  for($a = 0; $a < count($lista); $a++){
    if($a == 0){
      $sql .= " AND `assegnazione` = '" . $lista[$a] . "'";
    } else {
      $sql .= " OR `assegnazione` = '" . $lista[$a] . "'";
    }
    
  }
  //$sql .= " AND `assegnazione` = '" . $data["assegnatoa"] . "'";
}

$sql .= " ORDER BY `stato`";
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
      $object->vendita = $row["vendita"];
      $object->proprieta = $row["proprieta"];
      $object->km = $row["km"];
      $object->kml = $row["kml"];
      $object->alimentazione = $row["alimentazione"];
      $object->classeinq = $row["classeinq"];
      $object->ztl = $row["ztl"];
      $object->distribuzione = $row["distribuzione"];
      $object->tagliando = $row["tagliando"];
      $object->stato = $row["stato"];
      $object->revisione = $row["revisione"];
      $object->bollo = $row["bollo"];
      $object->assicurazione = $row["assicurazione"];
      $object->multicard = $row["multicard"];
      $object->telepass = $row["telepass"];
      $object->note = $row["note"];
      $object->ultimo_tagliando = $row["ultimo_tagliando"];
      $object->ultima_distribuzione = $row["ultima_distribuzione"];
      $object->posti = $row["posti"];
      array_push($veicle, $object);
    }
  } 
  
/** GET TELEPASS */
$sql1 = "SELECT * FROM `telepass` WHERE `company` = " . $user_params->company;
$result1 = $conn->query($sql1);
$telepass = array();

if ($result1->num_rows > 0) {
    while($row = $result1->fetch_assoc()) {
        $object1 = new stdClass(); 
        $object1->id = $row["id"]; 
        $object1->codice = $row["codice"];
        $object1->stato = $row["stato"];
        $object1->tipologia = $row["tipologia"];
        $object1->seriale = $row["seriale"];
        $object1->tessera = $row["tessera"];
        $object1->attivazione = $row["attivazione"];
        $object1->validitaterritoriale = $row["validitaterritoriale"];
        array_push($telepass, $object1);
    }
  } else {
    //echo "0 results";
  }
/** GET MULTICARD */
  $sql2 = "SELECT * FROM `multicard` WHERE `company` = '" . $user_params->company. "' ORDER BY `multicard`.codice";
$result2 = $conn->query($sql2);
$multicard = array();

if ($result2->num_rows > 0) {
    while($row = $result2->fetch_assoc()) {
        $object2 = new stdClass(); 
        $object2->id = $row["id"]; 
        $object2->tipologia = $row["tipologia"];
        $object2->tipocontratto = $row["tipocontratto"];
        $object2->codice = $row["codice"]; 
        $object2->stato = $row["statocarta"];
        $object2->statocliente = $row["statocliente"];
        $object2->scadenzacarta = $row["scadenzacarta"];
        $object2->rinnovabile = $row["rinnovabile"];
        $object2->prodottiacq = $row["prodottiacq"];
        $object2->validitaterritoriale = $row["validitaterritoriale"];
        $object2->pin = $row["pin"];
        $object2->codcliente = $row["codcliente"];
        $object2->statocarta = $row["statocarta"];
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
 //print_r($obj);

$conn->close();

?>