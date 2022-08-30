const { Stock } = require('../../models/index')
const { Op } = require('sequelize')

async function store (params) {
  return Stock.create({
    ...params
  }).catch(error => {
    //console.log(error)
    return Promise.reject(error)
  })
}

async function getAll (filters) {
  return Stock.findAll({
    where: { ...filters },
    include: [
      {
        association: 'Producto'
      }
    ]
  }).catch(error => {
    return Promise.reject(error)
  })
}

async function getOne (filters) {
  return Stock.findOne({
    where: { ...filters },
    include: [
      {
        association: 'Producto'
      }
    ]
  }).catch(error => {
    return Promise.reject(error)
  })
}
async function getId (params) {
  return Stock.findOne({
    where: { productoId: { [Op.eq]: params.id } },
    raw: true,
    include: [
      {
        association: 'Producto'
      }
    ]
  }).catch(error => {
    console.log(error)
    return Promise.reject(error)
  })
}

async function update (params) {
  return Stock.update(params, {
    where: { productoId: params.productoId }
  }).catch(error => {
    console.log(error)
    return Promise.reject(error)
  })
}

module.exports = {
  store,
  getAll,
  getOne,
  update,
  getId
}
