const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const nodemailer = require('nodemailer');


const app = express();

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Body Parser Middleware

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

var PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello');
});

app.listen(PORT, () => 
console.log('Server started....'));
