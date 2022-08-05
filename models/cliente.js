'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Cliente extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      Cliente.belongsTo(models.Persona, {
        foreignKey: 'personaId',
        as: 'Persona'
      })
    }
  }
  Cliente.init(
    {
      personaId: DataTypes.INTEGER,
      status_client: DataTypes.STRING,
      detalle_client: DataTypes.STRING,
      tipo_client: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Cliente'
    }
  )
  return Cliente
}
