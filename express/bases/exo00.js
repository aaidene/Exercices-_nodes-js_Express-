/*
Express.js est un framework de Node.js qui simplifie la création d'applications web. Avant de l'utiliser, il faut d'abord l'installer dans le répertoire où se trouve l'application. Voici les étapes à suivre :

Créez un fichier package.json en exécutant la commande suivante et en répondant aux questions posées :
  npm init
Installez ensuite Express.js en utilisant cette commande 
  npm install express 

Après avoir installé Express.js, vous êtes prêt à créer votre premier serveur web avec ce framework.
*/

/*

const http = require("http");
const server = http.createServer((requete, reponse) => {

  console.log(requete.method)
  if (requete.url === "/" && requete.method === "GET") {
    reponse.writeHead(200, { "Content-Type": "text/plain" });
    reponse.end("Bienvenue sur notre serveur Express.js !");
  } else {
    reponse.writeHead(404, { "Content-Type": "text/plain" });
    reponse.end("Not Found");
  }
});
const port = 3000;
server.listen(3000, () => {
  console.log("Server started at http://localhost:3000");
});

*/

// 1. Importez le module Express.js
const express = require('express');

// Exécutez express et stockez le résultat dans une variable app
const app = express();

// 2. Utilisez la méthode get sur l'objet contenu dans la variable app
app.get('/', (req, res) => {
  // Utilisez la méthode send sur l'objet reponse pour renvoyer une réponse
  res.send('Bienvenue Dans le server express');
  
});

app.get('/home', (req, res) => {
  // Utilisez la méthode send sur l'objet reponse pour renvoyer une réponse
  res.send('Je suis dans la page home');
});

// 3. Finalisez votre fichier JavaScript en utilisant la méthode listen
const port = 3000; // Numéro du port d'écoute

app.listen(port, () => {
  // Utilisez console.log pour afficher le numéro du port d'écoute
  console.log(`Le serveur est en cours d'exécution sur http://localhost:${port}`);
});

// 4. Démarrez le serveur en exécutant : nodemon exercice_01.js

