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
      Producto.belongsTo(models.Bodega, {
        foreignKey: 'bodegaId',
        as: 'Bodega'
      })
      Producto.belongsTo(models.Categoria, {
        foreignKey: 'categoriaId',
        as: 'Categoria'
      })
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
      bodegaId: DataTypes.INTEGER,
      categoriaId: DataTypes.INTEGER,
      presentacionProdId: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'Producto'
    }
  )
  return Producto
}
