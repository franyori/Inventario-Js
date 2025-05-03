'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const constraints = await queryInterface.getForeignKeyReferencesForTable('Productos');
    const categoriaConstraint = constraints.find(c => c.columnName === 'categoria');
    
    if (categoriaConstraint) {
      await queryInterface.removeConstraint(
        'Productos', 
        categoriaConstraint.constraintName
      );
    }

    const indexes = await queryInterface.showIndex('Productos');
    const categoriaIndex = indexes.find(idx => 
      idx.fields.includes('categoria') || 
      idx.name.includes('categoria')
    );
    
    if (categoriaIndex) {
      await queryInterface.removeIndex('Productos', categoriaIndex.name);
    }

    await queryInterface.changeColumn('Productos', 'categoria', {
      type: Sequelize.JSON,
      allowNull: false,
      defaultValue: [],
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('Productos', 'categoria', {
      type: Sequelize.INTEGER,
      allowNull: false,
    });

    await queryInterface.addConstraint('Productos', {
      fields: ['categoria'],
      type: 'foreign key',
      references: {
        table: 'Categoria',
        field: 'id',
      },
    });
  }
};