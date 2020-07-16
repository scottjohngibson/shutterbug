<!DOCTYPE html>
<html>
<head>
	
	<title>Register</title>

<meta name="viewport" content="width=device-width", initial-scale=1>
<script type="module" src="https://cdn.jsdelivr.net/npm/@ionic/core/dist/ionic/ionic.esm.js"></script>
<script nomodule src="https://cdn.jsdelivr.net/npm/@ionic/core/dist/ionic/ionic.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@ionic/core/css/ionic.bundle.css"/>
<link rel="stylesheet" href="css/style.css"/>

<style>

.wrapper {

    width: 80%;
}

#shutterbug {
	display: block;
	width: 50%;
    margin: 20px auto;
    margin-top: 100px;
	max-width: 514px;
}

form {

    text-align: center;
}

#register {

    padding-top: 40px;
    padding-bottom: 10px;
    padding-left: 20px; 
    color: #6EDCC2;
    font-weight: bold;
    display: block;
}

a {
    color: #6EDCC2;
    text-decoration: none;
    
}

#last {

padding-bottom: 35px;
}

.error {

color: #dc6e88;
}

</style>

</head>


<?php
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

    if($_POST["password"] != $_POST["confirm-password"]){

        $pwmatch = "Passwords must match";
    }

    else if($_POST["name"] == "" || $_POST["password"] == "" || $_POST["confirm-password"] == "") {
        $fieldsfill = "Please ensure all fields are filled";
    }

    else {
        $sql = 'insert into user (username, password) values ("'.$_POST["name"].'","'.$_POST["password"].'")';
        mysqli_query($conn, $sql);

        session_start();
        $_SESSION["username"] = $_POST["name"];

        header('Location: http://localhost:8080/www/index.php');
    }
}

closeConnection($conn);

}
?>

<body>

    
    <img src="img/shutterbug.png" id="shutterbug">

    <div class="wrapper">
    <p id="register">Register</p>
    
    <form action="?" method="post">
    
        <ion-item lines="full" mode="ios">
        <ion-input inputmode="text" name="name" placeholder="Username"></ion-input> <br>
        </ion-item>

        
        <ion-item lines="full" mode="ios">
        <ion-input type="password" inputmode="text" name="password" placeholder="Password"></ion-input> <br>
        </ion-item>

        <ion-item lines="full" id="last" mode="ios">
        <ion-input type="password" inputmode="text" name="confirm-password" placeholder="Confirm Password"></ion-input> <br>
        </ion-item>

        <ion-button type="submit" shape="round" fill="outline" id="continue" expand="block">Sign Up</ion-button>
        <span>Already have an account?</span>
        <a href="login.php">Sign In</a>
    </form>


    <?php if($pwmatch != "")  echo "<p class='error'>" .$pwmatch. "</p>";
          if($userexist != "") echo "<p class='error'>" .$userexist. "</p>";
          if($fieldsfill != "") echo "<p class='error'>" .$fieldsfill. "</p>";
        
    ?>

    </div>
</body>
</html>

