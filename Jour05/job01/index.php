<?php
session_start();

if(isset($_POST['deco'])){
    session_unset();
    session_destroy();
    header('Location : index.php');
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <title>Document</title>
</head>
<body>

    <div>
        <button id="button">inscription </button>
        
    </div>
    <div>
        <button id="button2">connexion </button>
    </div>
    <script src="script.js"></script>
</body>
</html>