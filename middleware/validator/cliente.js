const clienteService = require('../../services/cliente')

class clienteValidator {
    exists = id => {
        return clienteService.getOne({
                id
            })
            .then(client => {
                return client !== null ?
                    true :
                    Promise.reject('Este cliente no existe!!')
            })
    }
}
module.exports = new clienteValidator()