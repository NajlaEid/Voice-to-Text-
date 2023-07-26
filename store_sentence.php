<?php

$sentence = isset($_POST['sentence']) ? $_POST['sentence'] : '';


if (!empty($sentence)) {
    
    $servername = "localhost";
    $username = "username";
    $password = "password";
    $dbname = "Texts";

    $conn = new mysqli($servername, $username, $password, $dbname);

    $sql = "INSERT INTO sentences (sentence) VALUES ('$sentence')";
    
    $conn->close();
}
?>