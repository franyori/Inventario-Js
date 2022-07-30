'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Empresa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      // define association here
    }
  }
  Empresa.init(
    {
      nombre_empre: DataTypes.STRING,
      rif_empre: DataTypes.NUMBER,
      representante_empre : DataTypes.STRING,
      direccion_empre: DataTypes.STRING,
      tlf_local_empre: DataTypes.STRING,
      tlf_celular_empre: DataTypes.STRING,
      correo_empre: DataTypes.STRING,
      porltal_web_empre: DataTypes.STRING,
      tipo_empre: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Empresa'
    }
  )
  return Empresa
}
