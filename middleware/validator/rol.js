const rolService = require('../../services/rol')

class rolValidator {
    exists = id => {
        return rolService.getOne({
                id
            })
            .then(rol => {
                return rol !== null ?
                    true :
                    Promise.reject('Esta rol no existe')
            })
    }
}
module.exports = new rolValidator()