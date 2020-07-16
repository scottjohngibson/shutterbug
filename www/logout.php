<?php 

session_start();

if(isset($_SESSION["username"])){
      session_unset();
      session_destroy();
      header("Location: http://localhost:8080/www/index.php");
}

else {
    header("Location: http://localhost:8080/www/index.php");
}

?>
