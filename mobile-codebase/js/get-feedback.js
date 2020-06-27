let GetFeedback = {	


	happy: localStorage.getItem("happy"),
	apertureValue: localStorage.getItem("aperture"),
	shutterValue: localStorage.getItem("shutterSpeed"),
	isoValue: localStorage.getItem("iso"),
	exposureValue: localStorage.getItem("exposure"),

	feedbackGreeting: function() {

	let greeting = ""


	if(this.happy === "true"){

		greeting = "That's great! Here are some resources you might find useful." 
	}
	else {

		greeting = "Let's fix that!"
	}

	document.getElementById("feedback").innerText = greeting

	},


	aperture: function() {

			if(this.apertureValue < 2){

				document.getElementById("highDOF").style.display = "none"
			}
			else if(this.apertureValue == 2){
				document.getElementById("highDOF").style.display = "none"
				document.getElementById("lowDOF").style.display = "none"
			}

			else {
				document.getElementById("lowDOF").style.display = "none"
			}

	},

	shutterSpeed: function() {

			if(this.shutterValue < 2){

				document.getElementById("highSpeed").style.display = "none"
			}
			else if(this.shutterValue == 2){
				document.getElementById("lowSpeed").style.display = "none"
				document.getElementById("highSpeed").style.display = "none"
			}

			else {
				document.getElementById("lowSpeed").style.display = "none"
			}
	}, 

	iso: function() {

		   if(this.isoValue < 2){
		   		document.getElementById("highISO").style.display = "none"
		   }

	},

	exposure: function() {

			if(this.exposureValue > 0){
				document.getElementById("lowEV").style.display = "none"
				document.getElementById("perfectEV").style.display = "none"
			}
			else if(this.exposureValue == 0){
				document.getElementById("lowEV").style.display = "none"
				document.getElementById("highEV").style.display = "none"
			}
			else {
				document.getElementById("highEV").style.display = "none"
				document.getElementById("perfectEV").style.display = "none"
			}
	}



}


document.addEventListener("DOMContentLoaded", function() { GetFeedback.feedbackGreeting()}, false);
document.addEventListener("DOMContentLoaded", function() { GetFeedback.aperture()}, false);
document.addEventListener("DOMContentLoaded", function() { GetFeedback.shutterSpeed()}, false);
document.addEventListener("DOMContentLoaded", function() { GetFeedback.iso()}, false);
document.addEventListener("DOMContentLoaded", function() { GetFeedback.exposure()}, false);