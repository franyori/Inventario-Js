const bodegaService = require('../../services/bodega')

class bodegaValidator {
    exists = id => {
        return bodegaService.getOne({
                id
            })
            .then(bodega => {
                return bodega !== null ?
                    true :
                    Promise.reject('Esta Bodega no existe')
            })
    }
}
module.exports = new bodegaValidator()