const express = require("express");
const app = express();
const cors = require("cors");
const {
  sequelize
} = require("./models/index");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const compression = require("compression");
var cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
dotenv.config({
  path: '.env'
});

//Rutas 
var indexRouter = require('./routes/index');
var categoriaRouter = require('./routes/categoria')

//configuracion
app.set("port", process.env.PORT || 3030);
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cors());
app.use(compression());
app.use(helmet());
app.use(cookieParser());
//configuracion

//Rutas use
app.use('/', indexRouter);
app.use('/categoria', categoriaRouter)


//Rutas use

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
module.exports = app;