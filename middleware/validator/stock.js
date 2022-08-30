const stockService = require('../../services/stock')
const productoService = require('../../services/producto')

class stockValidator {
    exists = id => {
        return stockService.getOne({
                id
            })
            .then(bo => {
                return bo !== null ?
                    true :
                    Promise.reject('Este Stock no existe')
            })
    }

    existsProId = (id) => {
        return productoService
        .getOne({
            id
        })
        .then((res) => {
            return res !== null ? true : Promise.reject('Este Producto no exite')
        })  
    }
}
module.exports = new stockValidator()