#### Exercice socket.io

# commande

npm init
npm i socket.io express

- Socket.IO est une bibliothèque JavaScript qui permet une communication en temps réel entre le serveur et le client.
  Elle facilite le développement d'applications web interactives,
  telles que les chats en ligne,
  les tableaux de bord en temps réel, les jeux multi-utilisateurs, etc.

- Socket.IO se base sur le protocole WebSocket,
  qui offre une connexion persistante et bidirectionnelle
  entre le client et le serveur.
  Cela permet d'établir une communication en temps réel,
  où les informations peuvent être transmises instantanément des deux côtés.

- Une des principales fonctionnalités de Socket.IO
  est la gestion automatique des mécanismes de rétrocompatibilité ,
  ce qui signifie que la bibliothèque est capable de s'adapter à différentes technologies de communication,
  en fonction de ce qui est pris en charge par le navigateur ou l'environnement du client.
  Il s'adapte aux différentes technologies de communication disponibles pour assurer une connexion stable et efficace .

- Socket.IO offre une API simple et facile à utiliser pour émettre et écouter des événements.
  Les événements peuvent être émis par le serveur vers le client,
  par le client vers le serveur ou même
  de client à client (avec le serveur agissant comme un médiateur).
  Cela permet une communication bidirectionnelle et réactive entre les parties impliquées.

- # En résumé
  Socket.IO est une bibliothèque qui facilite la création d'applications web en temps réel
  en fournissant une couche d'abstraction sur le protocole WebSocket
  et en gérant automatiquement la rétrocompatibilité avec d'autres mécanismes de communication.

Nous commençons par importer les modules nécessaires,
notamment Express, http, et socket.io.

Ensuite, nous créons une instance d'Express.js en utilisant express().
Nous créons un serveur HTTP en utilisant http.createServer(app), où app est notre instance Express.js.

Nous créons une instance de Socket.IO en utilisant io(http), où http est notre serveur HTTP.

Nous écoutons l'événement "connection" émis par Socket.IO lorsque les clients se connectent au serveur.
À l'intérieur de la fonction de rappel pour l'événement "connection",nous affichons un message dans la console du serveur
pour indiquer qu'un client s'est connecté.

Nous écoutons également l'événement "chat message" émis par les clients.
Lorsque cet événement est reçu,
nous affichons le message reçu dans la console du serveur.
puis nous émettons un événement "chat message" vers le client en utilisant:
socket.emit("chat message", "Hello du server!");

Enfin, nous démarrons le serveur en écoutant sur un port spécifié en utilisant http.listen().
Lorsque le serveur démarre, nous affichons un message dans la console.

# exemple.js

```js
const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

// Écoute de la connexion des clients
io.on("connection", (socket) => {
  console.log("Un client est connecté");

  // Écoute de l'événement "chat message"
  socket.on("chat message", (msg) => {
    console.log("Message reçu:", msg);
    socket.emit("chat message", "Hello du server!");
  });
});

// Route GET pour servir le fichier index.html
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/exemple.html");
});

// Démarrage du serveur
const PORT = 3000;
http.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});
```

# exemple.html

```html
<!DOCTYPE html>
<html>
  <body>
    <h1>Socket.IO exemple</h1>

    <script src="/socket.io/socket.io.js"></script>
    <script>
      // Connexion au serveur Socket.IO
      const socket = io();

      // Écoute de l'événement "chat message" envoyé par le serveur
      socket.on("chat message", function (msg) {
        console.log("Message reçu:", msg);
      });

      // Émission d'un événement "chat message" vers le serveur avec le message "Hello Socket.IO!"
      socket.emit("chat message", "Hello Socket.IO!");
    </script>
  </body>
</html>
```

```html
<!-- Dans le balisage HTML, nous avons inclus le script socket.io.js fourni par Socket.IO. 
Cela permet au client de se connecter au serveur Socket.IO.

Ensuite, dans la balise <script>, nous effectuons les opérations suivantes :
    Nous utilisons const socket = io(); pour créer une instance de connexion Socket.IO entre le client et le serveur. 
    Cela établit la connexion avec le serveur Socket.IO
    .
Nous écoutons l'événement "chat message" envoyé par le serveur en utilisant
 socket.on('chat message', function(msg) {...});. Lorsque cet événement est reçu,
 la fonction de rappel est exécutée, 
 et nous affichons le message reçu dans la console du client.

Enfin, nous émettons un événement "chat message" vers le serveur en utilisant
 socket.emit('chat message', 'Hello Socket.IO!'); 
 Cela envoie le message "Hello Socket.IO!" au serveur. 
-->
```

# exercice_01.js

```js
/*
 Créer une page exercice_01.html avec un formulaire de connexion contenant un champ pour saisir le nom d'utilisateur.
 Lorsque l'utilisateur soumet le formulaire,
 se connecter au serveur Socket.IO et afficher un message de confirmation dans la console du serveur.

*/
```

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Exercice 01</title>
    <script src="/socket.io/socket.io.js"></script>

    <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/4.1.2/socket.io.js"></script> -->
  </head>
  <body>
    <h1>Exercice 01</h1>
    <p>
      Créer une page exercice_01.html avec un formulaire de connexion contenant
      un champ pour saisir le nom d'utilisateur. Lorsque l'utilisateur soumet le
      formulaire, se connecter au serveur Socket.IO et afficher un message de
      confirmation dans la console du serveur.
    </p>
    <form id="login-form">
      <label for="username-input">Nom d'utilisateur :</label>
      <input type="text" id="username-input" required />
      <button type="submit">Se connecter</button>
    </form>

    <script>
      const socket = io();

      // Gestionnaire d'événement pour la soumission du formulaire
      document
        .getElementById("login-form")
        .addEventListener("submit", (event) => {
          event.preventDefault();

          // Récupération du nom d'utilisateur saisi
          const username = document.getElementById("username-input").value;
          console.log(username);
          // Connexion au serveur Socket.IO
          socket.connect();

          // Émission de l'événement "connexion-utilisateur" vers le serveur
          socket.emit("connexion-utilisateur", username);

          // Affichage du message de confirmation dans la console du serveur
          socket.on("confirmation-connexion", () => {
            console.log(`Le client ${username} s'est connecté avec succès.`);
          });
        });
    </script>
  </body>
</html>
```

```js
const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

// Route GET pour servir la page exercice_01.html
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/exercice_01.html");
});

// Écoute de la connexion des clients
io.on("connection", (socket) => {
  console.log("Un client est connecté");

  // Écoute de l'événement 'connexion-utilisateur'
  socket.on("connexion-utilisateur", (username) => {
    console.log(`Le client ${username} s'est connecté avec succès.`);

    // Émission de l'événement 'confirmation-connexion' vers le client
    socket.emit("confirmation-connexion");
  });
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

// Démarrage du serveur
const PORT = 3000;
http.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});
```

## exercice_02.js

émettre un événement personnalisé depuis le client vers le serveur:

Vous devez afficher le contenu de cet événement dans la console du serveur.
Pour cela, vous devez effectuer les étapes suivantes :
créez exercice_02.html avec un bouton "Envoyer un message au serveur",
au click sur le bouton, émettez un événement personnalisé en utilisant socket.emit() pour envoyer un message au serveur .

Dans le code côté serveur (exercice_02.js),
écoutez cet événement en utilisant socket.on() pour capturer le message émis par le client.
Affichez le contenu du message reçu dans la console du serveur.

L'objectif de cet exercice est de vous familiariser avec l'émission d'événements personnalisés depuis le client vers le serveur avec Socket.IO et de comprendre comment afficher les messages associés dans la console du serveu

```

```

```js
const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

// Route GET pour servir la page exercice_02.html
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/exercice_02.html");
});

// Écoute de la connexion des clients
io.on("connection", (socket) => {
  console.log("Un client est connecté");

  // Écoute de l'événement 'message-client-vers-serveur'
  socket.on("message-client-vers-serveur", (message) => {
    console.log(`Message reçu du client : ${message}`);
  });
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

// Démarrage du serveur
const PORT = 3000;
http.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});
```

```html <!DOCTYPE html>
<html>
  <head>
    <title>Exercice 02 - Socket.IO</title>
    <script src="/socket.io/socket.io.js"></script>
    <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/4.1.2/socket.io.js"></script> -->
  </head>
  <body>
    <h1>Exercice 02 - Socket.IO</h1>

    <button id="send-button">Envoyer un message au serveur</button>

    <script>
      const socket = io();

      document.getElementById("send-button").addEventListener("click", () => {
        const message = "Bonjour serveur !";

        // Émettre un événement personnalisé depuis le client vers le serveur
        socket.emit("message-client-vers-serveur", message);
      });
    </script>
  </body>
</html>
```

# exercice 3

"Émettre un événement depuis le serveur vers le client
et afficher le message associé à cet événement dans la console du client."

vous devez effectuer les actions suivantes :

Du côté du serveur (exercice_03.js),
émettez un événement vers le client (exercice_03.html) en utilisant Socket.IO.
Le client doit écouter cet événement et afficher le message associé dans la console du navigateur.

## Exercice 4 :

Développez une fonction de chat en temps réel.
Dans cette fonction, les clients doivent être en mesure d'envoyer des messages qui sont immédiatement reçus et affichés pour tous les autres clients connectés.

Connexion du client :
Chaque client doit être en mesure de se connecter à l'application de chat. Vous aurez besoin d'une authentification pour afficher l'identité de chaque utilisateur.

Envoi de messages :
Les clients doivent pouvoir saisir et envoyer des messages.
Ces messages seront ensuite envoyés à un serveur.

Serveur de messagerie :
Le serveur de messagerie recevra les messages des clients
et les distribuera aux autres clients connectés.
Il sera nécessaire de gérer plusieurs connexions simultanées.

Réception des messages :
Les clients doivent pouvoir recevoir des messages du serveur de messagerie.
Ces messages doivent être affichés sur l'interface utilisateur.

Interface utilisateur :
L'interface doit afficher les messages entrants en temps réel.
