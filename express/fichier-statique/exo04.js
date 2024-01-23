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

const app = require("express")();


// Port sur lequel le serveur va écouter


// Utilisation d'un middleware pour servir les fichiers statiques du dossier 'images'
app.use("/img", express.static(__dirname + "/images"));
app.use("/icon", express.static(__dirname + "/icon"));

// Route pour la racine (GET sur "/") qui envoie une balise image
app.get("/", (req, res) => {
  // Envoie la balise image avec l'attribut src pointant vers l'image "volley.jpg"
  res.send('<img src="/icon/animal.jpg" alt="animal">');
});

app.get("/img", (req, res) => {
  res.send('<img src="/img/nature.jpg" alt="nature">');
});
app.get("/quit", (req, res) => {
  res.send("bye bye, vous etes sur /quit");
});

app.listen(3000, () => {
  console.log("server4 en ecoute sur http://localhost:3000/");
});
