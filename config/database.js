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
    "username": "venecol_admin",
    "password": "Test!123",
    "database": "venecol",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "port": "3306"
  },
  "test": {
    "username": "mayoristas_venecol",
    "password": "password2020*.-",
    "database": "mayoristas_venecol",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "port": "5006"
  },
  "production": {
    "username": "mayoristas_venecol",
    "password": "password2020*.-",
    "database": "mayoristas_venecol",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "port": "5006"
  }
} */
