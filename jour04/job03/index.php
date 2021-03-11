<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form>
        <input type='text' placeholder='id'></input>
        <input type='text' placeholder='nom'></input>
        <select>
            <option valeur="Grass">Plante</option>
            <option valeur="Fighting">Combat</option>
            <option valeur="Dragon">Dragon</option>
            <option valeur="Water">Eau</option>
            <option valeur="Electric">Electrique</option>
            <option valeur="Fire">Feu</option>
            <option valeur="Ice">Glace</option>
            <option valeur="Bug">Insectes</option>
            <option valeur="Normal">Normale</option>
            <option valeur="Poison">Plante</option>
            <option valeur="Psy">Psy</option>
            <option valeur="Rock">Pierre</option>
            <option valeur="Ground">Sol</option>
            <option valeur="Gost">Spectre</option>
            <option valeur="Flying">Vol</option>
        </select>

    </form>
    <button id="bouton" onclick="jsonValueskey(myObj,'type')">Filtrer</button>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="script.js"></script>
</body>    
</html> 
