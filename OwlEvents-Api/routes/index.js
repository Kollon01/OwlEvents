/* Controllers */
const usuarioController             = require("../controllers/usuario");
const juegoController               = require('../controllers/juego');
const participacionController       = require('../controllers/participacion');
const serviceController             = require('../controllers/servicios');

const authMiddleware = require("../middlewares/auth-middleware");

module.exports = (app) => {

   app.get('/api', (req, res) => res.status(200).send ({
        message: 'Example project did not give you access to the api web services',
   }));

   app.get('/api/testMiddleware', authMiddleware,  usuarioController.list)

   //USUARIOS   
   app.post('/api/usuario/create/username/:username/status/:status', usuarioController.create);

   app.get('/api/usuario/list', usuarioController.list);

   app.get('/api/usuario/find/username/:username', usuarioController.find);
   //jUEGOS
   app.post('/api/juego/create', juegoController.create);

   app.get('/api/juego/list', juegoController.list);

   app.get('/api/juego/find', juegoController.find);
   //PARTICIPACION
   app.post('/api/participacion/create', participacionController.create);

   app.get('/api/participacion/list', participacionController.list);

   app.get('/api/participacion/find', participacionController.find);

   //* Estoy hay que cambiarlo para que el archivo de rutas no crezca. Sino tener este de master para importar rutas*/
   
   app.get('/api/services/all', serviceController.list);
};