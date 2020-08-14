const Sequelize     = require('sequelize');
const Service       = require('../models').Service;

module.exports = {
    find( req, res) {
        return Service.findAll({})
            .then(Services => res.status(200).send(Services))
            .catch(error => res.status(400).send(error))
    }
};