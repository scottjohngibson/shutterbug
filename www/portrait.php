<?php session_start() ?>

<!DOCTYPE html>
<html>
<head>
	<title>Simulation</title>


<meta content="width=device-width, initial-scale=1" name="viewport" />

<script type="module" src="https://cdn.jsdelivr.net/npm/@ionic/core/dist/ionic/ionic.esm.js"></script>
<script nomodule src="https://cdn.jsdelivr.net/npm/@ionic/core/dist/ionic/ionic.js"></script>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@ionic/core/css/ionic.bundle.css"/>
<link rel="stylesheet" href="css/style.css"/>

</head>

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

    #nav>a>p {
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

    #nav>a>p {
        display: block;
    }

    a {
        align-self: center;
        margin-right: 40px;
        font-size: 1.5em;
    }



    }
        
</style>



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
	

<h1>2) Adjust aperture settings</h1>
</div>




<div id="flexContainer">

<div id=viewBox>
	<img id="viewfinder" src="img/portrait/A3-S3-I1.jpg">
</div>





<div id="sliderBox">
	

	<p>Aperture</p>
		<div>
	<ion-range id="aperture" type="md" min="0" value="2"  max="4" step="1" snaps="true">
	</ion-range>
	<div>
	<p id="apertureView">f/5.6</p>
	</div>
		</div>

	<p>Shutter-Speed</p>
		<div>
	<ion-range id="shutterSpeed" type="md" min="0" value="2" max="4" step="1" snaps="true">
	</ion-range>
	<div>
	<p id="shutterView">1/60</p>
	</div>
		</div>

	<p>Sensitivity</p>
	<div>	
	<ion-range id="iso" type="md" min="0" max="4" step="1" snaps="true">
	</ion-range>
	<div>
	<p id="isoView">100</p>
	</div>
		</div>

</div>

</div>


<div class="wrapper" id=continuePortraitWrapper>
<ion-button href="give-feedback.php" shape="round" fill="outline" id="continue" expand="block">Continue</ion-button>
</div>


<script src="js/simulation.js"></script>
</body>
</html>