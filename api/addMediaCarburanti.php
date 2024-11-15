<?php
require_once "../../portale/cors.php";
require_once "../../portale/config.php";
require_once "../../portale/utility.php";
require_once "../../portale/api/getUserCoockie.php";

$data = getRequestDataBody();

$sql = "INSERT INTO `carburanti_media` (`id`, `day`, `benzina`, `diesel`, `gpl`) VALUES (NULL, '".$data["day"]. "', '" . $data["benzina"] . "', '" . $data["diesel"] . "', '" . $data["gpl"] . "')";
$result = $conn->query($sql);

echo $result;
?>