const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);



io.on("connection", (socket) => {
  console.log("Un client est connecté");

  socket.on("login", (username) => {
    console.log(`L'utilisateur ${username} s'est connecté.`);

    socket.emit("login-success", `Tu t'es bien connecté avec succès, ${username}!`);
  });
});



app.get("/", (req, res) => {
  res.sendFile(__dirname + "/exercice_01.html");
});

const PORT = 3000;
http.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});
