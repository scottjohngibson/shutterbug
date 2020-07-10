const GiveFeedback = require("../give-feedback")

test('selectFeedback: User is happy', () => {

	document.body.innerHTML = '<div class="flexFeedback" id="yes" onclick="GiveFeedback.selectFeedback(true)">Yes</div><div class="flexFeedback" id="no" onclick="GiveFeedback.selectFeedback(false)">No</div><ion-button href="get-feedback.html" shape="round" disabled="true" fill="outline" id="continue" expand="block">Continue</ion-button>'
	GiveFeedback.selectFeedback(true);
	expect(document.getElementById("yes").style.background).toBe("rgb(110, 220, 194)")
	expect(document.getElementById("no").style.background).toBe("white")
	expect(document.getElementById("continue").disabled).toBe("false")

})

test('selectFeedback: User is unhappy', () => {

	document.body.innerHTML = '<div class="flexFeedback" id="yes" onclick="GiveFeedback.selectFeedback(true)">Yes</div><div class="flexFeedback" id="no" onclick="GiveFeedback.selectFeedback(false)">No</div><ion-button href="get-feedback.html" shape="round" disabled="true" fill="outline" id="continue" expand="block">Continue</ion-button>'
	GiveFeedback.selectFeedback(false);
	expect(document.getElementById("yes").style.background).toBe("white")
	expect(document.getElementById("no").style.background).toBe("rgb(110, 220, 194)")
	expect(document.getElementById("continue").disabled).toBe("false")
})