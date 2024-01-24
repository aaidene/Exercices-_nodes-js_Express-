







const express = require('express');
const app = express();
const path = require('path');


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.get('/session', (req, res) => {
  res.render('session_ejs');
});



app.listen(3000, () => {
  console.log('Serveur en écoute sur http://localhost:3000/');
});
