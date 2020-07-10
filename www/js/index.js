let ChooseGenre = {


	selectPortrait: function(){

	let img = document.getElementById("portrait");
	let nextPage = document.getElementById("continue");

	img.src="img/portraitOn.png";
	nextPage.disabled = "false"

	}

}

try {
module.exports = ChooseGenre
}
catch(err) {
}






