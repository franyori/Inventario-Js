const presentacionProdService = require('../../services/presentacionProd')

class presentacionProdutValidator {
    exists = id => {
        return presentacionProdService.getOne({
                id
            })
            .then(list => {
                return list !== null ?
                    true :
                    Promise.reject('Esta Presentación no existe!!')
            })
    }
}
module.exports = new presentacionProdutValidator()