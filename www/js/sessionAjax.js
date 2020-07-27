let Session = {

// If "Username" session variable exists, navigate to "profile" page 
getSessionVariable: function() {

$(document).ready(function() {
	$.get("http://192.168.1.16:8080/www/session.php", function(data){
        if(data != ""){         
        $("#profile-text").attr("href", "profile.html");
        $("#profile-img").attr("href", "profile.html");
        }
    })
})

}

}

document.addEventListener("DOMContentLoaded", function() {

    Session.getSessionVariable();
})


