'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class CompraDetalle extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      CompraDetalle.belongsTo(models.Compra,{
        foreignKey:'compraId',
        as: 'Compra'
      })
      CompraDetalle.belongsTo(models.Producto,{
        foreignKey:'productoId',
        as: 'Producto'
      })
      CompraDetalle.belongsTo(models.FormaPago,{
        foreignKey:'formaPagoId',
        as: 'FormaPago'
      })


    }
  }
  CompraDetalle.init(
    {
      compraId: DataTypes.INTEGER,
      productoId: DataTypes.INTEGER,
      formaPagoId: DataTypes.INTEGER,
      cantidad_detalle: DataTypes.INTEGER,
      impuestoPorcent_detalle: DataTypes.INTEGER,
      impuestoTotal_detalle: DataTypes.FLOAT,
      descuentoPorcent_detalle: DataTypes.FLOAT,
      descuentoTotal_detalle: DataTypes.FLOAT,
      subtotal_detalle: DataTypes.FLOAT,
      total_detalle: DataTypes.FLOAT,
      total_detalle: DataTypes.FLOAT
    },
    {
      sequelize,
      modelName: 'CompraDetalle'
    }
  )
  return CompraDetalle
}
