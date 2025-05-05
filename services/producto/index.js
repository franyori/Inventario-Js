const {
  Producto
} = require('../../models/index')

async function store(params) {
  return Producto.create({
    ...params,
    Stock: [{
      cantidad_inicial: parseInt(params.cantidad_inicial),
      cantidad_actual: parseInt(params.cantidad_inicial),
      cantidad_reservda: parseInt(params.cantidad_reservda),
      productoId: ''
    }]
  }, {
    include: [{
      all: true,
      nested: true
    }]
  }).catch(error => {
    //console.log(error)
    return Promise.reject(error)
  })
}

async function getAll(filters) {
  return Producto.findAll({
    where: {
      ...filters
    },
    include: [
      {
        association: 'PresentacionProd'
      }
    ]
  }).catch(error => {
    return Promise.reject(error)
  })
}

async function getOne(filters) {
  return Producto.findOne({
    where: {
      ...filters
    },
    raw: true,

    include: [{
        association: 'Categoria'
      },
      {
        association: 'Bodega'
      },
      {
        association: 'PresentacionProd'
      },
      {
        association: 'Stock'
      }
    ]
  }).catch(error => {
    return Promise.reject(error)
  })
}

async function update(params, filters) {
  return Producto.update(params, {
    where: {
      ...filters
    }
  }).catch(error => {
    return Promise.reject(error)
  })
}

async function changePriceAll(params) {
  try {
    const productos = await Producto.findAll();

    const updates = productos.map(producto => {
      const nuevosPrecios = {
        precio_bcv: producto.precio_prod * params.precio_bcv,
        precio_paralelo: producto.precio_prod * params.precio_paralelo,
        precio_promedio: producto.precio_prod * params.precio_promedio
      };

      return Producto.update(nuevosPrecios, {
        where: { id: producto.id } 
      });
    });

    const results = await Promise.all(updates);
    const totalActualizados = results.reduce((sum, result) => sum + result[0], 0);

    return { 
      success: true,
      message: `${totalActualizados} productos actualizados.`
    };

  } catch (error) {
    throw error; 
  }
}

async function destroy(filters) {
  return Producto.destroy({
    where: {
      ...filters
    }
  }).catch(error => {
    return Promise.reject(error)
  })
}

module.exports = {
  store,
  getAll,
  getOne,
  update,
  destroy,
  changePriceAll
}