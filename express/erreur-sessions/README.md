## Sessions

# npm install express-session

- l'exercice se trouve sur https://sharemycode.fr/sess

-Les cookies jouent un rôle crucial dans la gestion des sessions en fournissant un moyen de suivre les utilisateurs à travers leurs interactions avec le site.

## express-session

- express-session est un middleware Express qui gère les sessions utilisateurs.
- Il crée un cookie de session côté client contenant un identifiant unique, permettant ainsi de retrouver et d'accéder aux données de session stockées sur le serveur.
- Cela sécurise les informations de session en ne stockant pas de données sensibles directement dans le navigateur de l'utilisateur.

## Stockage Sécurisé :

- Les données sont conservées sur le serveur, offrant une sécurité accrue.
- Facilité d'Utilisation :
- express-session simplifie la mise en place de la gestion des sessions dans une application Express.

# base-session.js

# test.js

- Resultats : on recupére la session, sur le port 3000

Session {
cookie: { path: '/', \_expires: null, originalMaxAge: null, httpOnly: true }
}

# exercice_15.js

```js
// Import des modules nécessaires
const express = require("express");
const session = require("express-session");
const app = express();

// Configuration et utilisation de express-session comme middleware
// Cela permet de gérer les sessions utilisateur de manière sécurisée et efficace.
app.use(
  session({
    secret: "votreCleSecrete", // Clé utilisée pour signer le cookie de session pour la sécurité.
    resave: false, // Empêche la resauvegarde de la session si elle n'a pas été modifiée pendant la requête, réduisant ainsi la charge sur le serveur ou le store de session.
    saveUninitialized: true, // Permet de sauvegarder une nouvelle session même si elle n'a pas été modifiée, utile pour suivre les utilisateurs dès leur première visite.
  })
);

// Route principale qui utilise les sessions pour compter les visites
app.get("/profile", (req, res) => {
  // Vérifie si l'objet session a une propriété 'views'
  if (req.session.views) {
    req.session.views++; // Incrémente le compteur si la session existe déjà
    res.send(`Vous avez visité cette page ${req.session.views} fois`);
  } else {
    req.session.views = 1; // Initialise le compteur de vues pour la session
    res.send("Bienvenue sur cette page pour la première fois");
  }
});

// Démarrage du serveur sur le port 3000
app.listen(3000, () => {
  console.log("Le serveur est en cours d'exécution sur le port 3000");
});
```

# exercice_15b.js

```js
const express = require("express");
const session = require("express-session");
const app = express();

const crypto = require("crypto");

// Génération d'une clé secrète pour la session
const key = crypto.randomBytes(32).toString("hex");

// Configuration du moteur de vue pour utiliser EJS
app.set("view engine", "ejs");

app.use(express.static("public"));

// Utilisation du middleware pour parser les données envoyées dans la requête POST
app.use(express.urlencoded({ extended: true }));

// Configuration du middleware de session
app.use(
  session({
    secret: key, // Clé secrète pour signer la session
    resave: false, // Ne pas réenregistrer la session si elle n'a pas été modifiée
    saveUninitialized: false, // Ne pas sauvegarder les sessions non initialisées
  })
);

// Route pour la page d'accueil qui redirige vers le login
app.get("/", (req, res) => {
  if (req.session.username) {
    // Si un utilisateur est connecté
    // Rendu de la vue profile avec le nom d'utilisateur en tant que variable
    res.redirect("/profile");
  } else {
    // Si personne n'est connecté
    res.redirect("/login"); // Redirige vers la page de connexion
  }
});

// Route pour la page de connexion
app.get("/login", (req, res) => {
  if (req.session.username) {
    // Si un utilisateur est connecté
    // Rendu de la vue profile avec le nom d'utilisateur en tant que variable
    res.redirect("/profile");
  } else {
    // Si personne n'est connecté
    res.render("login_ejs"); // Rendu de la vue login
  }
});

// Route pour gérer la soumission du formulaire de connexion
app.post("/login", (req, res) => {
  const { username, password } = req.body; // Récupère le nom d'utilisateur et le mot de passe du formulaire
  // Dans une véritable application, vous vérifierez ces informations d'identification ici
  req.session.username = username; // Stocke le nom d'utilisateur dans la session
  res.redirect("/profile"); // Redirige vers la page de profil
});

// Route pour la page de profil
app.get("/profile", (req, res) => {
  if (req.session.username) {
    // Si un utilisateur est connecté
    // Rendu de la vue profile avec le nom d'utilisateur en tant que variable
    res.render("profile_ejs", { username: req.session.username });
  } else {
    // Si personne n'est connecté
    res.redirect("/login"); // Redirige vers la page de connexion
  }
});

// Route pour se déconnecter
app.get("/logout", (req, res) => {
  req.session.destroy(); // Détruit la session
  res.redirect("/login"); // Redirige vers la page de connexion
});
// Route pour gérer les requêtes qui ne correspondent à aucune route definies au dessus de ce middleware
app.use((req, res) => {
  res.status(404).render("404_ejs");
});
// Lancement de l'application sur le port 3000
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
```
