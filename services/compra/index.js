const { Compra } = require('../../models/index')

async function store (params) {
  Compra.bulkCreate(
    {
      ...params,
    //  ...params.items.forEach(e => {
        CompraDetalle: [
          {
            compraId: '',
            productoId: parseInt(params.cantidad_inicial),
            formaPagoId: parseInt(params.cantidad_reservda),
            cantidad_detalle: parseInt(params.cantidad_reservda),
            impuestoPorcent_detalle: parseInt(params.cantidad_reservda),
            impuestoTotal_detalle: parseInt(params.cantidad_reservda),
            descuentoPorcent_detalle: parseInt(params.cantidad_reservda),
            descuentoTotal_detalle: parseInt(params.cantidad_reservda),
            subtotal_detalle: parseInt(params.cantidad_reservda),
            total_detalle: parseInt(params.cantidad_reservda)
          }
        ]
     // })
      ,

      Movimiento: [
        {
          compraId: '',
          productoId: parseInt(params.cantidad_inicial),
          formaPagoId: parseInt(params.cantidad_reservda),
          cantidad_detalle: parseInt(params.cantidad_reservda),
          impuestoPorcent_detalle: parseInt(params.cantidad_reservda),
          impuestoTotal_detalle: parseInt(params.cantidad_reservda),
          descuentoPorcent_detalle: parseInt(params.cantidad_reservda),
          descuentoTotal_detalle: parseInt(params.cantidad_reservda),
          subtotal_detalle: parseInt(params.cantidad_reservda),
          total_detalle: parseInt(params.cantidad_reservda)
        }
      ]
    },
    {
      include: [{ all: true, nested: true }]
    }
  ).catch(error => {
    return Promise.reject(error)
  })
}

module.exports = {
  store
}
