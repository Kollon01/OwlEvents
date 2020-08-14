const Classification = require('../models').Classification;

//esto se va a mejorar luego. Por ahora hagamos un metodo para caa uno
const seedClassification = async () => {
    return await Classification.bulkCreate([
        { name: 'Automovil', iconUrl: "https://picsum.photos/200", description: "Servicio tecnico, reparaciones, auto-partes, etc"},
        { name: 'Alimentos', iconUrl: "https://picsum.photos/200", description: "Bartender, Comida para fiestas"},
        { name: 'Educacion', iconUrl: "https://picsum.photos/200", description: "Educacion en general"},
        { name: 'Fiesta', iconUrl: "https://picsum.photos/200", description: "Ya me aburri de llenar datos"},
        { name: 'Apartamentos', iconUrl: "https://picsum.photos/200", description: "Ya me aburri de llenar datos"}
    ]);
}

const seedServices = async (classifications) => {
    //por cada categoria crear al menos 2 servicios con datos lorem ipsum
}


module.exports.seedDB = () => {
    let classifications = seedClassification();
}