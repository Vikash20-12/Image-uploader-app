const express         = require('express');
const path            = require('path');
const hbs             = require('express-handlebars');
const dotenv          = require('dotenv');
const app             = express();
const Connect         = require('./server/database/database');



app.use(express.json());

//Serving static files
app.use(express.static(path.join(__dirname, 'public')));

dotenv.config({path: './config/config.env'});

//database connection
Connect();

//setup view engine
app.set('view engine','hbs');
app.engine('hbs', hbs({
    extname: 'hbs',
    defaultView: 'default',
    layoutsDir: path.join(__dirname, 'views'),
    partialsDir:path.join(__dirname,'views/partials') 
}));


//calling routes
app.use('/', require('./server/router/router.js'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, (req, res)=>{
    console.log(`server running on port ${PORT}`)
});