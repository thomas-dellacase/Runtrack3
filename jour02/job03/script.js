'use strict';
document.addEventListener("DOMContentLoaded", () => {

let button = document.getElementById('button');
let compteur = document.getElementById('compteur');

function addone() {
    let click = compteur.innerHTML;
    click++;
    compteur.innerHTML = click;
}
button.addEventListener('click', () => {
    addone();
})
})