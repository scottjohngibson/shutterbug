
$(document).ready(function() {

    $("#continue").click(function(){

    let formData = {

        name: document.getElementById("username").value,
        password: document.getElementById("password").value,
    };

    $.ajax({

        type: "POST",
        url: "http://192.168.1.16:8080/www/login.php",
        data: formData
    });

    window.location.href = "index.html";

})

})


