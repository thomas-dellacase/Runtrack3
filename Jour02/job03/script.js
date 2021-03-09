var button = document.getElementById('button');
var conteur = document.getElementById('conteur');

function addone() {
    var nbclick = conteur.innerHTML;
    nbclick++;
    conteur.innerHTML = nbclick;
}
button.addEventListener('click', addone);