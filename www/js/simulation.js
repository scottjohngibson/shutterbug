let Simulation = {

	apertureSliderValue: 2,
	apertureArray: ["f/1.4","f/2.8","f/5.6","f/11","f/22"],
	apertureEV: 0,
	shutterSliderValue: 2,
	shutterArray: ["1/4", "1/15","1/60", "1/250","1/1000"],
	shutterEV: 0,
	isoSliderValue: 0,
	isoArray: ["100", "400", "1600", "6400", "25600"],
	exposureValue: 0,

	/* Assigns exposure value and stores slider value in local storage
	//
	// @param {number} n - determines if "aperture", "shutter-speed", or "iso" element is chosen
	*/
	getValue: function(n) {
		
		if (n === 0) {this.apertureSliderValue = document.getElementById("aperture").value;
					  this.apertureEV = (this.apertureSliderValue - 2) * -1
					  localStorage.setItem("aperture", this.apertureSliderValue)					  
					 }
		else if (n === 1) {this.shutterSliderValue = document.getElementById("shutterSpeed").value;
						   this.shutterEV = (this.shutterSliderValue - 2) * -1
						   localStorage.setItem("shutterSpeed", this.shutterSliderValue)	
					  	  }
		else if (n === 2) {this.isoSliderValue = document.getElementById("iso").value;
						   localStorage.setItem("iso", this.isoSliderValue)}

	},


	/* Updates display of "view" element
	//
	// @param {number} n determines if "aperture", "shutter-speed", or "iso" element is chosen
	*/
	displayValue: function(n) {

		if(n === 0) {document.getElementById("apertureView").innerText = this.apertureArray[this.apertureSliderValue];}
		else if (n === 1) {document.getElementById("shutterView").innerText = this.shutterArray[this.shutterSliderValue];}
		else if (n === 2) {document.getElementById("isoView").innerText = this.isoArray[this.isoSliderValue];}
		
	},

	/* Calculates total exposure value */
	calculateEV: function() {

		this.exposureValue = this.apertureEV + this.shutterEV + this.isoSliderValue
		 localStorage.setItem("exposure", this.exposureValue)

		 console.log(this.exposureValue)

	},

	/* Assigns event listeners - "aperture" */
	aperture: function() {

	document.getElementById("aperture").addEventListener("ionChange", function() { 
	Simulation.getValue(0) 
	Simulation.displayValue(0) 
	Simulation.calculateEV() 
	Simulation.changeImg() }, false);
	},

	/* Assigns event listeners - "shutterSpeed" */
	shutterSpeed: function() {

	document.getElementById("shutterSpeed").addEventListener("ionChange", function() { 
	Simulation.getValue(1) 
	Simulation.displayValue(1) 
	Simulation.calculateEV() 			
	Simulation.changeImg() }, false);
	},

	/* Assigns event listeners - "iso" */
	iso: function() {
	
	document.getElementById("iso").addEventListener("ionChange", function() { 
	Simulation.getValue(2) 
	Simulation.displayValue(2) 
	Simulation.calculateEV() 			
	Simulation.changeImg() }, false);
	},

	/* Updates "viewfinder" image based on new settings  */
	changeImg: function() {

	document.getElementById("viewfinder").src = "img/portrait/A" + (this.apertureSliderValue+1) + "-S" + (this.shutterSliderValue+1) + "-I" + (this.isoSliderValue+1) + ".jpg"

	},

	/* Resets simulation settings to default  */
	resetValues: function() {

	localStorage.setItem("aperture", 2)
	localStorage.setItem("shutterSpeed", 2)
	localStorage.setItem("iso", 0)
	localStorage.setItem("exposure", 0)

	}
}

// calls methods when page is fully loaded
document.addEventListener("DOMContentLoaded", function() {
Simulation.aperture();
Simulation.shutterSpeed();
Simulation.iso();
Simulation.resetValues();
})


try {
module.exports = Simulation
}
catch(err) {
}




