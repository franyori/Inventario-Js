'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class TasaCambio extends Model {
    static associate(models) {
      // 
    }
  }
  
  TasaCambio.init({
    precio_bcv: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        min: 0
      }
    },
    precio_promedio: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        min: 0
      }
    },
    precio_paralelo: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        min: 0
      }
    },
    fecha_actualizacion: {
      type: DataTypes.DATE,
      allowNull: false
    },
    usuario_actualizacion: DataTypes.STRING,
    activo: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  }, {
    sequelize,
    modelName: 'TasaCambio',
    tableName: 'TasasCambio',
    timestamps: true,
    paranoid: false,
    indexes: [
      {
        fields: ['fecha_actualizacion']
      }
    ]
  });

  return TasaCambio;
};