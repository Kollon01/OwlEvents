//Routers Export
//import {userRoutes} from "./routes/usuario.route";
const express                     = require('express');
const logger                    = require('morgan');
const bodyParser                = require('body-parser');

const http = require('http');
// Set up the express app
const app = express();

// Log requests to the console.
app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./routes')(app);

//Routes
require("./routes/usuario.route.js")(app);
require("./routes/juego.route.js")(app);

const port = parseInt(process.env.PORT, 10) || 8000;
app.set('port', port);
const server = http.createServer(app);
server.listen(port);
module.exports = app;