'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Producto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      Producto.belongsTo(models.PresentacionProd, {
        foreignKey: 'presentacionProdId',
        as: 'PresentacionProd'
      })
      Producto.hasMany(models.Stock, {
        as: "Stock",
        foreignKey: "productoId",
      });
    }
  }
  Producto.init(
    {
      nombre_prod: DataTypes.STRING,
      descripcion_prod: DataTypes.STRING,
      costo_prod: DataTypes.FLOAT,
      precio_prod: DataTypes.FLOAT,
      codigo_prod: DataTypes.INTEGER,
      impuesto_prod: DataTypes.INTEGER,
      utilidad_prod: DataTypes.STRING,
      categoria: DataTypes.JSON,
      presentacionProdId: DataTypes.INTEGER,
      precio_bcv: {
      type: DataTypes.FLOAT,
      defaultValue: 0,
      allowNull: false
      },
      precio_promedio: {
        type: DataTypes.FLOAT,
        defaultValue: 0,
        allowNull: false
      },
      precio_paralelo: {
        type: DataTypes.FLOAT,
        defaultValue: 0,
        allowNull: false
      }
    },
    {
      sequelize,
      modelName: 'Producto'
    }
  )
  return Producto
}
