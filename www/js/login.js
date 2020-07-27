let Login = {

enableContinue: function(){

if(document.getElementById("username").value != "" && document.getElementById("password").value != "")
{
    document.getElementById("continue").disabled = "false";
}

if(document.getElementById("username").value == "" || document.getElementById("password").value == "") {
    document.getElementById("continue").disabled = "true"
}

}, 

}


document.addEventListener("DOMContentLoaded", function() {
document.getElementById("username").addEventListener("ionChange", Login.enableContinue);
document.getElementById("password").addEventListener("ionChange", Login.enableContinue);
})

try {
    module.exports = Login
    }
    catch(err) {
    }
    