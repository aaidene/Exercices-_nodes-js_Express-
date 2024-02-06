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