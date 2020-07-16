<!DOCTYPE html>
<html>
<head>
	
	<title>Login</title>

<meta name="viewport" content="width=device-width", initial-scale=1>
<script type="module" src="https://cdn.jsdelivr.net/npm/@ionic/core/dist/ionic/ionic.esm.js"></script>
<script nomodule src="https://cdn.jsdelivr.net/npm/@ionic/core/dist/ionic/ionic.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@ionic/core/css/ionic.bundle.css"/>
<link rel="stylesheet" href="css/style.css"/>

<style>

#shutterbug {
	display: block;
	width: 50%;
    margin: 20px auto;
    margin-top: 100px;
	max-width: 514px;
}


.wrapper {

    width: 80%;
}

form {

text-align: center;
}

#login {

padding-top: 70px; 
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

$incorrect = "";

if(isset($_POST["name"])){

$sql = "select * from user where username = '" .$_POST["name"]. "' and password = '" .$_POST["password"]. "'";


$result = $conn->query($sql);

$row = $result->fetch_assoc();

if($row == NULL){
    $incorrect = "Username or Password is incorrect."; 
}

else {
    session_start();
    $_SESSION["username"] = $_POST["name"];
    
    header('Location: http://localhost:8080/www/index.php');

    
}

closeConnection($conn);

}
?>




<body>


    <img src="img/shutterbug.png" id="shutterbug">

    <div class="wrapper">
    <p id="login">Login</p>

    

    <form action="?" method="post">
        
        <ion-item lines="full" mode="ios">
        <ion-input inputmode="text" name="name" placeholder="Username"></ion-input> <br>
        </ion-item>

        <ion-item lines="full" id="last" mode="ios">
        <ion-input type="password" inputmode="text" name="password" placeholder="Password"></ion-input> <br>
        </ion-item>

        <ion-button type="submit" shape="round" fill="outline" id="continue" expand="block">Sign In</ion-button>
        <span>Don't have an account?</span>
        <a href="register.php">Sign Up</a>
    </form>

    <?php if($incorrect != "")  echo "<p class='error'>" .$incorrect. "</p>" ?>

    </div>


</body>
</html>

