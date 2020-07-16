<?php 
session_start();
?>

<!DOCTYPE html>
<html>
<head>
	
	<title>ShutterBug</title>


<meta name="viewport" content="width=device-width", initial-scale=1>
<script type="module" src="https://cdn.jsdelivr.net/npm/@ionic/core/dist/ionic/ionic.esm.js"></script>
<script nomodule src="https://cdn.jsdelivr.net/npm/@ionic/core/dist/ionic/ionic.js"></script>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@ionic/core/css/ionic.bundle.css"/>
<link rel="stylesheet" href="css/style.css"/>

<style>
    #nav {
    display: flex;
    
        
    }

    #nav div {
        position: relative;
        width: 75px;
        text-align: center;
    }

    #shutterbug {
        padding-top: 6px;
    }

    #user {
        
        width: 30px;
        height: 30px;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        //transform: translateY(-5px);
    }
        
</style>

</head>
<body>


<nav id="nav">
<div>

<?php 

if(isset($_SESSION["username"])){
    echo '<a href="logout.html"><img id="user" src="img/user.png" alt=""></a>';
}
else { echo '<a href="login.php"><img id="user" src="img/user.png" alt=""></a>';}
?> 


</div>
<img id="shutterbug" src="img/shutterbug.png">
</nav>

<div class="wrapper">

<h1>1) Select a style</h1>

<div id="flexbox">

<img class=flex id="landscape" src="img/landscape.png">


<img class="flex" id="macro" src="img/macro.png">

<img class="flex" id="portrait" src="img/portrait.png" onclick="ChooseGenre.selectPortrait()">
</div>

<ion-button href="portrait.html" shape="round" fill="outline" id="continue" disabled="true" expand="block">Continue</ion-button>

</div>


<script src="js/index.js"></script>
</body>
</html>
