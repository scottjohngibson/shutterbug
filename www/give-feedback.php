<?php session_start() ?>

<!DOCTYPE html>
<html>
<head>
	<title>Give Feedback</title>

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

    a {
        
        color: #6EDCC2;
    }

    p {
        margin: 0;
        display: none;
    }

    @media only screen and (min-width: 1200px) {

    #nav {

        justify-content: space-between; 
    }

    #nav div {
        display: none;
    }

    #shutterbug {
        margin: 20px;
        max-width: 300px;
    }

    p {
        display: block;
    }

    a {
        align-self: center;
        margin-right: 40px;
        font-size: 1.5em;
    }



    }
        
</style>
</head>
<body>

<nav id="nav">
		<div>
		
		<?php 
		
		if(isset($_SESSION["username"])){
			echo '<a href="profile.php"><img id="user" src="img/user.png" alt=""></a>';
		}
		else { echo '<a href="login.php"><img id="user" src="img/user.png" alt=""></a>';}
		?> 
		
		
		</div>
		<img id="shutterbug" src="img/shutterbug.png">
		
		<?php 
		
		if(isset($_SESSION["username"])){
			echo '<a class="profile-text" href="profile.php"><p>Profile</p></a>';
		}
		else { echo '<a class="profile-text" href="login.php"><p>Profile</p></a>';}
		?> 
		
		
		
        </nav>
	
<div class="wrapper">



<h1>3) Give feedback</h1>
<h2 id="happy">Are you happy with your photograph?</h2>

<div id="flexContainerFeedback">
	
	<div class="flexFeedback" id="yes" onclick="GiveFeedback.selectFeedback(true)">Yes</div>
	<div class="flexFeedback" id="no" onclick="GiveFeedback.selectFeedback(false)">No</div>

</div>







<ion-button href="get-feedback.php" shape="round" disabled="true" fill="outline" id="continue" expand="block">Continue</ion-button>
</div>


<script src="js/give-feedback.js"></script>

</body>
</html>