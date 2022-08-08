'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Bodegas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre_bodega: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: true,
      },
      descripcion_bodega: {
        allowNull: false,
        type: Sequelize.STRING
      },
      ubicacion_bodega: {
        type: Sequelize.STRING
      },
      status_bodega: {
        allowNull: false,
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Bodegas');
  }
};