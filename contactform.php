<?php

 if (isset($_POST['submit'])){
   $name = $_POST['name'];
   $email = $_POST['email'];
   $msg = $_POST['msg'];

  $mailTo = "maxim@servosdesign.com";
  $headers = "From: ".$email;
  $txt = "You have recieved an email from ".$name.".\n\n".$msg;

   mail($mailTo, $subject, $txt, $headers);
   header("Location: index.html?mailsend");
 }