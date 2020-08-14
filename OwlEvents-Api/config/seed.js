const _ = require('lodash');
const faker = require('faker');
const Classification = require("../models").Classification;
const classificationSeed = require("../seeds/classification.seed");
const Services = require("../models").Service;

const seedClassification = async () => {
    return Classification.bulkCreate(classificationSeed, {
        returning: true,
        raw: true,
    });
}

const seedServices = async (classifications, total = 10) => {

    let ServicesSeeds = [...new Array(total)].map(()=> ({
        title: faker.random.words(),
        body: faker.lorem.paragraphs(),
        ClassificationId: getRandomModel(classifications).id
    }));

    return Services.bulkCreate(ServicesSeeds);
}

const getRandomModel = (modelCollection) => {
    return _.shuffle(modelCollection)[0];
}

const createSeeds = async () => {

    let classifications = await seedClassification();
    await seedServices(classifications, 15);
};

module.exports.seedDB = () => {
  createSeeds();
};
