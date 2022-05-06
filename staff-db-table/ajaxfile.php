<?php
   include "config.php";

   $userData = mysqli_query($con, "MySQL Query");

   $response = array();

   while($row = mysqli_fetch_assoc($userData)){

      $response[] = $row;
      
   }

   echo json_encode($response);
   exit;
