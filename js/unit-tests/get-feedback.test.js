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

test('unhappyValues: Empty attributes', () => {

	document.body.innerHTML = '<div id="test"><p></p><a href="" target="_blank"><img src=""></a><p class="headline"></p></div>'
	GetFeedback.unhappyValues("test", "Test Concatenation", "http://test.com/", "test/test.jpg", "Test Headline");
	const test = document.getElementById("test").children;
	expect(test[0].innerHTML).toBe("Test Concatenation");
	expect(test[1].href).toBe("http://test.com/");
	expect(test[1].firstChild.src).toBe("http://localhost/test/test.jpg");
	expect(test[2].innerHTML).toBe("Test Headline")

})

test('unhappyValues: Existing attributes', () => {

	document.body.innerHTML = '<div id="test"><p>This attribute already has content.</p><a href="http://existingContent.com" target="_blank"><img src="test/existingContent.jpg"></a><p class="headline">This is an existing headline.</p></div>'
	GetFeedback.unhappyValues("test", " Test Concatenation", "http://test.com/", "test/test.jpg", "Test Headline");
	const test = document.getElementById("test").children;
	expect(test[0].innerHTML).toBe("This attribute already has content. Test Concatenation");
	expect(test[1].href).toBe("http://test.com/");
	expect(test[1].firstChild.src).toBe("http://localhost/test/test.jpg");
	expect(test[2].innerHTML).toBe("Test Headline")

})

test('aperture: Value less than 2 (User is happy)', () => {

	document.body.innerHTML = '<div id="lowDOF"><p>You used a <strong>wide aperture</strong>, giving your photograph a <strong>shallow depth of field</strong>.</p><a href="https://www.nikonusa.com/en/learn-and-explore/a/tips-and-techniques/bokeh-for-beginners.html" target="_blank"><img src="../img/bokeh.jpg"></a><p class="headline">Bokeh for Beginners</p><br</div><div id="highDOF"><p>You used a <strong>narrow aperture</strong>, giving your photograph a <strong>large depth of field</strong>.</p><a href="https://www.thephoblographer.com/2015/01/21/elizabeth-gaad-combines-landscapes-portraiture/" target="_blank"><img src="../img/landscape-portraiture.jpg"></a><p class="headline">Elizabeth Gaad Combines Lanscapes and Portraiture</p><br></div>'
	GetFeedback.apertureValue = 0;
	GetFeedback.happy = "true";
	GetFeedback.aperture();
	const test = document.getElementById("lowDOF").children;
	expect(test[0].innerHTML).toBe("You used a <strong>wide aperture</strong>, giving your photograph a <strong>shallow depth of field</strong>.");
	expect(test[1].href).toBe("https://www.nikonusa.com/en/learn-and-explore/a/tips-and-techniques/bokeh-for-beginners.html");
	expect(test[1].firstChild.src).toBe("http://localhost/img/bokeh.jpg");
	expect(test[2].innerHTML).toBe("Bokeh for Beginners")
	expect(document.getElementById('highDOF').style.display).toBe("none")

})

test('aperture: Value less than 2 (User is unhappy)', () => {

	document.body.innerHTML = '<div id="lowDOF"><p>You used a <strong>wide aperture</strong>, giving your photograph a <strong>shallow depth of field</strong>.</p><a href="https://www.nikonusa.com/en/learn-and-explore/a/tips-and-techniques/bokeh-for-beginners.html" target="_blank"><img src="../img/bokeh.jpg"></a><p class="headline">Bokeh for Beginners</p><br</div><div id="highDOF"><p>You used a <strong>narrow aperture</strong>, giving your photograph a <strong>large depth of field</strong>.</p><a href="https://www.thephoblographer.com/2015/01/21/elizabeth-gaad-combines-landscapes-portraiture/" target="_blank"><img src="../img/landscape-portraiture.jpg"></a><p class="headline">Elizabeth Gaad Combines Lanscapes and Portraiture</p><br></div>'
	GetFeedback.apertureValue = 0;
	GetFeedback.happy = "false";
	GetFeedback.aperture();
	const test = document.getElementById("lowDOF").children;
	expect(test[0].innerHTML).toBe("You used a <strong>wide aperture</strong>, giving your photograph a <strong>shallow depth of field</strong>. Whilst a shallow DOF can give you that great Portraiture blur, it can also lead to important details looking soft.");
	expect(test[1].href).toBe("https://www.onportraits.com/sharp-portrait-photos/");
	expect(test[1].firstChild.src).toBe("http://localhost/img/sharp-portrait.jpg");
	expect(test[2].innerHTML).toBe("How to Get Sharp Portraits")
	expect(document.getElementById('highDOF').style.display).toBe("none")

})

test('aperture: Value === 2', () => {

	document.body.innerHTML = '<div id="lowDOF"><p>You used a <strong>wide aperture</strong>, giving your photograph a <strong>shallow depth of field</strong>.</p><a href="https://www.nikonusa.com/en/learn-and-explore/a/tips-and-techniques/bokeh-for-beginners.html" target="_blank"><img src="../img/bokeh.jpg"></a><p class="headline">Bokeh for Beginners</p><br</div><div id="highDOF"><p>You used a <strong>narrow aperture</strong>, giving your photograph a <strong>large depth of field</strong>.</p><a href="https://www.thephoblographer.com/2015/01/21/elizabeth-gaad-combines-landscapes-portraiture/" target="_blank"><img src="../img/landscape-portraiture.jpg"></a><p class="headline">Elizabeth Gaad Combines Lanscapes and Portraiture</p><br></div>'
	GetFeedback.apertureValue = 2;
	GetFeedback.aperture();
	expect(document.getElementById('lowDOF').style.display).toBe("none")
	expect(document.getElementById('highDOF').style.display).toBe("none")

})

test('aperture: Value more than 2 (User is happy)', () => {

	document.body.innerHTML = '<div id="lowDOF"><p>You used a <strong>wide aperture</strong>, giving your photograph a <strong>shallow depth of field</strong>.</p><a href="https://www.nikonusa.com/en/learn-and-explore/a/tips-and-techniques/bokeh-for-beginners.html" target="_blank"><img src="../img/bokeh.jpg"></a><p class="headline">Bokeh for Beginners</p><br</div><div id="highDOF"><p>You used a <strong>narrow aperture</strong>, giving your photograph a <strong>large depth of field</strong>.</p><a href="https://www.thephoblographer.com/2015/01/21/elizabeth-gaad-combines-landscapes-portraiture/" target="_blank"><img src="../img/landscape-portraiture.jpg"></a><p class="headline">Elizabeth Gaad Combines Lanscapes and Portraiture</p><br></div>'
	GetFeedback.apertureValue = 4;
	GetFeedback.happy = "true";
	GetFeedback.aperture();
	const test = document.getElementById("highDOF").children;
	expect(test[0].innerHTML).toBe("You used a <strong>narrow aperture</strong>, giving your photograph a <strong>large depth of field</strong>.");
	expect(test[1].href).toBe("https://www.thephoblographer.com/2015/01/21/elizabeth-gaad-combines-landscapes-portraiture/");
	expect(test[1].firstChild.src).toBe("http://localhost/img/landscape-portraiture.jpg");
	expect(test[2].innerHTML).toBe("Elizabeth Gaad Combines Lanscapes and Portraiture")
	expect(document.getElementById('lowDOF').style.display).toBe("none")

})

test('aperture: Value more than 2 (User is unhappy)', () => {

	document.body.innerHTML = '<div id="lowDOF"><p>You used a <strong>wide aperture</strong>, giving your photograph a <strong>shallow depth of field</strong>.</p><a href="https://www.nikonusa.com/en/learn-and-explore/a/tips-and-techniques/bokeh-for-beginners.html" target="_blank"><img src="../img/bokeh.jpg"></a><p class="headline">Bokeh for Beginners</p><br</div><div id="highDOF"><p>You used a <strong>narrow aperture</strong>, giving your photograph a <strong>large depth of field</strong>.</p><a href="https://www.thephoblographer.com/2015/01/21/elizabeth-gaad-combines-landscapes-portraiture/" target="_blank"><img src="../img/landscape-portraiture.jpg"></a><p class="headline">Elizabeth Gaad Combines Lanscapes and Portraiture</p><br></div>'
	GetFeedback.apertureValue = 4;
	GetFeedback.happy = "false";
	GetFeedback.aperture();
	const test = document.getElementById("highDOF").children;
	expect(test[0].innerHTML).toBe("You used a <strong>narrow aperture</strong>, giving your photograph a <strong>large depth of field</strong>. A large DOF is a great way to capture those important background details, but make sure you consider whether you actuallly need to use as narrow an aperture - as this can have negative effects!");
	expect(test[1].href).toBe("https://photographylife.com/what-is-diffraction-in-photography");
	expect(test[1].firstChild.src).toBe("http://localhost/img/diffraction.jpg");
	expect(test[2].innerHTML).toBe("What is Lens Diffraction?")
	expect(document.getElementById('lowDOF').style.display).toBe("none")

})

test('shutterSpeed: Value less than 2 (User is happy)', () => {

	document.body.innerHTML = '<div id="lowSpeed"><p>You used a <strong>slow shutter-speed</strong>, giving your photograph a <strong>long exposure effect</strong>.</p><a href="https://www.picturecorrect.com/tips/capturing-motion-with-slow-shutter-speeds/" target="_blank"><img src="../img/slow-shutter.jpg"></a><p class="headline">Capturing Motion with Slow Shutter Speeds</p><br></div><div id="highSpeed"><p>You used a <strong>fast shutter-speed</strong>, giving your photograph a <strong>frozen effect</strong>.</p><a href="https://www.dpmag.com/how-to/shooting/high-speed-portraits/" target="_blank"><img src="../img/high-speed.jpg"></a><p class="headline">High-Speed Portraits</p><br></div>'
	GetFeedback.shutterValue = 0;
	GetFeedback.happy = "true";
	GetFeedback.shutterSpeed();
	const test = document.getElementById("lowSpeed").children;
	expect(test[0].innerHTML).toBe("You used a <strong>slow shutter-speed</strong>, giving your photograph a <strong>long exposure effect</strong>.");
	expect(test[1].href).toBe("https://www.picturecorrect.com/tips/capturing-motion-with-slow-shutter-speeds/");
	expect(test[1].firstChild.src).toBe("http://localhost/img/slow-shutter.jpg");
	expect(test[2].innerHTML).toBe("Capturing Motion with Slow Shutter Speeds")
	expect(document.getElementById('highSpeed').style.display).toBe("none")

})

test('shutterSpeed: Value less than 2 (User is unhappy)', () => {

	document.body.innerHTML = '<div id="lowSpeed"><p>You used a <strong>slow shutter-speed</strong>, giving your photograph a <strong>long exposure effect</strong>.</p><a href="https://www.picturecorrect.com/tips/capturing-motion-with-slow-shutter-speeds/" target="_blank"><img src="../img/slow-shutter.jpg"></a><p class="headline">Capturing Motion with Slow Shutter Speeds</p><br></div><div id="highSpeed"><p>You used a <strong>fast shutter-speed</strong>, giving your photograph a <strong>frozen effect</strong>.</p><a href="https://www.dpmag.com/how-to/shooting/high-speed-portraits/" target="_blank"><img src="../img/high-speed.jpg"></a><p class="headline">High-Speed Portraits</p><br></div>'
	GetFeedback.shutterValue = 0;
	GetFeedback.happy = "false";
	GetFeedback.shutterSpeed();
	const test = document.getElementById("lowSpeed").children;
	expect(test[0].innerHTML).toBe("You used a <strong>slow shutter-speed</strong>, giving your photograph a <strong>long exposure effect</strong>. Using a slow shutter speed is a great way to convey motion, but consider whether you want the movement of your subject to be captured also.");
	expect(test[1].href).toBe("https://www.picturecorrect.com/tips/long-exposure-portrait-photography/");
	expect(test[1].firstChild.src).toBe("http://localhost/img/long-exposure-portrait.jpg");
	expect(test[2].innerHTML).toBe("Long Exposure Portrait Photography")
	expect(document.getElementById('highSpeed').style.display).toBe("none")

})

test('shutterSpeed: Value less === 2', () => {

	document.body.innerHTML = '<div id="lowSpeed"><p>You used a <strong>slow shutter-speed</strong>, giving your photograph a <strong>long exposure effect</strong>.</p><a href="https://www.picturecorrect.com/tips/capturing-motion-with-slow-shutter-speeds/" target="_blank"><img src="../img/slow-shutter.jpg"></a><p class="headline">Capturing Motion with Slow Shutter Speeds</p><br></div><div id="highSpeed"><p>You used a <strong>fast shutter-speed</strong>, giving your photograph a <strong>frozen effect</strong>.</p><a href="https://www.dpmag.com/how-to/shooting/high-speed-portraits/" target="_blank"><img src="../img/high-speed.jpg"></a><p class="headline">High-Speed Portraits</p><br></div>'
	GetFeedback.shutterValue = 2;
	GetFeedback.shutterSpeed();
	expect(document.getElementById('lowSpeed').style.display).toBe("none")
	expect(document.getElementById('highSpeed').style.display).toBe("none")

})

test('shutterSpeed: Value more than 2 (User is happy)', () => {

	document.body.innerHTML = '<div id="lowSpeed"><p>You used a <strong>slow shutter-speed</strong>, giving your photograph a <strong>long exposure effect</strong>.</p><a href="https://www.picturecorrect.com/tips/capturing-motion-with-slow-shutter-speeds/" target="_blank"><img src="../img/slow-shutter.jpg"></a><p class="headline">Capturing Motion with Slow Shutter Speeds</p><br></div><div id="highSpeed"><p>You used a <strong>fast shutter-speed</strong>, giving your photograph a <strong>frozen effect</strong>.</p><a href="https://www.dpmag.com/how-to/shooting/high-speed-portraits/" target="_blank"><img src="../img/high-speed.jpg"></a><p class="headline">High-Speed Portraits</p><br></div>'
	GetFeedback.shutterValue = 4;
	GetFeedback.happy = "true";
	GetFeedback.shutterSpeed();
	const test = document.getElementById("highSpeed").children;
	expect(test[0].innerHTML).toBe("You used a <strong>fast shutter-speed</strong>, giving your photograph a <strong>frozen effect</strong>.");
	expect(test[1].href).toBe("https://www.dpmag.com/how-to/shooting/high-speed-portraits/");
	expect(test[1].firstChild.src).toBe("http://localhost/img/high-speed.jpg");
	expect(test[2].innerHTML).toBe("High-Speed Portraits")
	expect(document.getElementById('lowSpeed').style.display).toBe("none")

})

test('shutterSpeed: Value more than 2 (User is unhappy)', () => {

	document.body.innerHTML = '<div id="lowSpeed"><p>You used a <strong>slow shutter-speed</strong>, giving your photograph a <strong>long exposure effect</strong>.</p><a href="https://www.picturecorrect.com/tips/capturing-motion-with-slow-shutter-speeds/" target="_blank"><img src="../img/slow-shutter.jpg"></a><p class="headline">Capturing Motion with Slow Shutter Speeds</p><br></div><div id="highSpeed"><p>You used a <strong>fast shutter-speed</strong>, giving your photograph a <strong>frozen effect</strong>.</p><a href="https://www.dpmag.com/how-to/shooting/high-speed-portraits/" target="_blank"><img src="../img/high-speed.jpg"></a><p class="headline">High-Speed Portraits</p><br></div>'
	GetFeedback.shutterValue = 4;
	GetFeedback.happy = "false";
	GetFeedback.shutterSpeed();
	const test = document.getElementById("highSpeed").children;
	expect(test[0].innerHTML).toBe("You used a <strong>fast shutter-speed</strong>, giving your photograph a <strong>frozen effect</strong>. Using a fast shutter speed is a great way to freeze your subject, but that doesn't mean you have to use the quickest setting everytime.");
	expect(test[1].href).toBe("https://www.slrphotographyguide.com/how-to-photograph-moving-objects/");
	expect(test[1].firstChild.src).toBe("http://localhost/img/peoplemoving.jpg");
	expect(test[2].innerHTML).toBe("How to Photograph Moving Objects")
	expect(document.getElementById('lowSpeed').style.display).toBe("none")

})

test('iso: Value less than 2', () => {

	document.body.innerHTML = '<div id="highISO"><p>You used a <strong>high ISO value</strong> - this introduced <strong>noise</strong> to your photograph.</p><a href="https://digital-photography-school.com/reasons-why-shoot-high-iso/" target="_blank"><img src="../img/high-iso.jpg"></a><p class="headline">Get Better Images at High ISO</p><br></div>'
	GetFeedback.shutterValue = 0;
	GetFeedback.iso();
	expect(document.getElementById('highISO').style.display).toBe("none")

})

test('iso: Value more than 2 (User is happy', () => {

	document.body.innerHTML = '<div id="highISO"><p>You used a <strong>high ISO value</strong> - this introduced <strong>noise</strong> to your photograph.</p><a href="https://digital-photography-school.com/reasons-why-shoot-high-iso/" target="_blank"><img src="../img/high-iso.jpg"></a><p class="headline">Get Better Images at High ISO</p><br></div>'
	GetFeedback.shutterValue = 4;
	GetFeedback.happy = "true";
	GetFeedback.iso();
	const test = document.getElementById("highISO").children;
	expect(test[0].innerHTML).toBe("You used a <strong>high ISO value</strong> - this introduced <strong>noise</strong> to your photograph.");
	expect(test[1].href).toBe("https://digital-photography-school.com/reasons-why-shoot-high-iso/");
	expect(test[1].firstChild.src).toBe("http://localhost/img/high-iso.jpg");
	expect(test[2].innerHTML).toBe("Get Better Images at High ISO")
	
})


test('iso: Value more than 2 (User is unhappy', () => {

	document.body.innerHTML = '<div id="highISO"><p>You used a <strong>high ISO value</strong> - this introduced <strong>noise</strong> to your photograph.</p><a href="https://digital-photography-school.com/reasons-why-shoot-high-iso/" target="_blank"><img src="../img/high-iso.jpg"></a><p class="headline">Get Better Images at High ISO</p><br></div>'
	GetFeedback.shutterValue = 4;
	GetFeedback.happy = "false";
	GetFeedback.iso();
	const test = document.getElementById("highISO").children;
	expect(test[0].innerHTML).toBe("You used a <strong>high ISO value</strong> - this introduced <strong>noise</strong> to your photograph. Noise can be a great way of adding 'grittiness' to your photographs, but this isn't always desireable. Consider whether you can use a wider aperture or a slower shutter-speed to bring your ISO down.");
	expect(test[1].href).toBe("https://photographypro.com/iso/");
	expect(test[1].firstChild.src).toBe("http://localhost/img/iso.jpg");
	expect(test[2].innerHTML).toBe("Understanding ISO: How To Take Better Photos In Low Light")
	
})

test('exposure: Negative value (User is happy', () => {

	document.body.innerHTML = '<div id="highEV"><p>Your photograph was <strong>overexposed</strong>.</p><a href="https://bdmpublications.com/understanding-high-key-portraiture/" target="_blank"><img src="../img/high-key.jpg"></a><p class="headline">Understanding High-Key Portraiture</p><br></div><div id="perfectEV"><p>Your photograph was <strong>perfectly exposed</strong>.</p><a href="https://clickitupanotch.com/photography-exposure-tips/" target="_blank"><img src="../img/perfect-exposure.jpg"></a><p class="headline">3 Steps for Perfect Exposure</p><br></div><div id="lowEV"><p>Your photograph was <strong>underexposed</strong>.</p><a href="https://www.format.com/magazine/resources/photography/silhouette-photography" target="_blank"><img src="../img/silhouette.jpg"></a><p class="headline">Silhouette Photography 101</p><br></div>'
	GetFeedback.exposureValue = -6;
	GetFeedback.happy = "true";
	GetFeedback.exposure();
	const test = document.getElementById("lowEV").children;
	expect(test[0].innerHTML).toBe("Your photograph was <strong>underexposed</strong>.");
	expect(test[1].href).toBe("https://www.format.com/magazine/resources/photography/silhouette-photography");
	expect(test[1].firstChild.src).toBe("http://localhost/img/silhouette.jpg");
	expect(test[2].innerHTML).toBe("Silhouette Photography 101")
	expect(document.getElementById('highEV').style.display).toBe("none")
	expect(document.getElementById('perfectEV').style.display).toBe("none")
	
})

test('exposure: Negative value (User is unhappy', () => {

	document.body.innerHTML = '<div id="highEV"><p>Your photograph was <strong>overexposed</strong>.</p><a href="https://bdmpublications.com/understanding-high-key-portraiture/" target="_blank"><img src="../img/high-key.jpg"></a><p class="headline">Understanding High-Key Portraiture</p><br></div><div id="perfectEV"><p>Your photograph was <strong>perfectly exposed</strong>.</p><a href="https://clickitupanotch.com/photography-exposure-tips/" target="_blank"><img src="../img/perfect-exposure.jpg"></a><p class="headline">3 Steps for Perfect Exposure</p><br></div><div id="lowEV"><p>Your photograph was <strong>underexposed</strong>.</p><a href="https://www.format.com/magazine/resources/photography/silhouette-photography" target="_blank"><img src="../img/silhouette.jpg"></a><p class="headline">Silhouette Photography 101</p><br></div>'
	GetFeedback.exposureValue = -6;
	GetFeedback.happy = "false";
	GetFeedback.exposure();
	const test = document.getElementById("lowEV").children;
	expect(test[0].innerHTML).toBe("Your photograph was <strong>underexposed</strong>. Underexposing your image can be a great stylistic choice e.g. low-key or silhouette photography, yet it is often just an unintentional result of unbalanced camera settings. Remember the exposure triangle!");
	expect(test[1].href).toBe("https://www.better-digital-photo-tips.com/underexposed-photo.html");
	expect(test[1].firstChild.src).toBe("http://localhost/img/underexposed.jpg");
	expect(test[2].innerHTML).toBe("How to Avoid an Underexposed Photo")
	expect(document.getElementById('highEV').style.display).toBe("none")
	expect(document.getElementById('perfectEV').style.display).toBe("none")
	
})

test('exposure: Perfect value (User is happy', () => {

	document.body.innerHTML = '<div id="highEV"><p>Your photograph was <strong>overexposed</strong>.</p><a href="https://bdmpublications.com/understanding-high-key-portraiture/" target="_blank"><img src="../img/high-key.jpg"></a><p class="headline">Understanding High-Key Portraiture</p><br></div><div id="perfectEV"><p>Your photograph was <strong>perfectly exposed</strong>.</p><a href="https://clickitupanotch.com/photography-exposure-tips/" target="_blank"><img src="../img/perfect-exposure.jpg"></a><p class="headline">3 Steps for Perfect Exposure</p><br></div><div id="lowEV"><p>Your photograph was <strong>underexposed</strong>.</p><a href="https://www.format.com/magazine/resources/photography/silhouette-photography" target="_blank"><img src="../img/silhouette.jpg"></a><p class="headline">Silhouette Photography 101</p><br></div>'
	GetFeedback.exposureValue = 0;
	GetFeedback.happy = "true";
	GetFeedback.exposure();
	expect(document.getElementById('highEV').style.display).toBe("none")
	expect(document.getElementById('lowEV').style.display).toBe("none")

	
})

test('exposure: Perfect value (User is unhappy', () => {

	document.body.innerHTML = '<div id="highEV"><p>Your photograph was <strong>overexposed</strong>.</p><a href="https://bdmpublications.com/understanding-high-key-portraiture/" target="_blank"><img src="../img/high-key.jpg"></a><p class="headline">Understanding High-Key Portraiture</p><br></div><div id="perfectEV"><p>Your photograph was <strong>perfectly exposed</strong>.</p><a href="https://clickitupanotch.com/photography-exposure-tips/" target="_blank"><img src="../img/perfect-exposure.jpg"></a><p class="headline">3 Steps for Perfect Exposure</p><br></div><div id="lowEV"><p>Your photograph was <strong>underexposed</strong>.</p><a href="https://www.format.com/magazine/resources/photography/silhouette-photography" target="_blank"><img src="../img/silhouette.jpg"></a><p class="headline">Silhouette Photography 101</p><br></div>'
	GetFeedback.exposureValue = 0;
	GetFeedback.happy = "false";
	GetFeedback.exposure();
	expect(document.getElementById('highEV').style.display).toBe("none")
	expect(document.getElementById('lowEV').style.display).toBe("none")
	expect(document.getElementById('perfectEV').style.display).toBe("none")

})

test('exposure: positive value (User is happy', () => {

	document.body.innerHTML = '<div id="highEV"><p>Your photograph was <strong>overexposed</strong>.</p><a href="https://bdmpublications.com/understanding-high-key-portraiture/" target="_blank"><img src="../img/high-key.jpg"></a><p class="headline">Understanding High-Key Portraiture</p><br></div><div id="perfectEV"><p>Your photograph was <strong>perfectly exposed</strong>.</p><a href="https://clickitupanotch.com/photography-exposure-tips/" target="_blank"><img src="../img/perfect-exposure.jpg"></a><p class="headline">3 Steps for Perfect Exposure</p><br></div><div id="lowEV"><p>Your photograph was <strong>underexposed</strong>.</p><a href="https://www.format.com/magazine/resources/photography/silhouette-photography" target="_blank"><img src="../img/silhouette.jpg"></a><p class="headline">Silhouette Photography 101</p><br></div>'
	GetFeedback.exposureValue = 6;
	GetFeedback.happy = "true";
	GetFeedback.exposure();
	const test = document.getElementById("highEV").children;
	expect(test[0].innerHTML).toBe("Your photograph was <strong>overexposed</strong>.");
	expect(test[1].href).toBe("https://bdmpublications.com/understanding-high-key-portraiture/");
	expect(test[1].firstChild.src).toBe("http://localhost/img/high-key.jpg");
	expect(test[2].innerHTML).toBe("Understanding High-Key Portraiture")
	expect(document.getElementById('lowEV').style.display).toBe("none")
	expect(document.getElementById('perfectEV').style.display).toBe("none")
	
})


test('exposure: positive value (User is unhappy', () => {

	document.body.innerHTML = '<div id="highEV"><p>Your photograph was <strong>overexposed</strong>.</p><a href="https://bdmpublications.com/understanding-high-key-portraiture/" target="_blank"><img src="../img/high-key.jpg"></a><p class="headline">Understanding High-Key Portraiture</p><br></div><div id="perfectEV"><p>Your photograph was <strong>perfectly exposed</strong>.</p><a href="https://clickitupanotch.com/photography-exposure-tips/" target="_blank"><img src="../img/perfect-exposure.jpg"></a><p class="headline">3 Steps for Perfect Exposure</p><br></div><div id="lowEV"><p>Your photograph was <strong>underexposed</strong>.</p><a href="https://www.format.com/magazine/resources/photography/silhouette-photography" target="_blank"><img src="../img/silhouette.jpg"></a><p class="headline">Silhouette Photography 101</p><br></div>'
	GetFeedback.exposureValue = 6;
	GetFeedback.happy = "false";
	GetFeedback.exposure();
	const test = document.getElementById("highEV").children;
	expect(test[0].innerHTML).toBe("Your photograph was <strong>overexposed</strong>. Whilst overexposing your image can be a stylistic choice e.g. high-key photography, it is often just an unintentional result of unbalanced camera settings. Remember the exposure triangle!");
	expect(test[1].href).toBe("https://expertphotography.com/fix-overexposed-photo/");
	expect(test[1].firstChild.src).toBe("http://localhost/img/overexposed.jpg");
	expect(test[2].innerHTML).toBe("How to Fix an Overexposed Photo")
	expect(document.getElementById('lowEV').style.display).toBe("none")
	expect(document.getElementById('perfectEV').style.display).toBe("none")
	
})
