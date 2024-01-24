
/*
 UTILISATION DES TEMPLATES - MINI SITE

 Exercice
 utilisez ejs pour transformer vos trois documents HTML de la partie Fichiers-statiques en template.
 Utilisez une convention de nommage différente pour les fichiers EJS et HTML
 (index.html donne index_ejs.ejs
 )
*/

 /*
balise EJS :
<% ... %> : Code JavaScript sans sortie HTML.
  <% var year = new Date().getFullYear(); %>

<%_ ... %> : Code JavaScript sans sortie HTML et suppression des espaces blancs avant la balise.
     <%_ var year = new Date().getFullYear(); %>

   <%= ... %> : Insérer du code JavaScript avec sortie HTML échappée.
  <p>Année actuelle : <%= year %></p>

<%- ... %> : Insérer du code JavaScript avec sortie HTML non échappée.
  <p>Description: <%- "<strong>Description en gras</strong>" %></p>

<%# ... %> : Commentaire qui n'est pas exécuté ni inclus dans la sortie HTML.
  <%# Ceci est un commentaire et n'apparaîtra pas dans le HTML généré %>

  
TEMPLATE EJS - INCLUSION

Présentation
Pour éviter la répétition de plusieurs lignes de code similaires dans différents templates EJS, il est possible d'utiliser l'inclusion.
L'inclusion en EJS permet de diviser votre code en petits morceaux réutilisables que vous pouvez inclure dans plusieurs templates. 
Cela facilite la maintenance et la lisibilité du code. 
Pour inclure un fichier dans un template EJS, vous pouvez utiliser la directive <%- include('fichier') %>, où fichier est le nom du fichier EJS que vous souhaitez inclure.
https://www.digitalocean.com/community/tutorials/how-to-use-ejs-to-template-your-node-application-fr

*/

/*
Exercice

 1 
Reprenez le code de l'exercice précédent.
creez un dossier partials dans views
*/

const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', "./views");

app.get('/', (req, res) => {
  res.render('index_ejs');
     console.log("index")
});

app.get('/', (req, res) => {
  res.render('index_ejs',{
    titre: "Bienvenue dans ma page accueil",
   
  });
  
    console.log("Accueil")
});


app.get('/about', (req, res) => {
  res.render('about_ejs',{
    titre: "Bienvenue dans ma page about me",
   
  });
  
    console.log("about")
});

app.get('/contact', (req, res) => {
  res.render('contact_ejs',{
    titre: "Bienvenue dans ma page contact",
   
  });
  
    console.log("contact")
});

/*
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});
*/

app.listen(3000, () => {
  console.log("server 5 en ecoute sur http://localhost:3000/");
});




