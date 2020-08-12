module.exports = function(app) {
    const juegoController             = require("../controllers/juego");
    
   //jUEGOS
   app.post('/api/juego/create', juegoController.create);
   app.get('/api/juego/list', juegoController.list);
   app.get('/api/juego/find', juegoController.find);
}

