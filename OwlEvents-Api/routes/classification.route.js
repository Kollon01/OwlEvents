const serviceController = require('../controllers/services');
const classificationController = require('../controllers/classification');
const authMiddleware = require("../middlewares/auth-middleware");

module.exports = function (app) {
   app.get('/api/testMiddleware', authMiddleware, classificationController.find)
   app.get('/api/classification/all', classificationController.find);
   app.post('/api/classification/create', classificationController.create);
   //app.get('/api/classification/find/:id', classificationController.findById);
   app.get('/api/classification/findByName', classificationController.findByName);

   //filtro example
   //app.get('/api/classification/example', classificationController.findByTitleExpample);
};

