/*
GÉRER LES POSTS
*/

/*
Lorsqu'une requête post est utilisée, les données envoyées ne sont pas présentes dans l'url. 
Le traitement de ces données dans les requêtes en post se fait d'une façon un peu différente des requêtes avec la méthode get.

Pour gérer une requête POST avec Express, 
vous devez utiliser un middleware pour parser les données envoyées dans la requête. 
Le middleware le plus couramment utilisé pour cela est body-parser.

Voici les étapes à suivre pour gérer une requête POST avec Express :
  Installez le module body-parser en utilisant la commande 
  npm install body-parser.

  Requirez le module body-parser dans votre fichier index.js :const bodyParser = require('body-parser');
  Utilisez la méthode urlencoded du module body-parser pour parser les données envoyées dans la requête POST
    app.use(bodyParser.urlencoded({ extended: false }));

À partir de là, on peut utiliser dans la fonction de retour de la gestion du post (app.post) la propriété body de l'objet req qui contient autant de propriétés que de nombres d'éléments envoyés par la soumission du formulaire.

*/

/*
exercice

Créez un nouveau projet Express. 
Ajoutez une route GET à votre application Express qui affiche une page ejs qui contient un formulaire  simple avec deux champs de texte : 
un champ */


const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');


app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', "./views");

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.render('formulaire_ejs');
});

app.post('/message', (req, res) => {
  const nom = req.body.nom;
  const age = req.body.age;

  res.render('message_ejs', { nom, age });
});


app.listen(3000, () => {
  console.log('Serveur en écoute sur http://localhost:3000/');
});