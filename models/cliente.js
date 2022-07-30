'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class cliente extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      cliente.belongsTo(models.Persona, {
        foreignKey: 'personaId',
        as: 'Persona'
      })
    }
  }
  cliente.init(
    {
      personaId: DataTypes.INTEGER,
      status_client: DataTypes.STRING,
      detalle_client: DataTypes.STRING,
      tipo_client: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'cliente'
    }
  )
  return cliente
}
