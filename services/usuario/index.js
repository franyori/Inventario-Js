const { Usuario } = require('../../models/index')
const bcrypt = require('bcrypt')
const salt = bcrypt.genSaltSync(10)

async function store (params) {
  var hashPassword = bcrypt.hashSync(params.password, salt)
  return Usuario.create({
    ...params,
    password: hashPassword
  }).catch(error => {
    return Promise.reject(error)
  })
}
async function getAll (filters) {
  return Usuario.findAll({
    where: { ...filters },
    include: [
      {
        association: 'Persona'
      },
      {
        association: 'Rol'
      }
    ]
  }).catch(error => {
    return Promise.reject(error)
  })
}

async function update (params, filters) {
  var hashPassword = bcrypt.hashSync(params.password, salt)
  return Usuario.update(
    {
      ...params,
      password: hashPassword
    },
    {
      where: { ...filters }
    }
  ).catch(error => {
    return Promise.reject(error)
  })
}
async function update2 (params, filters) {
  try {
    await Usuario.update(params, {
      where: { ...filters }
    })
  } catch (error) {
    throw error
  }
}

async function getOne (filters) {
  return Usuario.findOne({
    where: { ...filters },
    include: [
      {
        association: 'Persona'
      },
      {
        association: 'Rol'
      }
    ]
  }).catch(error => {
    return Promise.reject(error)
  })
}

async function destroy (filters) {
  return Usuario.destroy({
    where: { ...filters }
  }).catch(error => {
    return Promise.reject(error)
  })
}

module.exports = {
  store,
  getAll,
  getOne,
  update,
  update2,
  destroy
}
