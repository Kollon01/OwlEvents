'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('servicios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombreServicio: {
        type: Sequelize.STRING
      },
      clasificacionServ: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
             model: 'usuarios',
             key: 'id'
        },
      },
      estadoServicio: {
        type: Sequelize.BOOLEAN
      },
      encargadoServicio: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
             model: 'usuarios',
             key: 'id'
        },
      },
      descripcionServicio: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('servicios');
  }
};