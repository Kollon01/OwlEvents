'use strict';
const {
  Model
} = require('sequelize');

const { v4: uuidv4 } = require('uuid');

module.exports = (sequelize, DataTypes) => {
  class Classification extends Model {

    static associate(models) {
      models.Classification.hasMany(models.Service, {foreignKey: {
        allowNull: false
      }, onDelete: 'CASCADE'});
    }
  };
  Classification.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue: () => uuidv4(),
    },
    name: DataTypes.STRING,
    iconUrl: DataTypes.STRING,
    description: DataTypes.STRING,
  }, {
    sequelize,
    timestamps: false,
    modelName: 'Classification',
  });

  return Classification;
};