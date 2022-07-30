'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Persona extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      
    }
  }
  Persona.init(
    {
      nacionalidad_per: DataTypes.STRING,
      tipo_per: DataTypes.STRING,
      documento_per: DataTypes.NUMBER,
      nombres_per: DataTypes.STRING,
      apellidos_per: DataTypes.STRING,
      correo_per: DataTypes.STRING,
      tlf_per: DataTypes.STRING,
      direccion_per: DataTypes.STRING,
      fecha_nac_per: DataTypes.STRING,
      genero_per: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Persona'
    }
  )
  return Persona
}
