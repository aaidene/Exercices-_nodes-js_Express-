
/*


UTILISATION DES TEMPLATES - PREMIERS PAS

Présentation:

L'utilisation de template permet de simplifier l'écriture des pages en HTML et de gérer facilement l'affichage des données contenues dans une variable.

Le template souvent utilisé avec Express.js est EJS (Embedded JavaScript).
Vous trouverez l'ensemble des possibilités de ce moteur de template dans la documentation : https://ejs.co/ (Menu "Docs" dans la barre de navigation).

Ses avantages :
Syntaxe simple : EJS utilise des balises HTML traditionnelles et des balises EJS pour incorporer du code JavaScript, ce qui rend la syntaxe relativement facile à apprendre et à comprendre.

Grande flexibilité : EJS permet d'incorporer du code JavaScript directement dans les fichiers de templates, ce qui offre une grande flexibilité dans la génération de contenu dynamique pour les pages web.

Grande compatibilité : EJS est compatible avec tous les navigateurs modernes et peut être utilisé avec de nombreux frameworks web populaires pour Node.js, tels que Express.

Bonne performance : EJS est connu pour être un moteur de templates rapide et efficace, ce qui peut être un avantage pour les applications web qui ont besoin de générer du contenu dynamique à grande échelle.

Grande communauté : EJS est utilisé par une grande communauté de développeurs Node.js, ce qui signifie que vous pouvez trouver de nombreuses ressources et des exemples de code pour vous aider à utiliser EJS dans votre projet.

Pour utiliser EJS, vous devez tout d'abord installer le module correspondant (npm install ejs).
*/




const express = require('express');
const path = require('path');

const app = express();

app.set('view engine', 'ejs')
app.set('views', "./views");


app.get('/', (req, res) => {
  res.render("premiersPas"); 
});



app.listen(3000, () => {
  console.log("server 5 en ecoute sur http://localhost:3000/");
});
