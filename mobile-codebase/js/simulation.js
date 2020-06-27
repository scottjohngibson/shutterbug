let Simulation = {

	apertureSliderValue: 0,
	apertureArray: ["f/1.4","f/2.8","f/5.6","f/11","f/22"],
	apertureEV: 0,
	shutterSliderValue: 0,
	shutterArray: ["1/4", "1/15","1/60", "1/250","1/1000"],
	shutterEV: 0,
	isoSliderValue: 0,
	isoArray: ["100", "400", "1600", "6400", "25600"],
	exposureValue: 0,

	getValue: function(x) {
		
		if (x === 0) {this.apertureSliderValue = document.getElementById("aperture").value;
					  this.apertureEV = this.apertureSliderValue * -1
					  localStorage.setItem("aperture", this.apertureSliderValue)					  
					 }
		else if (x === 1) {this.shutterSliderValue = document.getElementById("shutterSpeed").value;
						   this.shutterEV = (this.shutterSliderValue - 2) * -1
						   localStorage.setItem("shutterSpeed", this.shutterSliderValue)	
					  	  }
		else if (x === 2) {this.isoSliderValue = document.getElementById("iso").value;
						   localStorage.setItem("iso", this.isoSliderValue)}

	},


	displayValue: function(x) {

		if(x === 0) {document.getElementById("apertureView").innerText = this.apertureArray[this.apertureSliderValue];}
		else if (x === 1) {document.getElementById("shutterView").innerText = this.shutterArray[this.shutterSliderValue];}
		else if (x === 2) {document.getElementById("isoView").innerText = this.isoArray[this.isoSliderValue];}
		
	},


	calculateEV: function() {

		this.exposureValue = this.apertureEV + this.shutterEV + this.isoSliderValue
		 localStorage.setItem("exposure", this.exposureValue)

		 console.log(this.exposureValue)

	},


	aperture: function() {

	document.getElementById("aperture").addEventListener("ionChange", function() { Simulation.getValue(0) }, false);
	document.getElementById("aperture").addEventListener("ionChange", function() { Simulation.displayValue(0) }, false);
	document.getElementById("aperture").addEventListener("ionChange", function() { Simulation.calculateEV() }, false);
	},

	shutterSpeed: function() {

	document.getElementById("shutterSpeed").addEventListener("ionChange", function() { Simulation.getValue(1) }, false);
	document.getElementById("shutterSpeed").addEventListener("ionChange", function() { Simulation.displayValue(1) }, false);
	document.getElementById("shutterSpeed").addEventListener("ionChange", function() { Simulation.calculateEV()}, false);
	},

	iso: function() {
	
	document.getElementById("iso").addEventListener("ionChange", function() { Simulation.getValue(2) }, false);
	document.getElementById("iso").addEventListener("ionChange", function() { Simulation.displayValue(2) }, false);
	document.getElementById("iso").addEventListener("ionChange", function() { Simulation.calculateEV()}, false);

	},

	resetValues: function() {

	localStorage.setItem("aperture", 0)
	localStorage.setItem("shutterSpeed", 2)
	localStorage.setItem("iso", 0)
	localStorage.setItem("exposure", 0)

	}
}

Simulation.aperture();
Simulation.shutterSpeed();
Simulation.iso();
Simulation.resetValues();
document.addEventListener("DOMContentLoaded", Simulation.resetValues, false)





