'use strict';
document.addEventListener("DOMContentLoaded",() =>{
    
    function showhide(){
        let doc = document.getElementById('article');
        if(doc.style.display === 'none'){
            doc.style.display = 'block';
        }else{
            doc.style.display = 'none';
        }
    }

    let button =document.getElementById("button");

    button.addEventListener("click",() =>{
        showhide();
    })

})