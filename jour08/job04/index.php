<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
    <title>Document</title>
</head>
<body>
  <header>
    <nav>
      <div class="nav-wrapper">
        <a href="#" class="brand-logo"></a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><a href="index.php">Accueil</a></li>
          <li><a href="index.php">Inscription</a></li>
          <li><a href="index.php">Connexion</a></li>
          <li><a href="index.php">Rechercher</a></li>
        </ul>
      </div>
    </nav>
  </header>
  <main>
    <section>
      <div class="container">
      <div class="row">
              <form class="col s12">
                <div class="input-field col m6 s12">
                  <i class="material-icons prefix">account_circle</i>
                  <input id="icon_prefix" type="text" class="validate">
                  <label for="icon_prefix">Prénom</label>
                </div>
                <div class="row">
                  <form class="col s12">
                    <div class="input-field col m6 s12">
                      <i class="material-icons prefix">account_circle</i>
                      <input id="icon_prefix" type="text" class="validate">
                      <label for="icon_prefix">Nom</label>
                    </div>
                    <div class="row">
                      <form class="col s12">
                        <div class="input-field col m6 s12">
                          <i class="material-icons prefix">home</i>
                          <input id="icon_prefix" type="text" class="validate">
                          <label for="icon_prefix">Adresse</label>
                        </div>
                        <form class="col s12">
                          <div class="input-field col m6 s12">
                            <i class="material-icons prefix">mail</i>
                            <input id="icon_prefix" type="text" class="validate">
                            <label for="icon_prefix">Mail</label>
                          </div>
                          <div class="row">
                            <div class="input-field col m6 s12">
                              <i class="material-icons prefix">lock</i>
                              <input id="password" type="password" class="validate">
                              <label for="password">Mot de passe</label>
                            </div>
                          </div>
                          <div class="row">
                            <div class="input-field col m6 s12">
                              <i class="material-icons prefix">lock</i>
                              <input id="password" type="password" class="validate">
                              <label for="password">Confirmation mot de passe</label>
                            </div>
                          </div>
                          <div class="titre"> Vos hobbies</div>
                          <p>
                            <label>
                              <input type="checkbox" />
                              <span>Sport</span>
                            </label>
                          </p>
                          <p>
                            <label>
                              <input type="checkbox"/>
                              <span>Voyage</span>
                            </label>
                          </p>
                          <p>
                            <label>
                              <input type="checkbox"/>
                              <span>Musique</span>
                            </label>
                          </p>
                          <p>
                            <label>
                              <input type="checkbox"/>
                              <span>Cinéma</span>
                            </label>
                          </p>
                          <p>
                          <button type="submit" name="action">Submit
                    </button>
                        </form>
                    </div>
              </div>
    </section>
  </main>
  <footer class="page-footer">
          <div class="container">
            <div class="row">
              <div class="col l6 s12">
                <h5 class="white-text">Footer</h5>
                <p class="grey-text text-lighten-4">Formulaire de création de compte</p>
              </div>
              <div class="col l4 offset-l2 s12">
                <h5 class="white-text">Links</h5>
                <ul>
                  <li><a class="grey-text text-lighten-3" href="#!">Accueil</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Inscription</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Connexion</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Rechercher</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-copyright">
          </div>
        </footer>
</body>
</html>