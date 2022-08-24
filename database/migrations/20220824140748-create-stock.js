'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Stocks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cantidad_inicial: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        allowNull: false
      },
      cantidad_actual: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        allowNull: false
      },
      cantidad_reservda: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      productoId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Productos',
          key: 'id'
        },
        allowNull: false
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
    await queryInterface.dropTable('Stocks');
  }
};