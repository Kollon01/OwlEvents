const Sequelize     = require('sequelize');
const servicio       = require('../models').servicio;
module.exports = {
//Listar
 list( req, res) {
     return servicio.findAll({})
        .then(servicios => res.status(200).send(servicios))
        .catch(error => res.status(400).send(error))
 }
};