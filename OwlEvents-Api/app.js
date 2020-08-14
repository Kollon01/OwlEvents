//Routers Export
//import {userRoutes} from "./routes/usuario.route";
const express                     = require('express');
const logger                    = require('morgan');
const bodyParser                = require('body-parser');
const Models = require('./models');
const Seeder = require('./config/seed');

const http = require('http');
// Set up the express app
const app = express();

// Log requests to the console.
app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// Importa todas las rutas
require('./routes')(app);

const port = parseInt(process.env.PORT, 10) || 8000;
app.set('port', port);

// Setting up bd
// Esta logica hay que moverla a un archivo aparte en una funciona y llamarla aca.
// Para hacer el seed desde ahi y que esto no se empuerque. Pero eso lo hago yo porque ...
// Esa funcion recibira un call back que va llamar lo que estan en el then

Models.sequelize.sync({ force : true}) //Esto sincroniza todos los modelos
 .then(function() {

    Seeder.seedDB();
    const server = http.createServer(app);
    server.listen(port);
})
.catch((err) => {
    console.log(err);
});
//

module.exports = app;