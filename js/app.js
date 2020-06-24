function selectPortrait() {

let img = document.getElementById("portrait");
let nextPage = document.getElementById("continue");

img.src="../img/portraitOn.png";
nextPage.disabled = "false"

}








let simulation = {


	getApertureValue: function() {
		const sliderValue = document.getElementById("aperture").value;
		return sliderValue;
	},


	setApertureValue: function() {

		const sliderValue = simulation.getApertureValue();
		const apertureArray = ["f/1.4","f/2.8","f/5.6","f/11","f/22"];
		document.getElementById("apertureView").innerText = apertureArray[sliderValue];

	},


	getShutterValue: function() {
		const sliderValue = document.getElementById("shutterSpeed").value;
		return sliderValue;
	},

	setShutterValue: function() {
		//console.log(simulation.getShutterValue())
		const sliderValue = simulation.getShutterValue();
		const shutterArray = ["1/4", "1/15","1/60", "1/250","1/1000"];
		document.getElementById("shutterView").innerText = shutterArray[sliderValue];

	},

	getISOValue: function() {

		const sliderValue = document.getElementById("iso").value;
		return sliderValue
	},

	setISOValue: function() {

		const sliderValue = simulation.getISOValue();
		const isoArray = ["100", "400", "1600", "6400", "25600"];
		document.getElementById("isoView").innerText = isoArray[sliderValue];


		
	}


}


document.getElementById("aperture").addEventListener("ionChange", simulation.getApertureValue, false);
document.getElementById("aperture").addEventListener("ionChange", simulation.setApertureValue, false);


document.getElementById("shutterSpeed").addEventListener("ionChange", simulation.getShutterValue, false);
document.getElementById("shutterSpeed").addEventListener("ionChange", simulation.setShutterValue, false);

document.getElementById("iso").addEventListener("ionChange", simulation.getISOValue, false);
document.getElementById("iso").addEventListener("ionChange", simulation.setISOValue, false);





function selectFeedback(){

let yes = document.getElementById("yes")
let nextPage = document.getElementById("continue");

yes.style.background = "#6EDCC2"
nextPage.disabled = "false"

}



let feedback = {





selectFeedback: function(){

let nextPage = document.getElementById("continue");

nextPage.disabled = "false"

}




}