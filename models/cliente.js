'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class cliente extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      // define association here
    }
  }
  cliente.init(
    {
      tipo_client: DataTypes.STRING,
      cedula_client: DataTypes.NUMBER,
      nombre_client: DataTypes.STRING,
      apellido_client: DataTypes.STRING,
      nac_client: DataTypes.STRING,
      tlf_client: DataTypes.STRING,
      email_client: DataTypes.STRING,
      razonsocial_client: DataTypes.STRING,
      dircc_client: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'cliente'
    }
  )
  return cliente
}
