const express = require('express');
const session = require('express-session');
const path = require('path');
const app = express();


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
app.use(session({ 
    secret: 'mySecretKey', 
    resave: false, 
    saveUninitialized: true 
    
}));


app.get('/', (req, res) => {
    res.redirect('/login');
});


app.get('/login', (req, res) => {
    res.render('login');
});


app.post('/login', (req, res) => {
    const { username, password } = req.body;
 
    if (  req.session.username = username) {
      
        res.redirect('/profile');
        
    } else {
        res.render('login', { error: ' username ou le mot de passe invalide ' });
    }
});





app.get('/profile', (req, res) => {
    const username = req.session.username;
    if (username) {
        res.render('profile', { username });
    } else {
        res.redirect('/login');
    }
});



app.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/login');
});


app.use((req, res) => {
  res.status(404).render("404_ejs");
});


app.listen(3000, () => {
    console.log('Serveur en écoute sur http://localhost:3000/');
});

