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
      servicio.belongsTo(models.usuario,
        {
            as: 'encargado',
            foreignKey: 'encargadoServicio',
        }
      );
      servicio.belongsTo(models.clasificacion,
        {
            as: 'clasificacion',
            foreignKey: 'clasificacionServ',
        }
      );
    }
  };
  servicio.init({
    nombreServicio: DataTypes.STRING,
    clasificacionServ: DataTypes.INTEGER,
    estadoServicio: DataTypes.BOOLEAN,
    encargadoServicio: DataTypes.INTEGER,
    descripcionServicio: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'servicio',
  });
  return servicio;
};