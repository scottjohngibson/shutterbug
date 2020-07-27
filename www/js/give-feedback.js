let GiveFeedback = {

	/* stores happy value in local storage
		@param {boolean} bool - True for happy, false for unhappy
	*/
	selectFeedback: function(bool){

	localStorage.setItem("happy", bool)

	}

}

try {
module.exports = GiveFeedback
}
catch(err) {
}
