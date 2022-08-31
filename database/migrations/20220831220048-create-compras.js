'use strict'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Compras', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      numReferencia_compra: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      proveedorId: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: 'Proveedors',
          key: 'id'
        },
        allowNull: false
      },
      impuestoPorcent_compra: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      descuentoPorcent_compra: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      impuesTotal_compra: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      descuentotal_compra: {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: 0
      },
      subtotal_compra: {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: 0
      },
      total_compra: {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: 0
      },
      status_compra: {
        type: Sequelize.STRING,
        allowNull: false
      },
      formapagoId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'FormaPagos',
          key: 'id'
        },
        allowNull: false
      },
      fecha_compra: {
        type: Sequelize.DATE,
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
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Compras')
  }
}
