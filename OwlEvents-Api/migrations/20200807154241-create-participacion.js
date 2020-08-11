'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('participacions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      jugador_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
             model: 'usuarios',
             key: 'id'
        },
      },
      juego_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
             model: 'juegos',
             key: 'id'
        },
    },
      status: {
        type: Sequelize.CHAR
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
    await queryInterface.dropTable('participacions');
  }
};