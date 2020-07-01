let GiveFeedback = {

	selectFeedback: function(bool){

	let yes = document.getElementById("yes")
	let no = document.getElementById("no")
	let nextPage = document.getElementById("continue");

	if(bool === true){
	yes.style.background = "#6EDCC2"
	no.style.background = "white";
	nextPage.disabled = "false"
	

	}

	else {
	yes.style.background = "white"
    no.style.background = "#6EDCC2"
    nextPage.disabled = "false"
     
	}

	localStorage.setItem("happy", bool)

	}


}

module.exports = GiveFeedback


