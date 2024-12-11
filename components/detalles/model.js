const mongoose = require('mongoose');

const registroDetalleSchema = new mongoose.Schema({
  itemId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Item', // Nombre del modelo de productos
    required: true,
  },
  accion: {
    type: String,
    required: true, // Ejemplo: 'agregado', 'eliminado', 'venta confirmada'
    enum: ['agregado', 'eliminado','cantidad restada','cantidad agregada' ,'venta confirmada'], // Opciones predefinidas
  },
  cantidadCambiada: {
    type: Number,
    required: true, // Ejemplo: +5, -3, 0
  },
 nota: {
    type: String,
    default: null,
  },
  fecha: {
    type: Date,
    default: Date.now,
  },
});

const RegistroDetalle = mongoose.model('RegistroDetalle', registroDetalleSchema);

module.exports = RegistroDetalle;
