'use strict'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Personas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nacionalidad_per: {
        allowNull: false,
        type: Sequelize.STRING
      },
      tipo_per: {
        allowNull: false,
        type: Sequelize.STRING
      },
      documento_per: {
        allowNull: false,
        type: Sequelize.INTEGER,
        unique: true,
        isNumeric: true
      },
      tipo_per: {
        allowNull: false,
        type: Sequelize.STRING
      },
      nombres_per: {
        allowNull: false,
        type: Sequelize.STRING
      },
      apellidos_per: {
        allowNull: false,
        type: Sequelize.STRING
      },
      correo_per: {
        type: Sequelize.STRING
      },
      tlf_per: {
        type: Sequelize.STRING
      },
      direccion_per: {
        type: Sequelize.STRING
      },
      fecha_nac_per: {
        type: Sequelize.STRING
      },
      genero_per: {
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
    await queryInterface.dropTable('Personas')
  }
}
