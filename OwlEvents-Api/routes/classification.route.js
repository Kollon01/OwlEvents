const serviceController = require('../controllers/services');
const classificationController = require('../controllers/classification');
const authMiddleware = require("../middlewares/auth-middleware");

module.exports = function (app) {
   //app.get('/api/testMiddleware', authMiddleware, classificationController.find)
   app.post('/api/classification/create', classificationController.create);
   app.get('/api/classification/:id', classificationController.get);
   app.delete('/api/classification/:id', classificationController.delete);
   app.get('/api/classification', classificationController.find);

};

