const usuarioService = require('../../services/usuario')

class usuarioValidator {
    exists = id => {
        return usuarioService.getOne({
                id
            })
            .then(obj => {
                return obj !== null ?
                    true :
                    Promise.reject('Este usuario no existe')
            })
    }
}
module.exports = new usuarioValidator()