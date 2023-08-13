'use strict'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('CompraDetalles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      compraId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Compras',
          key: 'id'
        }
      },
      productoId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Productos',
          key: 'id'
        }
      },
      formaPagoId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'FormaPagos',
          key: 'id'
        }
      },
      cantidad_detalle: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      impuestoPorcent_detalle: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      impuestoTotal_detalle: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      descuentoPorcent_detalle: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      descuentoTotal_detalle: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      subtotal_detalle: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      total_detalle: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      fecha_detalle: {
        allowNull: false,
        type: Sequelize.DATE
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
    await queryInterface.dropTable('CompraDetalles')
  }
}
