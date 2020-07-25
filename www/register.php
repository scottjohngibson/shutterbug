<?php 

include 'connection.php';

$conn = openConnection();

if(isset($_POST["name"])){
$sql = "select * from user where username = '" .$_POST["name"]. "'";
$result = $conn->query($sql);
$row = $result->fetch_assoc();

if($row != NULL){
    echo "User already exists. Please choose another username.";
}

else {

    if($_POST["password"] != $_POST["confirmPassword"]){
        echo "Passwords must match";
    }

    else {
        $sql = 'insert into user (username, password) values ("'.$_POST["name"].'","'.$_POST["password"].'")';
        mysqli_query($conn, $sql);

        session_start();
        $_SESSION["username"] = $_POST["name"];
        echo " ";
    }
}

closeConnection($conn);

}

header("Access-Control-Allow-Origin: *");

