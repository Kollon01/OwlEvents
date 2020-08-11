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
    encargado: {
      type: DataTypes.VIRTUAL,
      get() {

        //este bicho postiso hay que ponerle un nombre fino y traero con un require desde arriba.
        if(this.encargadoServicio === "ENMANUELUIDD") {
          return {
            'Nombre': "Enmanuel Marval",
            'photoUrl': "www.imagen.com"
          }
        }

        // aca va la llamada a firebase para sacar la info del usuario.
        // Lo de arriba hay que refactorizarlo para extrar el usuario de prueba
        return {
            'Nombre': "Enmanuel Marval",
            'photoUrl': "www.imagen.com"
          };
      },
      set(value) {
        throw new Error('Do not try to set the `fullName` value!');
      }
    },
    descripcionServicio: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'servicio',
  });
  return servicio;
};