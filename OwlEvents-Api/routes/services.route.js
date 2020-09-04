const serviceController = require('../controllers/services');
const authMiddleware = require("../middlewares/auth-middleware");

module.exports = function (app) {
   //app.get('/api/testMiddleware', authMiddleware, serviceController.find)
   app.post('/api/services/create', serviceController.create);
   app.delete('/api/services/:id', serviceController.get);
   app.get('/api/services/:id', serviceController.get);
   app.get('/api/services/', serviceController.find);
};