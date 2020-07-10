const ChooseGenre = require('../index');

test('img source changes', () => {
  
	document.body.innerHTML = '<img class="flex" id="portrait" src="../img/portrait.png" onclick="ChooseGenre.selectPortrait()"><ion-button href="portrait.html" shape="round" fill="outline" id="continue" disabled="true" expand="block">Continue</ion-button>'
	ChooseGenre.selectPortrait()
    expect(document.getElementById("portrait").src).toBe("http://localhost/img/portraitOn.png");

});

test('continue button unlocked', () => {
  
	document.body.innerHTML = '<img class="flex" id="portrait" src="../img/portrait.png" onclick="ChooseGenre.selectPortrait()"><ion-button href="portrait.html" shape="round" fill="outline" id="continue" disabled="true" expand="block">Continue</ion-button>'
	ChooseGenre.selectPortrait()
    expect(document.getElementById("continue").disabled).toBe("false");

});

