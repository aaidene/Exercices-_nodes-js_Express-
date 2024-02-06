/*
Créez un fichier js avec Express 

------ 1 ------
Créez dans la variable de session un compteur en utilisant req.session.
------ 2 ------
Pour chaque connexion, incrémentez le compteur et affichez la valeur dans le navigateur.
*/

const express = require('express');
const session = require('express-session');

const app = express();


app.use(session({ 
    secret: 'mySecretKey', 
    resave: false, 
    saveUninitialized: true 
    
}));



app.get('/', (req, res) => {


if (!req.session.counter) {
    req.session.counter = 0;
}
   
    req.session.counter++;
   
    res.send(`La valeur du compteur de session est : ${req.session.counter}`);
});

app.listen(3000, () => {
    console.log('Serveur en écoute sur http://localhost:3000/');
});
