<?php
require_once "../../portale/cors.php";
require_once "../../portale/config.php";
require_once "../../portale/utility.php";

$data = getRequestDataBody();
$res = array();
$sql = "SELECT * FROM `carburanti_media`";
$result = $conn->query($sql);


if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $object = new stdClass();
        $object->id = $row["id"];
        $object->day = $row["day"];
        $object->benzina = $row["benzina"];
        $object->diesel = $row["diesel"];
        $object->gpl = $row["gpl"];
        
        array_push($res, $object);
    }
}

echo json_encode($res);
//echo $sql;

$conn->close();
