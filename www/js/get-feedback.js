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

		greeting = "Let's try and fix that!"
	}

	document.getElementById("feedback").innerText = greeting

	},


	unhappyValues: function(id, advice, url, imgPath, headline){

		const div = document.getElementById(id).children;
		div[0].innerHTML += advice;
		div[1].href = url;
		div[1].firstChild.src = imgPath;
		div[2].innerHTML = headline;

	}, 


	aperture: function() {

			if(this.apertureValue < 2){

				document.getElementById("highDOF").style.display = "none"

				if(this.happy === "false"){
					this.unhappyValues("lowDOF", " Whilst a shallow DOF can give you that great Portraiture blur, it can also lead to important details looking soft.", "https://www.onportraits.com/sharp-portrait-photos/", "img/sharp-portrait.jpg", "How to Get Sharp Portraits")
				}
				
				
			}

			else if(this.apertureValue == 2){

				document.getElementById("highDOF").style.display = "none"
				document.getElementById("lowDOF").style.display = "none"
			}

			else {
				document.getElementById("lowDOF").style.display = "none"

				if(this.happy === "false"){
					this.unhappyValues("highDOF", " A large DOF is a great way to capture those important background details, but make sure you consider whether you actuallly need to use as narrow an aperture - as this can have negative effects!", "https://photographylife.com/what-is-diffraction-in-photography", "img/diffraction.jpg", "What is Lens Diffraction?")
				}
			}

	},

	shutterSpeed: function() {

			if(this.shutterValue < 2){

				document.getElementById("highSpeed").style.display = "none"

				if(this.happy === "false"){
					this.unhappyValues("lowSpeed", " Using a slow shutter speed is a great way to convey motion, but consider whether you want the movement of your subject to be captured also.", "https://www.picturecorrect.com/tips/long-exposure-portrait-photography/", "img/long-exposure-portrait.jpg", "Long Exposure Portrait Photography")
				}
			}
			else if(this.shutterValue == 2){
				document.getElementById("lowSpeed").style.display = "none"
				document.getElementById("highSpeed").style.display = "none"
			}

			else {
				document.getElementById("lowSpeed").style.display = "none"

				if(this.happy === "false"){
					this.unhappyValues("highSpeed", " Using a fast shutter speed is a great way to freeze your subject, but that doesn't mean you have to use the quickest setting everytime.", "https://www.slrphotographyguide.com/how-to-photograph-moving-objects/", "img/peoplemoving.jpg", "How to Photograph Moving Objects")
				}
			}
	}, 

	iso: function() {

		   if(this.isoValue < 2){
		   		document.getElementById("highISO").style.display = "none"
		   }

		   if(this.happy === "false"){
					this.unhappyValues("highISO", " Noise can be a great way of adding 'grittiness' to your photographs, but this isn't always desireable. Consider whether you can use a wider aperture or a slower shutter-speed to bring your ISO down.", "https://photographypro.com/iso/", "img/iso.jpg", "Understanding ISO: How To Take Better Photos In Low Light")
				}

	},

	exposure: function() {

			if(this.exposureValue > 0){
				document.getElementById("lowEV").style.display = "none"
				document.getElementById("perfectEV").style.display = "none"

				if(this.happy === "false"){
					this.unhappyValues("highEV", " Whilst overexposing your image can be a stylistic choice e.g. high-key photography, it is often just an unintentional result of unbalanced camera settings. Remember the exposure triangle!", "https://expertphotography.com/fix-overexposed-photo/", "img/overexposed.jpg", "How to Fix an Overexposed Photo")
				}
			}
			else if(this.exposureValue == 0){
				document.getElementById("lowEV").style.display = "none"
				document.getElementById("highEV").style.display = "none"

				if(this.happy === "false"){
					this.unhappyValues("perfectEV", " If you feel that your image was actually under/overexposed, remember that the brightness of the scene itself is the final important factor that influences exposure!", "https://www.lightstalking.com/how-light-aperture-time-and-sensitivity-affect-exposure/", "img/sun.jpg", "How Light, Aperture, Time and Sensitivity Affect Exposure")

				}

			}
			else {
				document.getElementById("highEV").style.display = "none"
				document.getElementById("perfectEV").style.display = "none"

				if(this.happy === "false"){
					this.unhappyValues("lowEV", " Underexposing your image can be a great stylistic choice e.g. low-key or silhouette photography, yet it is often just an unintentional result of unbalanced camera settings. Remember the exposure triangle!", "https://www.better-digital-photo-tips.com/underexposed-photo.html", "img/underexposed.jpg", "How to Avoid an Underexposed Photo")
				}
			}
	}



}


document.addEventListener("DOMContentLoaded", function() { GetFeedback.feedbackGreeting()}, false);
document.addEventListener("DOMContentLoaded", function() { GetFeedback.aperture()}, false);
document.addEventListener("DOMContentLoaded", function() { GetFeedback.shutterSpeed()}, false);
document.addEventListener("DOMContentLoaded", function() { GetFeedback.iso()}, false);
document.addEventListener("DOMContentLoaded", function() { GetFeedback.exposure()}, false);


try {
module.exports = GetFeedback
}
catch(err) {
}




