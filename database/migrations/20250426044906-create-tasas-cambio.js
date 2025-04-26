'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('TasasCambio', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      precio_bcv: {
        type: Sequelize.FLOAT,
        allowNull: false,
        comment: 'Tasa oficial del Banco Central de Venezuela'
      },
      precio_promedio: {
        type: Sequelize.FLOAT,
        allowNull: false,
        comment: 'Tasa promedio del mercado'
      },
      precio_paralelo: {
        type: Sequelize.FLOAT,
        allowNull: false,
        comment: 'Tasa del mercado paralelo'
      },
      fecha_actualizacion: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
        comment: 'Fecha y hora de la última actualización'
      },
      usuario_actualizacion: {
        type: Sequelize.STRING,
        allowNull: true,
        comment: 'Usuario que realizó la última actualización'
      },
      activo: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true,
        comment: 'Indica si la tasa está activa para su uso'
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

    // Crear índice para búsquedas por fecha
    await queryInterface.addIndex('TasasCambio', ['fecha_actualizacion']);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('TasasCambio');
  }
};