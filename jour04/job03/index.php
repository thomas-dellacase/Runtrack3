<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="script.js"></script>
    <title>Document</title>
</head>
<body>
    <form>
        <input type="text" name="id" placeholder="id"></input>
        <input type='text' name='nom' placeholder="nom"></input>
        <select name="type">
            <option value="Grass">Grass</option>
            <option value="Poison">Poison</option>
            <option value="Fire">Fire</option>
            <option value="Flying">Flying</option>
            <option value="Water">Water</option>
            <option value="Bug">Bug</option>
            <option value="Normal">Normal</option>
            <option value="Electric">Electric</option>
            <option value="Ground">Ground</option>
            <option value="Fairy">Fairy</option>
            <option value="Fighting">Fighting</option>
            <option value="Psychic">Psychic</option>
            <option value="Rock">Rock</option>
            <option value="Steel">Steel</option>
            <option value="Ice">Ice</option>
            <option value="Ghost">Ghost</option>
            <option value="Dragon">Dragon</option>
        </select>
        <button id="log" name='button'>Attraper les tous</button>
    </form>


        <div>
            <div role="status" id="loading">
                <span>Loading...</span>
            </div>
        </div>
        <h1>pokemon</h1>
        <!-- table for showing data -->
        <table id="pokemon"></table>


</body>
</html>