<?php
$servername = "127.0.0.1:3306";
$username = "Admin";
$password = "p4ssw0rd";
$dbname = "easysw";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
//echo "Connected successfully";
?>