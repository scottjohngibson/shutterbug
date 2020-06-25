let GetFeedback = {	

	getFeedback: function() {

	const a = localStorage.getItem("happy")
	const b = localStorage.getItem("aperture")
	const c = localStorage.getItem("shutterSpeed")
	const d = localStorage.getItem("iso")
	const e = localStorage.getItem("exposure")


	console.log(a,b,c,d,e);


	if(a === "true"){


		document.getElementById("feedback").innerText = "Great!"


	

	}



} 


}


document.addEventListener("DOMContentLoaded", function() { GetFeedback.getFeedback()}, false);