
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class clasificacion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  clasificacion.init({
    id: {
          primaryKey: true,
          type: DataTypes.UUID
        },
    nombre: DataTypes.STRING,
    iconURL: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'clasificacion',
  });
  return clasificacion;
};