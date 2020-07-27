const GiveFeedback = require("../give-feedback")

test('selectFeedback: User is happy', () => {

	GiveFeedback.selectFeedback(true);
	expect(localStorage.getItem("happy")).toBe("true");

})

test('selectFeedback: User is unhappy', () => {

	GiveFeedback.selectFeedback(false);
	expect(localStorage.getItem("happy")).toBe("false");
})