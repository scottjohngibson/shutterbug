
$(document).ready(function() {

    
    // redirects user away from register page if they are already logged in
    $.get("http://192.168.1.16:8080/www/session.php", function(data){

    if(data != ""){

        window.location.href = "index.html";

    }

    })


    // provides error handling ()
    $("#continue").click(function(){

    let formData = {

        name: document.getElementById("username").value,
        password: document.getElementById("password").value,
        confirmPassword: document.getElementById("confirm-password").value
    };

    $("#error-message").load("http://192.168.1.16:8080/www/register.php", formData, function(data) {

        if(data == " "){window.location.href = "index.html";}

    
})

})

})




