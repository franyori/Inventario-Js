const formaPagoService = require('../../services/formaPago')

class formapagoValidator {
    exists = id => {
        return formaPagoService.getOne({
                id
            })
            .then(pago => {
                return pago !== null ?
                    true :
                    Promise.reject('Esta forma de pago no existe')
            })
    }
}
module.exports = new formapagoValidator()