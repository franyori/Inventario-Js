
require("dotenv").config();

module.exports = {
  //configuracion de la base de datos
  username: process.env.BD_USERNAME || "franyori",
  password: process.env.BD_PASSWORD || "franyori",
  database: process.env.BD_DATABASE || "inventario",
  host: process.env.BD_HOST || "localhost",
  dialect: process.env.BD_DIALECT || "mysql",

  //configuracion de seeder
  seederStorage: "sequelize",
  seederStorageTableName: "seeds",

  ///configuracion de migraciones

  migrationStorage: "sequelize",
  migrationStorageTableName: "migrations",
};


/* {
  "development": {
    "username": "root",
    "password": null,
    "database": "database_development",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
 */