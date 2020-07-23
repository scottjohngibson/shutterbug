<?php 

session_start();

if(isset($_SESSION["username"])){
      session_unset();
      session_destroy();
      header("Location: http://192.168.1.16:8080/www/index.html");
}

else {
    header("Location: http://192.168.1.16:8080/www/index.html");
}

?>
