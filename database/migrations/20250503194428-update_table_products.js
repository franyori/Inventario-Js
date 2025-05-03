'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // 1. Eliminar la columna `bodegaId` (si existe)
    const columns = await queryInterface.describeTable('Productos');
    if (columns.bodegaId) {
      await queryInterface.removeColumn('Productos', 'bodegaId');
    }

    // 2. Eliminar la FK de `categoriaId` (si existe)
    const constraints = await queryInterface.getForeignKeyReferencesForTable('Productos');
    const categoriaConstraint = constraints.find(c => c.columnName === 'categoriaId');
    
    if (categoriaConstraint) {
      await queryInterface.removeConstraint(
        'Productos', 
        categoriaConstraint.constraintName
      );
    }

    // 3. Cambiar el tipo de `categoriaId` a STRING
    await queryInterface.changeColumn('Productos', 'categoriaId', {
      type: Sequelize.STRING,
      allowNull: false,
    });

    // 4. Renombrar `categoriaId` a `categoria`
    await queryInterface.renameColumn('Productos', 'categoriaId', 'categoria');
  },

  down: async (queryInterface, Sequelize) => {
    // Revertir los cambios (en orden inverso)
    await queryInterface.renameColumn('Productos', 'categoria', 'categoriaId');

    await queryInterface.changeColumn('Productos', 'categoriaId', {
      type: Sequelize.INTEGER,
      allowNull: false,
    });

    // Recrear la FK (opcional, si es necesaria en el modelo)
    await queryInterface.addConstraint('Productos', {
      fields: ['categoriaId'],
      type: 'foreign key',
      name: 'productos_categoriaId_fk',
      references: {
        table: 'Categoria',
        field: 'id',
      },
      onDelete: 'CASCADE', // o 'SET NULL' según tu caso
      onUpdate: 'CASCADE',
    });

    // Volver a agregar `bodegaId` (si era necesario)
    const columns = await queryInterface.describeTable('Productos');
    if (!columns.bodegaId) {
      await queryInterface.addColumn('Productos', 'bodegaId', {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Bodegas', key: 'id' },
      });
    }
  },
};