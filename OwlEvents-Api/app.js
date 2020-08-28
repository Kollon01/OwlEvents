//import {userRoutes} from "./routes/usuario.route";
const express                     = require('express');
const logger                    = require('morgan');
const bodyParser                = require('body-parser');
const Models = require('./models');
const Seeder = require('./config/seed');
const cors = require("cors"); 
const http = require('http');
// Set up the express app
const app = express();

// Log requests to the console.
app.use(logger('dev'));
app.use(cors()); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./routes')(app);

const port = parseInt(process.env.PORT, 10) || 8001;
app.set('port', port);

Models.sequelize.sync({ force : true})
 .then(function() {

    Seeder.seedDB();
    const server = http.createServer(app);
    server.listen(port);
})
.catch((err) => {
    console.log(err);
});

module.exports = app;