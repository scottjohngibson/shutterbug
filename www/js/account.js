let Login = {

enableContinue: function(){

    let x = document.getElementById("username").value;
    let y = document.getElementById("password").value;

    console.log(x);
    console.log(y);

if(document.getElementById("username").value != "" && document.getElementById("password").value != "")
{
    document.getElementById("continue").disabled = "false";
}

if(document.getElementById("username").value == "" || document.getElementById("password").value == "") {
    document.getElementById("continue").disabled = "true"
}

}, 




}

document.getElementById("username").addEventListener("ionChange", Login.enableContinue);
document.getElementById("password").addEventListener("ionChange", Login.enableContinue);