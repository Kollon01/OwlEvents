'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class participacion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      participacion.belongsTo(models.usuario,
        {
            as: 'usuario',
            foreignKey: 'jugador_id',
        }
      );
      participacion.belongsTo(models.juego,
        {
            as: 'juego',
            foreignKey: 'juego_id',
        }
      );
    }
  };
  participacion.init({
    jugador_id: DataTypes.INTEGER,
    juego_id: {
      type: DataTypes.INTEGER,
      allowNull: true
  },
    status: DataTypes.CHAR
  }, {
    sequelize,
    modelName: 'participacion',
  });
  return participacion;
};