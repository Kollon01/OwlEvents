const _ = require('lodash');

const Classification = require("../models").Classification;
const classificationSeed = require("../seeds/classification.seed");

const Services = require("../models").Service;
const ServicesSeed = require("../seeds/services.seed");

const seedClassification = async () => {
    return Classification.bulkCreate(classificationSeed, {
        returning: true,
        raw: true,
    });
}

const seedServices = async (ServicesSeed) => {
    return Services.bulkCreate(ServicesSeed);
}

const getRandomModel = (modelCollection) => {
    return _.shuffle(modelCollection)[0];
}

const createSeeds = async () => {

    let classifications = await seedClassification();

    ServicesSeed.forEach((serv, index) => {
        ServicesSeed[index].ClassificationId = getRandomModel(classifications).id;
    });

    await seedServices(ServicesSeed);
};

module.exports.seedDB = () => {
  createSeeds();
};
