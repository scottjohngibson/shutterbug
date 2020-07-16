let Register = {

enableContinue: function(){

    let x = document.getElementById("username").value;
    let y = document.getElementById("password").value;
    let z = document.getElementById("confirm-password").value;

    console.log(x);
    console.log(y);
    console.log(z);

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