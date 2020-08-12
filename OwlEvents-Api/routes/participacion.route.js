module.exports = function(app) {
    const participacionController             = require("../controllers/participacion");
    
//PARTICIPACION
app.post('/api/participacion/create', participacionController.create);
app.get('/api/participacion/list', participacionController.list);
app.get('/api/participacion/find', participacionController.find);
}