const {
    Categoria
} = require('../../models/index')
const dbModel = Categoria

async function store(params) {
    return await dbModel.create({
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
    return await Categoria.findOne({
        where: {
            ...filters
        }
    }).catch(error => {
        return Promise.reject(error)
    })
}

async function update(params, filters) {
    return Categoria.update(params, {
        where: {
            ...filters
        }
    }).catch(error => {
        return Promise.reject(error)
    })

}


async function destroy(filters) {

    Categoria.destroy({
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
}