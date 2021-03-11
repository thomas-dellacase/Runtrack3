$(function(){
   $('#bouton').click(function(){
       $.ajax({
           method : "GET",
           url : "expression.txt",
           DataType : "text",

        })
        .done(function(data){
            $("body").append('<p>'+data+'</p>');
        })
       
   })
});