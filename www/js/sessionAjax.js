
$(document).ready(function() {


	$.get("http://192.168.1.16:8080/www/session.php", function(data){

        if(data == 1){
            
        $("#profile-text").attr("href", "profile.html");
        $("#profile-img").attr("href", "profile.html");
        
        }

        
    })

})