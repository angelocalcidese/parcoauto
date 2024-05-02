<?php
require_once "../../portale/cors.php";
require_once "../../portale/config.php";
require_once "../../portale/api/fileUpload.php";
require_once "utility.php";

$data = getRequestDataBody();
$type = uploadFile($data["fattura"], "../../portale/file/", $data["namefile"]);

$sql = "UPDATE `interventi` SET `fattura` = '".$data["namefile"]. "' WHERE `interventi`.`id` = " . $data["id"] . ";";
$result = $conn->query($sql);
?>