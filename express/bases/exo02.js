
/*En utilisant une autre méthode get sur l'objet stocké dans la variable app, affichez 
un message différent dans le navigateur lorsque l'utilisateur ajoute le mot "quit" à l'URL racine*/

const app = require("express")();


app.get("/", (requete, reponse) => {    
  reponse.send("Bienvenue dans l'exercice 2 !");
});

app.get("/quit", (requete, reponse) => {    
  reponse.send("Bienvenue dans l'exercice 2 !");
});



app.listen(3000, () => {
  console.log(`Serveur1 en écoute sur le http://127.0.0.1:3000/ `);
});