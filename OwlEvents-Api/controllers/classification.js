const { Op, Sequelize }     = require('sequelize');
/*const Service       = require('../models').Service;*/
const Classification = require("../models").Classification; 

/*
- Buscar(Todo): Si,
- Crear: Si,
- Buscar(ByTitle): Si,
*/ 

module.exports = {
//Buscar
    find( req, res) {
        return Classification.findAll({})
            .then(classification => res.status(200).send(classification))
            .catch(error => res.status(400).send(error))
    },
//Crear    
    create(req, res) {
        return Classification
            .create ({
                name: req.body.name,
                iconUrl: req.body.iconUrl,
                description: req.body.description
            })
            .then(classification => {
                res.status(200).send(classification)
            })
            .catch(error => res.status(400).send(error))
    },
//Buscar por Name
    findByName (req, res) {
        return Classification.findAll({
            where: {
                name: req.body.name,
            }
        })
        .then(classification => res.status(200).send(classification))
        .catch(error => res.status(400).send(error))
    },
//Buscar por id
findById (req, res) {
    return Classification.findAll({
        where: {
            id: req.params.id,
        }
    })
    .then(classification => res.status(200).send(classification))
    .catch(error => res.status(400).send(error))
},
/*
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
*/
};
