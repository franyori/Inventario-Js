const tasaCambioService = require('../../services/tasaCambio')

class formapagoValidator {
    exists = id => {
        return tasaCambioService.getOne({
                id
            })
            .then(pago => {
                return pago !== null ?
                    true :
                    Promise.reject('Esta tasa de cambio no existe')
            })
    }
}
module.exports = new formapagoValidator()