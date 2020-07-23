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


$(document).ready(function() {

    $("#continue").click(function(){

    let formData = {

        name: document.getElementById("username").value,
        password: document.getElementById("password").value,
        confirmPassword: document.getElementById("confirm-password").value
    };

    $.ajax({

        type: "POST",
        url: "http://192.168.1.16:8080/www/register.php",
        data: formData
    });

    window.location.href = "index.html";

    
    

    
})



    })



document.getElementById("username").addEventListener("ionChange", Register.enableContinue);
document.getElementById("password").addEventListener("ionChange", Register.enableContinue);
document.getElementById("confirm-password").addEventListener("ionChange", Register.enableContinue);




