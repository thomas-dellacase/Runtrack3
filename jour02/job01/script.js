document.addEventListener("DOMContentLoaded", () => {
    console.log('coucou');
    
    let bouton = document.getElementById('button');
    let citation = document.getElementById('citation');

    bouton.addEventListener('click', event => {
    console.log(citation.innerHTML);
    })
    
    })