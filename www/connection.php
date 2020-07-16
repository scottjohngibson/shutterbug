<?php

function openConnection()
{

    $conn = new mysqli("localhost", "root", "", "dissertation");
    
    if($conn -> connect_error) {
        die("Connection failed: " . $conn -> connect_error);
    }

    return $conn;

}

function closeConnection($conn)
{
    $conn -> close();
}

?>