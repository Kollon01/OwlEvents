'use strict';

const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Service extends Model {
    static associate(models) {
      models.Service.belongsTo(models.Classification);
    }
  };
  Service.init({
    title: DataTypes.STRING,
    body: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Service',
  });
  
  return Service;
};