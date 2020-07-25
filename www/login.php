<?php 

include 'connection.php';

$conn = openConnection();

if(isset($_POST["name"])){
$sql = "select * from user where username = '" .$_POST["name"]. "' and password = '" .$_POST["password"]. "'";
$result = $conn->query($sql);
$row = $result->fetch_assoc();

if($row == NULL){
    echo "Username or Password is incorrect.";
}

else {
    session_start();
    $_SESSION["username"] = $_POST["name"];
    echo " ";
}

closeConnection($conn);

}

header("Access-Control-Allow-Origin: *");

