'use strict'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('UnidadMedidads', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre_unidad: {
        type: Sequelize.STRING
      },
      descripcion_unidad: {
        type: Sequelize.STRING
      },
      cantidad_unidad: {
        type: Sequelize.INTEGER
      },
      status_unidad: {
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
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('UnidadMedidads')
  }
}
