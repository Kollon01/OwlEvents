const { Op, Sequelize }     = require('sequelize');
const Service       = require('../models').Service;

const getPagination = (page, size) => {
    const limit = size ? +size : 10;
    const offset = page ? page * limit : 0;
  
    return { limit, offset };
};
  
const getPagingData = (data, page, limit) => {
    const { count: totalItems, rows: services } = data;
    const currentPage = page ? +page : 0;
    const totalPages = Math.ceil(totalItems / limit);
  
    return { totalItems, services, totalPages, currentPage };
};

module.exports = {
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
    get (req, res) {
        return Service.findAll({
            where: {
                id: req.params.id,
            }
        })
        .then(service => res.status(200).send(service))
        .catch(error => res.status(400).send(error))
    },
    delete (req, res) {
        return Service.destroy({
            where: {
                id: req.params.id,
            }
        })
        .then(service => res.status(200).send(service))
        .catch(error => res.status(400).send(error))
    },
    find( req, res) {
        const { page, size, title = ''} = req.query;
        const { limit, offset } = getPagination(page, size);

        return Service.findAndCountAll({
            offset: offset,
            limit: limit,
            order: [
                ['createdAt', 'DESC'],
            ],
            where: {
                [Op.and]: [
                    { title:         { [Op.like]: '%'+title+'%'} }
                ]
            }
        })
        .then(services => {
            const response = getPagingData(services, page, limit);
            res.status(200).send(response)
        })
        .catch(error => res.status(400).send(error))
    },
};
