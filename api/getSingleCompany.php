<?php
require_once "../../portale/cors.php";
require_once "../../portale/config.php";
require_once "../../portale/utility.php";

$data = getRequestDataBody();

$sql = "SELECT * FROM `company` WHERE `id` = ". $data["id"];
$result = $conn->query($sql);
$data = array();

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $object = new stdClass(); 
        $object->id = $row["id"]; 
        $object->name = $row["name"]; 
        $object->email = $row["email"]; 
        array_push($data, $object);
    }
  } 
 echo json_encode($data);

$conn->close();
?>