const productoService = require('../../services/producto')

class productoValidator {
    exists = id => {
        return productoService.getOne({
                id
            })
            .then(pro => {
                return pro !== null ?
                    true :
                    Promise.reject('Este Producto no existe')
            })
    }
}
module.exports = new productoValidator()