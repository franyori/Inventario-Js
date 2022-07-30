'use strict'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Empresas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre_empre: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
      },
      rif_empre: {
        type: Sequelize.INTEGER,
        unique: true,
        isNumeric: true,
        allowNull: false
      },
      representante_empre: {
        type: Sequelize.STRING
      },
      direccion_empre: {
        type: Sequelize.STRING
      },
      tlf_local_empre: {
        type: Sequelize.STRING
      },
      tlf_celular_empre: {
        type: Sequelize.STRING
      },
      correo_empre: {
        type: Sequelize.STRING
      },
      porltal_web_empre: {
        type: Sequelize.STRING
      },
      tipo_empre: {
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
    await queryInterface.dropTable('Empresas')
  }
}
