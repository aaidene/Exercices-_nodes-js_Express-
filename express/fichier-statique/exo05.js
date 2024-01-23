/*
UTILISATION DES FICHIERS STATIQUES 3

Introduction

La méthode sendFile de l'objet réponse permet d'envoyer un fichier spécifique au client.
Elle s'utilise de la manière suivante :
res.sendFile('<nom_du_fichier>', options);
options: un objet contenant le dossier racine. Par exemple : {root: 'fichiers'}
*/

/*
Exercice

Étape 1 :
Créez un document HTML. Intégrez au moins header,un titre et une balise image.
Placez ce document et l'image dans un dossier.

Étape 2 :
Utilisez la méthode sendFile pour envoyer le fichier au client.
*/

// fichier serveur.js
const express = require("express");
const app = express();
const port = 3000;

// Middleware pour servir des fichiers statiques.
// qui se trouve dans le même répertoire que ce script.

// app.use( express.static(`${__dirname}/public`));
app.use(express.static("public"));

// Route pour la racine de l'application.
// Lorsqu'une requête GET est faite à l'adresse '/',
// le serveur envoie le fichier 'exe5.html' situé dans le dossier 'public'.
app.get("/", (req, res) => {
  res.sendFile("exo05.html", { root: "public" });
});

// Démarrage du serveur sur le port défini.
// Une fois le serveur démarré, il affiche un message dans la console
// indiquant qu'il est en écoute sur http://localhost:3000/.
app.listen(port, () => {
  console.log("server 5 en ecoute sur http://localhost:3000/");
});