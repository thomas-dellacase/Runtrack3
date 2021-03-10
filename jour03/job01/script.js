
$(document).ready(function(){     
    $("#button").click(function(){
        $("h1").hide(function(){
            alert("Titre caché");
        });
    });
    
    $("#b2").click(function(){
        $("h1").show();
    });
});