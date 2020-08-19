const { Op, Sequelize }     = require('sequelize');
const Service       = require('../models').Service;

/*
- Buscar(Todo): Si,
- Crear: Si,
- Buscar(ByTitle): Si,
*/ 

module.exports = {
//Buscar
    find( req, res) {
        return Service.findAll({})
            .then(Services => res.status(200).send(Services))
            .catch(error => res.status(400).send(error))
    },
//Crear    
    create(req, res) {
        return Service
            .create ({
                title: req.body.title,
                body: req.body.body,
                ClassificationId:  req.body.ClassificationId
            })
            .then(service => {
                res.status(200).send(service)
            })
            .catch(error => res.status(400).send(error))
    },
//Buscar por Titulo
    findByTitle (req, res) {
        return Service.findAll({
            where: {
                title: req.body.title,
            }
        })
        .then(service => res.status(200).send(service))
        .catch(error => res.status(400).send(error))
    },
//Buscar por id
findById (req, res) {
    return Service.findAll({
        where: {
            id: req.params.id,
        }
    })
    .then(service => res.status(200).send(service))
    .catch(error => res.status(400).send(error))
},
//Ejemplo de Filtro, no se que pasa que cuando coloco offset y limit no me arroja los registros encontrados.
    findByTitleExpample (req, res) {
        return Service.findAndCountAll({
            where: {
                title: { 
                  [Op.like]: req.body.title + "%"
                }
            },
            order: [
                ['createdAt', 'ASC']
            ],
            offset: 10,
            limit: 2
        })
        .then(services => {
            console.log(req.body.title, "Este es el titulo"); 
            console.log(services.count, "Este es el contador");
            console.log(services.rows, "Este es el resultado"); 
            res.status(200).send(service)
        })
        .catch(error => res.status(400).send(error))
    },

};
