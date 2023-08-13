'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      Usuario.belongsTo(models.Persona, {
        foreignKey: 'personaId',
        as: 'Persona'
      })

      Usuario.belongsTo(models.Rol, {
        foreignKey: 'rolId',
        as: 'Rol'
      })
    }
  }
  Usuario.init(
    {
      personaId: DataTypes.INTEGER,
      rolId: DataTypes.INTEGER,
      usuario: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: {
            args: [6, 255],
            msg: 'la contraseña debe tener al menos 6 caracteres'
          }
        }
      },
      status_usuario: DataTypes.STRING,
      detalle_usuario: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Usuario'
    }
  )
  return Usuario
}
