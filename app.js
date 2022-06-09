const express = require("express");
const app = express();
const cors = require("cors");
const { sequelize } = require("./app/models/index");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const compression = require("compression");
const dotenv = require('dotenv');
dotenv.config({path:'.env'});

//configuracion
app.set("port", process.env.PORT || 3030);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(compression());
app.use(helmet());
app.use(cookieParser());


app.listen(app.get("port"), "localhost", function () {
  console.log("Corriendos Servidor Puerto 3030");

  sequelize
    .authenticate()
    .then(() => {
      console.log("Nos hemos conectado a la Base de Datos");
    })
    .catch((err) => {
      console.log("Error de conexion a la base de Datos");
    });
});
