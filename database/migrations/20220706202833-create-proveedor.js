'use strict'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Proveedors', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      personaId: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: 'Personas',
          key: 'id'
        },
        allowNull: false
      },
      empresaId: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: 'Empresas',
          key: 'id'
        },
        allowNull: false
      },
      status_prov: {
        type: Sequelize.STRING
      },
      detalle_prov: {
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
    await queryInterface.dropTable('Proveedors')
  }
}
