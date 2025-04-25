'use strict';
const bcrypt = require('bcrypt');

module.exports = {
  async up (queryInterface, Sequelize) {
    // Hashear la contraseña antes de guardarla
    const password = 'admin123';
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Insertar el usuario
    await queryInterface.bulkInsert('Usuarios', [{
      personaId: 1, 
      rolId: 1,     
      usuario: 'admin',
      password: hashedPassword,
      status_usuario: 'activo',
      detalle_usuario: 'Usuario administrador inicial',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {
    // Revertir la inserción
    await queryInterface.bulkDelete('Usuarios', {
      usuario: 'admin'
    }, {});
  }
};
