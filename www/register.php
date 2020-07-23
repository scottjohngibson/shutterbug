<?php 

// make in js
//session_start(); 
//if(isset($_SESSION["username"])) header("Location: http://192.168.1.16:8080/www/index.php");


include 'connection.php';

$conn = openConnection();

$userexist = "";
$pwmatch = "";
$fieldsfill = "";

if(isset($_POST["name"])){
$sql = "select * from user where username = '" .$_POST["name"]. "'";
$result = $conn->query($sql);
$row = $result->fetch_assoc();

if($row != NULL){
    $userexist = "User already exists. Please choose another username."; 
}

else {

    if($_POST["password"] != $_POST["confirmPassword"]){

        $pwmatch = "Passwords must match";
    }

    else {
        $sql = 'insert into user (username, password) values ("'.$_POST["name"].'","'.$_POST["password"].'")';
        mysqli_query($conn, $sql);

        session_start();
        $_SESSION["username"] = $_POST["name"];

    }
}

closeConnection($conn);

}


// write with ajax/js in register.js?
//if($pwmatch != "")  echo "<p class='error'>" .$pwmatch. "</p>";
 //         if($userexist != "") echo "<p class='error'>" .$userexist. "</p>";
 //         if($fieldsfill != "") echo "<p class='error'>" .$fieldsfill. "</p>";
        
    