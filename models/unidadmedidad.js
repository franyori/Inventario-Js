'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UnidadMedidad extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  UnidadMedidad.init({
    nombre_unidad: DataTypes.STRING,
    descripcion_unidad: DataTypes.STRING,
    cantidad_unidad: DataTypes.INTEGER,
    status_unidad: DataTypes.STRING
    
  }, {
    sequelize,
    modelName: 'UnidadMedidad',
  });
  return UnidadMedidad;
};