const _ = require('lodash');
const faker = require('faker');
const Classification = require("../models").Classification;
const Service = require("../models").Service;


const createSeeds = async () => {
    let classifications = await seedClassification();
    await seedServices(classifications, 20);
};

const seedClassification = async (total = 10) => {

    //la funcion dentro del map se puede convertir en una funcion generadora de Classificaciones 
    //e importarla en lugar del seed
    let classifications = [...new Array(total)].map(()=> ({
        name: faker.random.words(),
        iconUrl: faker.image.imageUrl(),
        description: faker.random.words(10)
    }));

    return Classification.bulkCreate(classifications, {
        returning: true,
        raw: true,
    });
}

const seedServices = async (classifications, total = 10) => {

    //la funcion dentro del map se puede convertir en una funcion generadora de Servicios 
    //e importarla en lugar del seed
    let services = [...new Array(total)].map(()=> ({
        title: faker.random.words(),
        body: faker.lorem.paragraphs(),
        ClassificationId: getRandomModel(classifications).id
    }));

    return Service.bulkCreate(services);
}

const getRandomModel = (modelCollection) => {
    return _.shuffle(modelCollection)[0];
}

module.exports.seedDB = () => {
  createSeeds();
};
