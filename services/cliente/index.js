const { cliente } = require('../../models/index')

async function store (params) {
  return await cliente
    .create({
      ...params
    })
    .catch(error => {
      return Promise.reject(error)
    })
}
async function getAll (filters) {
  return await cliente
    .findAll({
      where: { ...filters }
    })
    .catch(error => {
      return Promise.reject(error)
    })
}

async function update (params, filters) {
  return await cliente
    .update(params, {
      where: { ...filters }
    })
    .catch(error => {
      return Promise.reject(error)
    })
}
async function getOne (filters) {
  return await cliente
    .findOne({
      where: { ...filters }
    })
    .catch(error => {
      return Promise.reject(error)
    })
}

async function destroy (filters) {
  return await cliente
    .destroy({
      where: { ...filters }
    })
    .catch(error => {
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
