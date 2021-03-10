
$(document).ready(function(){     
    $("#button").click(function(){
        $("h1").hide(function(){
            alert("Titre caché");
        });
    });
    
    $("#button2").click(function(){
        $("h1").show();
    });
});