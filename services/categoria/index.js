const {
    Categoria
} = require('../../models/index')
const dbModel = Categoria

async function store(params) {
    return dbModel.create({
            ...params,
        })
        .catch(error => {
            return Promise.reject(error)
        })
}


async function getAll(filters) {
    return Categoria.findAll({
        where: {
            ...filters
        }
    }).catch(error => {
        return Promise.reject(error)
    })
}

async function getOne(filters) {
    return dbModel.findOne({
            where: {
                ...filters
            },
            include: "user"
        })
        .catch(error => {
            return Promise.reject(error)
        })
}

async function update(params, filters) {
    return dbModel.update(params, {
            where: {
                ...filters
            }
        })
        .catch(error => {
            return Promise.reject(error)
        })
}

async function destroy(filters) {
    dbModel.destroy({
            where: {
                ...filters
            }
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
    destroy,
}