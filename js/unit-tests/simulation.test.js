const Simulation = require('../simulation');


test('getValue: aperture', () => {
  
	document.body.innerHTML = '<ion-range id="aperture" type="md" min="0" value="0"  max="4" step="1" snaps="true"></ion-range>'
	document.getElementById("aperture").value = 0
	Simulation.getValue(0);
    expect(localStorage.getItem("aperture")).toBe("0");
    expect(Simulation.apertureEV).toBe(2);

});

test('getValue: shutter speed', () => {
  
	document.body.innerHTML = '<ion-range id="shutterSpeed" type="md" min="0" value="2" max="4" step="1" snaps="true"></ion-range>'
	document.getElementById("shutterSpeed").value = 0
	Simulation.getValue(1);
    expect(localStorage.getItem("shutterSpeed")).toBe("0");
    expect(Simulation.shutterEV).toBe(2);

});

test('getValue: iso', () => {
  
	document.body.innerHTML = '<ion-range id="iso" type="md" min="0" max="4" step="1" snaps="true"></ion-range>'
	document.getElementById("iso").value = 0
	Simulation.getValue(2);
    expect(localStorage.getItem("iso")).toBe("0");
    expect(Simulation.isoSliderValue).toBe(0);

});

test('getValue: parameter>2', () => {

	localStorage.clear();
	Simulation.getValue(3);
	expect(localStorage.getItem("aperture")).toBe(null)
	expect(localStorage.getItem("shutterSpeed")).toBe(null)
	expect(localStorage.getItem("iso")).toBe(null)

});

test('getValue: parameter===negative', () => {

	localStorage.clear();
	Simulation.getValue(-1);
	expect(localStorage.getItem("aperture")).toBe(null)
	expect(localStorage.getItem("shutterSpeed")).toBe(null)
	expect(localStorage.getItem("iso")).toBe(null)
});

test('displayValue: aperture', () => {

	document.body.innerHTML = '<p id="apertureView">f/1.4</p>'
	Simulation.apertureSliderValue = 4
	Simulation.displayValue(0);
	expect(document.getElementById("apertureView").innerText).toBe("f/22")

});

test('displayValue: shutterSpeed', () => {

	document.body.innerHTML = '<p id="shutterView">1/60</p>'
	Simulation.shutterSliderValue = 4
	Simulation.displayValue(1);
	expect(document.getElementById("shutterView").innerText).toBe("1/1000")

});

test('displayValue: iso', () => {

	document.body.innerHTML = '<p id="isoView">100</p>'
	Simulation.isoSliderValue = 4
	Simulation.displayValue(2);
	expect(document.getElementById("isoView").innerText).toBe("25600")

});

test('displayValue: parameter>2', () => {

	document.body.innerHTML = '<p id="apertureView">f/1.4</p><p id="shutterView">1/60</p><p id="isoView">100</p>'
	Simulation.apertureSliderValue = 4
	Simulation.shutterSliderValue = 4
	Simulation.isoSliderValue = 4
	Simulation.displayValue(3);
	expect(document.getElementById("apertureView").innerText).toBe(undefined)
	expect(document.getElementById("shutterView").innerText).toBe(undefined)
	expect(document.getElementById("isoView").innerText).toBe(undefined)

});

test('displayValue: parameter===negative', () => {

	document.body.innerHTML = '<p id="apertureView">f/1.4</p><p id="shutterView">1/60</p><p id="isoView">100</p>'
	Simulation.apertureSliderValue = 4
	Simulation.shutterSliderValue = 4
	Simulation.isoSliderValue = 4
	Simulation.displayValue(-1);
	expect(document.getElementById("apertureView").innerText).toBe(undefined)
	expect(document.getElementById("shutterView").innerText).toBe(undefined)
	expect(document.getElementById("isoView").innerText).toBe(undefined)

});

test('calculateEV', () => {

	Simulation.apertureEV = 0
	Simulation.shutterEV = 0
	Simulation.isoSliderValue = 0
	Simulation.calculateEV()
	expect(localStorage.getItem("exposure")).toBe("0")
})

test('changeImg', () => {

	document.body.innerHTML = '<img id="viewfinder" src="../img/portrait/A3-S3-I1.jpg">'
	Simulation.apertureSliderValue = 0
	Simulation.shutterSliderValue = 0
	Simulation.isoSliderValue = 0
	Simulation.changeImg();
	expect(document.getElementById('viewfinder').src).toBe("http://localhost/img/portrait/A1-S1-I1.jpg")
})

test('resetValues', () => {

	Simulation.resetValues();
	expect(localStorage.getItem("aperture")).toBe("2")
	expect(localStorage.getItem("shutterSpeed")).toBe("2")
	expect(localStorage.getItem("iso")).toBe("0")
	expect(localStorage.getItem("exposure")).toBe("0")

})
