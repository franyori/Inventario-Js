'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class PresentacionProd extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      // define association here
      PresentacionProd.belongsTo(models.UnidadMedidad, {
        foreignKey: 'unidadMedidadId',
        as: 'UnidadMedidad'
      })
    }
  }
  PresentacionProd.init(
    {
      nombre_present: DataTypes.STRING,
      descripcion_present: DataTypes.STRING,
      unidadMedidadId: DataTypes.INTEGER,
      abreviatura_present: DataTypes.STRING,
      status_present: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'PresentacionProd'
    }
  )
  return PresentacionProd
}
