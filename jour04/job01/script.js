document.addEventListener("DOMContentLoaded",()=>{
    button.addEventListener("click", () => {
Promise.all([
    fetch('expression.txt').then(x=>x.text())
]).then(([result]) => {
    console.log(result);
    document.write(result);
})
});
})
