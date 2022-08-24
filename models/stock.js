'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Stock extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      Stock.belongsTo(models.Producto, {
        foreignKey: 'productoId',
        as: 'Producto'
      })
    }
  }
  Stock.init(
    {
      cantidad_inicial: DataTypes.INTEGER,
      cantidad_actual: DataTypes.INTEGER,
      cantidad_reservda: DataTypes.INTEGER,
      productoId: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'Stock'
    }
  )
  return Stock
}
