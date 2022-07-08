const { persona } = require('../../models/index')

async function store (params) {
  return persona.create({ ...params }).catch(error => {
    return Promise.reject(error)
  })
}

async function getAll (filters) {
  return persona
    .finAll({
      where: { ...filters }
    })
    .catch(error => {
      return Promise.reject(error)
    })
}

async function getOne (filters) {
  return persona
    .findOne({
      where: { ...filters }
    })
    .catch(error => {
      return Promise.reject(error)
    })
}

async function update (params, filters) {
  return persona
    .update(params, {
      ...filters
    })
    .catch(error => {
      return Promise.reject(error)
    })
}

async function destroy (filters) {
  return persona
    .destroy({
      ...filters
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
