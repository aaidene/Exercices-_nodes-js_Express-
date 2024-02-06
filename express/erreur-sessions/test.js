const express = require('express');
const session = require('express-session');

const app = express();

// Utilisation de express-session middleware
app.use(session({ secret: 'mySecretKey', resave: false, saveUninitialized: true }));

// Exemple d'utilisation de la session avec console.log
app.get('/', function(req, res) {
  console.log(req.session); // Affiche les données de la session dans la console
  res.send('Vérifiez la console pour voir les données de la session');

   req.session.counter = req.session.counter || 0;

    req.session.counter++;
});

app.listen(3000);