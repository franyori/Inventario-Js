'use strict'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Productos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre_prod: {
        type: Sequelize.STRING,
        allowNull: false
      },
      descripcion_prod: {
        type: Sequelize.STRING
      },
      costo_prod: {
        type: Sequelize.FLOAT,
        defaultValue: 0,
        allowNull: false
      },
      precio_prod: {
        type: Sequelize.FLOAT,
        defaultValue: 0,
        allowNull: false
      },
      codigo_prod: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        allowNull: false
      },
      impuesto_prod: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      utilidad_prod: {
        type: Sequelize.STRING
      },
      bodegaId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Bodegas',
          key: 'id'
        },
        allowNull: false
      },
      categoriaId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Categoria',
          key: 'id'
        },
        allowNull: false
      },
      presentacionProdId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'PresentacionProds',
          key: 'id'
        },
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
    await queryInterface.dropTable('Productos')
  }
}
