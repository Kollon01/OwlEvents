const Classification = require('../models').Classification;
const classificationSeed = require("../seeds/classification.seed");

const Services = require('../models').Service;
const ServicesSeed = require("../seeds/services.seed");
//esto se va a mejorar luego. Por ahora hagamos un metodo para caa uno
const createSeeds = async () => {
     await Classification.bulkCreate(classificationSeed);
     //await Services.bulkCreate(ServicesSeed);
}

module.exports.seedDB = () => {
    createSeeds(); 
}