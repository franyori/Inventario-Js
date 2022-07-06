'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Proveedor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      Proveedor.belongsTo(models.Persona, {
        foreignKey: 'personaId',
        as: 'Persona'
      }),
        Proveedor.belongsTo(models.Empresa, {
          foreignKey: 'empresaId',
          as: 'Empresa'
        })
    }
  }
  Proveedor.init(
    {
      personaId: DataTypes.INTEGER,
      empresaId: DataTypes.INTEGER,
      status_prov: DataTypes.STRING,
      detalle_prov: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Proveedor'
    }
  )
  return Proveedor
}
