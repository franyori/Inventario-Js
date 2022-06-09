const categoriaService = require('../../services/categoria')

class categoriaValidator {
    exists = id => {
        return categoriaService.getOne({
                id
            })
            .then(categoria => {
                return categoria !== null ?
                    true :
                    Promise.reject('Esta categoria no existe')
            })
    }
}
module.exports = new categoriaValidator()