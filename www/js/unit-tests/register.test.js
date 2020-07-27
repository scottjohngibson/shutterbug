const Register = require("../register");

test("button is disabled when all fields are empty", () => {

    document.body.innerHTML = '<ion-input id="username" inputmode="text" name="name" placeholder="Username"></ion-input> <br>        <ion-input id="password" type="password" inputmode="text" name="password" placeholder="Password"></ion-input> <br><ion-input id="confirm-password" type="password" inputmode="text" name="confirm-password" placeholder="Confirm Password"></ion-input> <br><ion-button disabled="true" shape="round" fill="outline" id="continue" expand="block">Sign In</ion-button>'
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
    document.getElementById("confirm-password").value = "";
    Register.enableContinue();
    expect(document.getElementById("continue").disabled).toBe("true");

})

test("button is disabled when one field is empty", () => {

    document.body.innerHTML = '<ion-input id="username" inputmode="text" name="name" placeholder="Username"></ion-input> <br>        <ion-input id="password" type="password" inputmode="text" name="password" placeholder="Password"></ion-input> <br><ion-input id="confirm-password" type="password" inputmode="text" name="confirm-password" placeholder="Confirm Password"></ion-input> <br><ion-button disabled="true" shape="round" fill="outline" id="continue" expand="block">Sign In</ion-button>'
    document.getElementById("username").value = "test";
    document.getElementById("password").value = "test";
    document.getElementById("confirm-password").value = "";
    Register.enableContinue();
    expect(document.getElementById("continue").disabled).toBe("true");

})

test("button is enabled when no fields are empty", () => {

    document.body.innerHTML = '<ion-input id="username" inputmode="text" name="name" placeholder="Username"></ion-input> <br>        <ion-input id="password" type="password" inputmode="text" name="password" placeholder="Password"></ion-input> <br><ion-input id="confirm-password" type="password" inputmode="text" name="confirm-password" placeholder="Confirm Password"></ion-input> <br><ion-button disabled="true" shape="round" fill="outline" id="continue" expand="block">Sign In</ion-button>'
    document.getElementById("username").value = "test";
    document.getElementById("password").value = "test";
    document.getElementById("confirm-password").value = "test";
    Register.enableContinue();
    expect(document.getElementById("continue").disabled).toBe("false");

})