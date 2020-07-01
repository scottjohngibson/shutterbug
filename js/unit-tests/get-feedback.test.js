const GetFeedback = require('../get-feedback');

test('feedbackGreeting: User is happy', () => {

	document.body.innerHTML = '<h2 id="feedback"></h2>'
	GetFeedback.happy = "true"
	GetFeedback.feedbackGreeting();
	expect(document.getElementById("feedback").innerText).toBe("That's great! Here are some resources you might find useful.")
})

test('feedbackGreeting: User is unhappy', () => {

	document.body.innerHTML = '<h2 id="feedback"></h2>'
	GetFeedback.happy = "false"
	GetFeedback.feedbackGreeting();
	expect(document.getElementById("feedback").innerText).toBe("Let's try and fix that!")
})

