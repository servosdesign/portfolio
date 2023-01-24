<?php

 if (isset($_POST['submit'])){
   $name = $_POST['name'];
   $email = $_POST['email'];
   $msg = $_POST['msg'];

  $mailTo = "maxim@servosdesign.com";
  $headers = "From: ".$email;
  $subject = "Portfolio Contact Form";
  $txt = "Name: ".$name."\n\n".$msg;

   mail($mailTo, $subject, $txt, $headers);
   header("Location: contact.html?mailsend");
   
 }