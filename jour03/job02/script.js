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

    $("img").click(function(){
        $(this).appendTo("#rangees");
        var count = $("#rangees img").length;
        console.log(count);
        tableau.push($(this).attr('id'));
        console.log(tableau);
        console.log(tableau2);

        var i = 1;
        if(count == 6){
            var gagne= true;

            while(i < 6){

                if(tableau[i] != tableau2[i]){
                    gagne=false;
                }
            i++;
            }

            if(gagne){
                var p = document.createElement('p');
                var newelement = document.createTextNode("Vous avez gagné!");
                p.setAttribute("id","gagne");

                document.body.appendChild(p);
                p.appendChild(newelement);
            }

            else{
                var p = document.createElement('p');
                var newelement = document.createTextNode("Vous avez perdu!");
                p.setAttribute("id","perdu");

                document.body.appendChild(p);
                p.appendChild(newelement);
            }
        }
    });   
});