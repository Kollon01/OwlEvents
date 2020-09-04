const { Op, Sequelize }     = require('sequelize');
const Classification = require("../models").Classification; 

const getPagination = (page, size) => {
    const limit = size ? +size : 10;
    const offset = page ? page * limit : 0;
  
    return { limit, offset };
};
  
const getPagingData = (data, page, limit) => {
    const { count: totalItems, rows: classifications } = data;
    const currentPage = page ? +page : 0;
    const totalPages = Math.ceil(totalItems / limit);
  
    return { totalItems, classifications, totalPages, currentPage };
};

module.exports = {
  
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
    get (req, res) {
        return Classification.findAll({
            where: {
                id: req.params.id,
            }
        })
        .then(classification => res.status(200).send(classification))
        .catch(error => res.status(400).send(error))
    },
    delete (req, res) {
        return Classification.destroy({
            where: {
                id: req.params.id,
            }
        })
        .then(classification => res.status(200).send(classification))
        .catch(error => res.status(400).send(error))
    },
    find (req, res) {

        const { page, size, name = '', description = ''} = req.query;
        const { limit, offset } = getPagination(page, size);

        return Classification.findAndCountAll({
            offset: offset,
            limit: limit,
            where: {
                [Op.and]: [
                    { name:         { [Op.like]: '%'+name+'%'} },
                    { description:  { [Op.like]: '%'+description+'%'} },
                ]
            }
        })
        .then(classifications => {
            const response = getPagingData(classifications, page, limit);
            res.status(200).send(response)
        })
        .catch(error => res.status(400).send(error))
    },
};
