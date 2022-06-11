'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('clientes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tipo_client: {
        allowNull: false,
        type: Sequelize.STRING
      },
      cedula_client: {
        allowNull: false,
        type: Sequelize.INTEGER,
        unique: true,
        isNumeric: true
      },
      nombre_client: {
        allowNull: false,
        type: Sequelize.STRING
      },
      apellido_client: {
        allowNull: false,
        type: Sequelize.STRING
      },
      nac_client: {
        allowNull: false,
        type: Sequelize.STRING
      },
      tlf_client: {
        allowNull: false,
        type: Sequelize.STRING
      },
      email_client: {
        allowNull: false,
        type: Sequelize.STRING
      },
      razonsocial_client: {
        allowNull: false,
        type: Sequelize.STRING
      },
      dircc_client: {
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
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('clientes');
  }
};