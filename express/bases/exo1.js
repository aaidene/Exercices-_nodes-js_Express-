const express = require("express");

// Créer une instance de l'application Express
const app = express();

// Définir une route pour la racine (GET sur "/") qui envoie un message de bienvenue
app.get("/", (requete, reponse) => {    
  reponse.send("Bienvenue sur notre serveur Express.js !");
});

// Définir le port d'écoute du serveur
const port = 3000;

// Démarrer le serveur et écouter sur le port spécifié, puis afficher un message dans la console
app.listen(port, () => {
  console.log(`Serveur1 en écoute sur le http://127.0.0.1:3000/ `);
});