'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class servicio extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  servicio.init({
    nombreServicio: DataTypes.STRING,
    clasificacionServ: DataTypes.INTEGER,
    estadoServicio: DataTypes.BOOLEAN,
    encargadoServicio: DataTypes.STRING,
    descripcionServicio: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'servicio',
  });
  return servicio;
};