const serviceController = require('../controllers/services');
const authMiddleware = require("../middlewares/auth-middleware");

module.exports = function (app) {
   app.get('/api/testMiddleware', authMiddleware, serviceController.find)
   app.get('/api/services/all', serviceController.find);
};