const empresaService = require('../../services/empresa')

class empresaValidator {
    exists = id => {
        return empresaService.getOne({
                id
            })
            .then(empre => {
                return empre !== null ?
                    true :
                    Promise.reject('Esta empresa no existe!!')
            })
    }
}
module.exports = new empresaValidator()