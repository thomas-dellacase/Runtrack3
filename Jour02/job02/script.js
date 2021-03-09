
let bouton = document.getElementById("bouton");

let d1 = document.getElementById("showhide");

bouton.addEventListener("click", () => {
    if(getComputedStyle(showhide).display != "none"){
      d1.style.display = "none";
      } else {
        d1.style.display = "block";
      }
})