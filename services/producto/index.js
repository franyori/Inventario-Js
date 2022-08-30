const { Producto } = require('../../models/index')

async function store (params) {
  return Producto.create(
    {
      ...params,
      Stock: [
        {
          cantidad_inicial: parseInt(params.cantidad_inicial),
          cantidad_actual: parseInt(params.cantidad_inicial),
          cantidad_reservda: parseInt(params.cantidad_reservda),
          productoId: ''
        }
      ]
    },
    {
      include: [{ all: true, nested: true }]
    }
  ).catch(error => {
    //console.log(error)
    return Promise.reject(error)
  })
}

async function getAll (filters) {
  return Producto.findAll({
    where: { ...filters },
    include: [
      {
        association: 'Categoria'
      },
      {
        association: 'Bodega'
      },
      {
        association: 'PresentacionProd'
      }
    ]
  }).catch(error => {
    return Promise.reject(error)
  })
}

async function getOne (filters) {
  return Producto.findOne({
    where: { ...filters },
    include: [
      {
        association: 'Categoria'
      },
      {
        association: 'Bodega'
      },
      {
        association: 'PresentacionProd'
      }
    ]
  }).catch(error => {
    return Promise.reject(error)
  })
}

async function update (params, filters) {
  return Producto.update(params, { where: { ...filters } }).catch(error => {
    return Promise.reject(error)
  })
}

async function destroy (filters) {
  return Producto.destroy({ where: { ...filters } }).catch(error => {
    return Promise.reject(error)
  })
}

module.exports = {
  store,
  getAll,
  getOne,
  update,
  destroy
}
