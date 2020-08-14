const Classification = require("../models").Classification;
const classificationSeed = require("../seeds/classification.seed");

const Services = require("../models").Service;
const ServicesSeed = require("../seeds/services.seed");
//Funcion para id random 
function IdRandom() {
  return Math.ceil(Math.random() * (classificationSeed.length - 0) + 0) - 1;
}
//esto se va a mejorar luego. Por ahora hagamos un metodo para caa uno
const createSeeds = async () => {
  var idList = [];
  await Classification.bulkCreate(classificationSeed, {
    returning: true,
    raw: true,
  })
    .then(function (rs) {
      rs.forEach((element) => {
        idList.push({
          Id: element.dataValues.id,
        });
      });
    })
    .then(function (rs) {
      ServicesSeed.forEach((serv, index) => {
        ServicesSeed[index].ClassificationId = idList[IdRandom()].Id;
      });
    })
    .catch(function (error) {
      console.log("Error during Post: " + error);
    });
  await Services.bulkCreate(ServicesSeed).catch(function (error) {
    console.log("Error during Post: " + error);
  });
};

module.exports.seedDB = () => {
  createSeeds();
};
