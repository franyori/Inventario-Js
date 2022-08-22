const unidadMedidaService = require('../../services/unidadMedida')

class unidadMedidadValidator {
    exists = id => {
        return unidadMedidaService.getOne({
                id
            })
            .then(objs => {
                return objs !== null ?
                    true :
                    Promise.reject('Esta Unidad de Medida no existe')
            })
    }
}
module.exports = new unidadMedidadValidator()