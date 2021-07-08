const express         = require('express');
const path            = require('path');
const hbs             = require('express-handlebars');
const app             = express();


app.use(express.json());

//Serving static files
app.use(express.static(path.join(__dirname, 'public')));

//setup view engine
app.set('view engine','hbs');
app.engine('hbs', hbs({
    extname: 'hbs',
    defaultView: 'default',
    layoutsDir: path.join(__dirname, 'views'),
    partialsDir:path.join(__dirname,'views/partials') 
}));


//routes
app.get('/', (req, res)=>{
    res.render('main');
})


const PORT = process.env.PORT || 3000;
app.listen(PORT, (req, res)=>{
    console.log(`server running on port ${PORT}`)
});