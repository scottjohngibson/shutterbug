let Register = {

enableContinue: function(){

if(document.getElementById("username").value != "" && document.getElementById("password").value != "" && document.getElementById("confirm-password").value != "")
{
    document.getElementById("continue").disabled = "false";
}

if(document.getElementById("username").value == "" || document.getElementById("password").value == "" || document.getElementById("confirm-password").value == "") {
    document.getElementById("continue").disabled = "true"
}

} 

}

document.getElementById("username").addEventListener("ionChange", Register.enableContinue);
document.getElementById("password").addEventListener("ionChange", Register.enableContinue);
document.getElementById("confirm-password").addEventListener("ionChange", Register.enableContinue);