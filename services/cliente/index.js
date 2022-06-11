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
module.exports = {
  store,
  getAll
}
