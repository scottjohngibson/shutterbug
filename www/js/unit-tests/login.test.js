const Login = require("../login");

test("button is disabled when fields are empty", () => {

    document.body.innerHTML = '<ion-input id="username" inputmode="text" name="name" placeholder="Username"></ion-input> <br>        <ion-input id="password" type="password" inputmode="text" name="password" placeholder="Password"></ion-input> <br>        <ion-button disabled="true" shape="round" fill="outline" id="continue" expand="block">Sign In</ion-button>'
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
    Login.enableContinue();
    expect(document.getElementById("continue").disabled).toBe("true");

})

test("button is disabled when one field is empty", () => {

    document.body.innerHTML = '<ion-input id="username" inputmode="text" name="name" placeholder="Username"></ion-input> <br>        <ion-input id="password" type="password" inputmode="text" name="password" placeholder="Password"></ion-input> <br>        <ion-button disabled="true" shape="round" fill="outline" id="continue" expand="block">Sign In</ion-button>'
    document.getElementById("username").value = "test";
    document.getElementById("password").value = "";
    Login.enableContinue();
    expect(document.getElementById("continue").disabled).toBe("true");

})

test("button is enabled when both fields have content", () => {

    document.body.innerHTML = '<ion-input id="username" inputmode="text" name="name" placeholder="Username"></ion-input> <br>        <ion-input id="password" type="password" inputmode="text" name="password" placeholder="Password"></ion-input> <br>        <ion-button disabled="true" shape="round" fill="outline" id="continue" expand="block">Sign In</ion-button>'
    document.getElementById("username").value = "test";
    document.getElementById("password").value = "test";
    Login.enableContinue();
    expect(document.getElementById("continue").disabled).toBe("false");

})