$(function(){
    $('#bouton').click(function(){
        $.ajax({
            type: 'POST',
            url : "inscription.php",
            
         })
         .done(function(data){
             $("body").append('<p>'+data+'</p>');
         })
        
    })
 });