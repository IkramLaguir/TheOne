// on crée le serveur web sur le port 3000
const express = require ('express');
const app = express ();
const  bodyParser = require('body-parser');

// body-parser permet de récupérer facilement les données passées en POST:
// l'équivalent de $_POST['toto'] est alors req.body.post. Comme, à terme,
// votre application Angular enverra ses données au format JSON, on demande
// au body parser de parser uniquement ce format.

// const bodyParser = require('body-parser');
// app.use(bodyParser.json());

// // parse requests of content-type - application/json
// app.use(express.json());

// // parse requests of content-type - application/x-www-form-urlencoded
// app.use(express.urlencoded({ extended: true }));

// app.use(bodyParser()); //Now deprecated
// app.use(bodyParser.urlencoded());
// app.use(bodyParser.json());

// parse application/json
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse the raw data
app.use(bodyParser.raw());
// parse text
app.use(bodyParser.text());


// permet d'éviter le problème de CORS que l'on avait déjà vu
const cors = require ('cors');
app.use(cors({origin: 'http://localhost:4200', credentials: true}));


//Configuration Mongodb
const db = require('./models');
db.mongoose
    .connect(db.uri,{ 
        useNewUrlParser: true,
        useUnifiedTopology: true 
    })
    .then(() => {
        console.log('Connected to the database !')
    })    
    .catch(err => {
        console.log('Cannot connect to the database !',err);
        process.exit();
    });
const port = process.env.PORT || 3000;

require('./routes/user.routes')(app);

app.listen(port, () => {console.log (`listening on port ${port}`)});