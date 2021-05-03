<?php
session_start();

if(isset($_POST['ins'])){
    $nom = htmlspecialchars($_POST['nom']);
    $prenom = htmlspecialchars($_POST['prenom']);
    $email = htmlspecialchars($_POST['email']);
    $password = htmlspecialchars($_POST['password']);
    $confPassword = htmlspecialchars($_POST['confPassword']);

    if($nom && $prenom && $email && $password && $confPassword){
        if($password == $confPassword);
            $password = password_hash($password, PASSWORD_DEFAULT);
            $db = mysqli_connect('localhost', 'root', '') or die('Erreur');
            mysqli_select_db($db, 'utliateurs');

            $sql = "SELECT email FROM utilisateur WHERE email = $email";
            $query = mysqli_query($db, $sql);
            $test = mysqli_fetch_array($query);

            if(!empty($test)){
                echo "Erreur choisissez un autre email!";
            }
            else{
                $querry = mysqli_query($db, "INSERT INTO utilisateurs (nom, prenom, email, password) VALUES ($nom, $prenom, $email, $password)");
                die("Inscription terminé. <a href='connexion.php'>Connectez vous </a>.");
            }
    }
}
?>
    <form method="POST" id="formIns">
            <input type="text" id="nom" name='nom' placeholder="Nom"></input>
            <input type="text" id="prenom" name='prenom' placeholder="Prenom"></input>
            <input type="text" id="email" name='email' placeholder="Email"></input>
            <input type="password" id="password" name='password' placeholder="Password"></input>
            <input type="password" id="confPassword" name='confPassword' placeholder="Confirm Password"></input>
            <button type="submit" id="submitIns">Inscription</button>
        </form>
