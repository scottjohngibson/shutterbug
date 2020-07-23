<?php 

// make in js
//session_start(); 
// if(isset($_SESSION["username"])) header("Location: http://192.168.1.16:8080/www/index.php");



include 'connection.php';

$conn = openConnection();

$incorrect = "";



if(isset($_POST["name"])){

$sql = "select * from user where username = '" .$_POST["name"]. "' and password = '" .$_POST["password"]. "'";


$result = $conn->query($sql);

$row = $result->fetch_assoc();

if($row == NULL){
    $incorrect = "Username or Password is incorrect.";
    header("Location: http://192.168.1.16:8080/www/login.html?");
}

else {
    session_start();
    $_SESSION["username"] = $_POST["name"];

    echo "true";
}



closeConnection($conn);

}

//if($incorrect != "")  echo "<p class='error'>" .$incorrect. "</p>";

