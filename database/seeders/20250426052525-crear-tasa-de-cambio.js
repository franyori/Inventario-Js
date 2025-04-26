'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('TasasCambio', [{
      precio_bcv: 36.50,
      precio_promedio: 37.20,
      precio_paralelo: 38.10,
      fecha_actualizacion: new Date(),
      usuario_actualizacion: 'admin',
      activo: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('TasasCambio', null, {});
  }
};