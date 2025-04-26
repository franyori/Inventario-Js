'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Productos', 'precio_bcv', {
      type: Sequelize.FLOAT,
      defaultValue: 0,
      allowNull: false,
      comment: 'Precio según el Banco Central de Venezuela'
    });

    await queryInterface.addColumn('Productos', 'precio_promedio', {
      type: Sequelize.FLOAT,
      defaultValue: 0,
      allowNull: false,
      comment: 'Precio promedio del mercado'
    });

    await queryInterface.addColumn('Productos', 'precio_paralelo', {
      type: Sequelize.FLOAT,
      defaultValue: 0,
      allowNull: false,
      comment: 'Precio en el mercado paralelo'
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Productos', 'precio_bcv');
    await queryInterface.removeColumn('Productos', 'precio_promedio');
    await queryInterface.removeColumn('Productos', 'precio_paralelo');
  }
};
