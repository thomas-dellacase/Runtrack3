$(document).ready(function(){
    var tableau=[];
    var tableau2=["arc1","arc2","arc3","arc4","arc5","arc6",];

    $("#button").click(function(){
        var parent = $("#melangees");
        var divs = parent.children();
        while (divs.length){
            parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
        }
    })
    
})