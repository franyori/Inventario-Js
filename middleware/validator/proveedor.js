const proveedorService = require('../../services/proveedor')

class proveedorValidator {
    exists = id => {
        return proveedorService.getOne({
                id
            })
            .then(persona => {
                return persona !== null ?
                    true :
                    Promise.reject('Este Proveedor no existe')
            })
    }
}
module.exports = new proveedorValidator()