let Profile = {

// displays username
getUsername: function() {
$(document).ready(function() {

	$.get("http://192.168.1.16:8080/www/session.php", function(data){

    // navigates user away from profile.html if they are not logged in 
    if(data == ""){window.location.href = "index.html"}

    $("p").html("Hello " + data + "!");


})})}}

document.addEventListener("DOMContentLoaded", function() {

    Profile.getUsername();
})


