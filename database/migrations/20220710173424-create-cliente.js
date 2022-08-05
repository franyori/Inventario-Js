'use strict'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Clientes', {
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
      status_client: {
        allowNull: false,
        type: Sequelize.STRING
      },
      detalle_client: {
        allowNull: false,
        type: Sequelize.STRING
      },
      tipo_client: {
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
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Clientes')
  }
}
