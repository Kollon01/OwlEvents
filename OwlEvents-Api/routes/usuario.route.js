 module.exports = function(app) {
    const usuarioController             = require("../controllers/usuario");
    
	 //USUARIOS   
     app.post('/api/usuario/create/username/:username/status/:status', usuarioController.create);
     app.get('/api/usuario/list', usuarioController.list);
     app.get('/api/usuario/find/username/:username', usuarioController.find); 
}

