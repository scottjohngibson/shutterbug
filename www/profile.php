<?php session_start() ?> 

<!DOCTYPE html>
<html>
<head>
	
	<title>Profile</title>

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

p {
    padding-top: 50px;
    text-align: center;
    color: #6EDCC2;
}

@media only screen and (min-width: 1200px) {

    body  {
    font-size: 2em;
}

}


</style>

</head>

<body>


    <img src="img/shutterbug.png" id="shutterbug">

    <?php echo '<p>Hello ' .$_SESSION["username"]. '!</p>'; ?> 


    <form action="logout.php" method="post">
        <ion-button name="submit" type="submit" shape="round" fill="outline" id="continue" expand="block">Sign Out</ion-button>
    </form>

    </div>




</body>
</html>