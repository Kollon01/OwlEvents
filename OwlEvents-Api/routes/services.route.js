const serviceController = require('../controllers/services');
const authMiddleware = require("../middlewares/auth-middleware");

module.exports = function (app) {
   app.get('/api/testMiddleware', authMiddleware, serviceController.find)
   app.get('/api/services/all', serviceController.find);
   app.post('/api/services/create', serviceController.create);
   app.get('/api/services/find/:id', serviceController.findById);
   app.get('/api/services/findByTitle', serviceController.findByTitle);

   //filtro example
   app.get('/api/services/example', serviceController.findByTitleExpample);
};