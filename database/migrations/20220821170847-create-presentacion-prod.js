'use strict'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('PresentacionProds', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre_present: {
        type: Sequelize.STRING
      },
      descripcion_present: {
        type: Sequelize.STRING
      },
      unidadMedidadId: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: 'UnidadMedidads',
          key: 'id'
        },
        allowNull: false
      },
      abreviatura_present: {
        type: Sequelize.STRING
      },
      status_present: {
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
    await queryInterface.dropTable('PresentacionProds')
  }
}
