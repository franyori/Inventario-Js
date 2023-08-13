'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Compra extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      Compra.belongsTo(models.FormaPago, {
        foreignKey: 'formapagoId',
        as: 'FormaPago'
      })

      Compra.belongsTo(models.Proveedor, {
        foreignKey: 'proveedorId',
        as: 'Proveedor'
      })
      Compra.hasMany(models.CompraDetalle,{
        foreignKey:'compraId',
        as:'CompraDetalle'
      })
    }
  }
  Compra.init(
    {
      numReferencia_compra: DataTypes.INTEGER,
      proveedorId: DataTypes.INTEGER,
      impuestoPorcent_compra: DataTypes.INTEGER,
      descuentoPorcent_compra: DataTypes.INTEGER,
      impuesTotal_compra: DataTypes.INTEGER,
      descuentotal_compra: DataTypes.FLOAT,
      subtotal_compra: DataTypes.FLOAT,
      total_compra: DataTypes.FLOAT,
      status_compra: DataTypes.STRING,
      formapagoId: DataTypes.INTEGER,
      fecha_compra: DataTypes.DATE
    },
    {
      sequelize,
      modelName: 'Compra'
    }
  )
  return Compra
}
