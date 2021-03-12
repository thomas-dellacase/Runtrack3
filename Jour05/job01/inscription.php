<?php
session_start();

if(isset($_POST['ins'])){
    $nom = htmlspecialchars($_POST['nom']);
    $prenom = htmlspecialchars($_POST['prenom']);
    $email = htmlspecialchars($_POST['email']);
    $password = htmlspecialchars($_POST['password']);
    $confPassword = htmlspecialchars($_POST['confPassword']);
}
?>
    <form method="post" >
            <input type="text" id="nom"></input>
            <input type="text" id="prenom"></input>
            <input type="text" id="email"></input>
            <input type="text" id="password"></input>
            <input type="text" id="confPassword"></input>
        </form>
