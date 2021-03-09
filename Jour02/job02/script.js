
let togg1 = document.getElementById("togg1");
let d1 = document.getElementById("showhide");
togg1.addEventListener("click", () => {
  if(getComputedStyle(showhide).display != "none"){
    d1.style.display = "none";
  } else {
    d1.style.display = "block";
  }
})