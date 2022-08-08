'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Bodega extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      // define association here
    }
  }
  Bodega.init(
    {
      nombre_bodega: DataTypes.STRING,
      descripcion_bodega: DataTypes.STRING,
      ubicacion_bodega: DataTypes.STRING,
      status_bodega: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Bodega'
    }
  )
  return Bodega
}
