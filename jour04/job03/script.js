$(document).ready(function() {
    $("#bouton").click(function(){
        $.ajax({
            method : "GET",
            url : "pokemon.json",
            data: {id:""},

            done: function(data){
                $("#id").value=data;
                
                function jsonValueskey(myJSON,id,nom,type){
                    var myJSON = "{'id':'1', 'nom':'Bulbizarre', 'type':'Grass'}";
                    const myObj = JSON.parse(myJSON);
                    console.log(myJSON.id);

                    $("#bouton").html("id");
                    return myJSON[type]
                }
            }
 
         })
    })
});