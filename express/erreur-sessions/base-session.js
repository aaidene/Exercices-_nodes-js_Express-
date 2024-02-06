// Import des modules
const express = require('express') // Module Express pour créer l'application serveur
const session = require('express-session'); // Middleware express-session pour la gestion des sessions
const cookieParser = require('cookie-parser') // Middleware cookie-parser pour analyser les cookies

// Création d'une instance d'application Express
const app = express()

// Utilisation de cookie-parser comme middleware dans l'application.
// Cela permet d'analyser les cookies des requêtes entrantes et de les rendre accessibles via `req.cookies`
app.use(cookieParser())

// Configuration et utilisation du middleware express-session pour la gestion des sessions
app.use(session({
secret:'votreCleSecrete', // Clé secrète pour signer l'ID de session cookie, essentiel pour la sécurité
saveUninitialized : false, // Empêche de sauvegarder des sessions non initialisées dans le store
resave: false // Empêche la resauvegarde de sessions non modifiées
}));

app.get('/', function(req, res) {
// Affichage des cookies présents dans la requête. Grâce à cookie-parser, les cookies sont accessibles via `req.cookies`
console.log("Cookies: ", req.cookies)
// Affichage des informations de session. Express-session ajoute l'objet `session` à l'objet `req`, permettant un accès facile aux données de session
console.log(req.session);
})

app.listen(3000, () => {
  console.log('Serveur en écoute sur http://localhost:3000/');
});

