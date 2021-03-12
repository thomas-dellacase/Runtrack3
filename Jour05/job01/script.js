$(function () {
  $("#button").click(function () {
    $("#formIns").remove();
    $.ajax({
      type: "GET",
      url: "inscription.php",
    }).done(function (data) {
      $("body").append("<div>" + data + "</div>");
      $('#submitIns').click(function(e){
          e.preventDefault();

          $.post(
              'inscription.php',{
                  nom : $('#nom').val(),
                  prenom : $('#prenom').val(),
                  email : $('#email').val(),
                  password : $('#password').val(),
                //   confPassword : $('#confPassword').val
              },
              function(data){
                  if(data == succes){
                      $('body').html("Inscrition reussi");
                  }
                  else{
                      $('body').html("inscrition error")
                  }
              },
                'text'

          );
      })
    });
    $("#formCo").remove();
  });
});



$(function () {{}
  $("#button2").click(function () {
    $("#formCo").remove();
    $.ajax({
      type: "GET",
      url: "connexion.php",
    }).done(function (data) {
      $("body").append("<div>" + data + "</div>");
      $('#submitCo').click(function(e){
        e.preventDefault();

        $.post(
            'connexion.php',{
                email : $('#email').val(),
                password : $('#password').val(),
            },
            function(data){
                if(data == succes){
                    $('body').html("Connexion reussi");
                }
                else{
                    $('body').html("Connect error")
                }
            },
              'text'

        );
    })
    });
    $("#formIns").remove();
  });
});
