const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    trim: true,
  },
  cantidad: {
    type: Number,
    required: true,
    min: 0,
  },
  ultimaFechaActualizacion: {
    type: Date,
    default: Date.now,
  },
});

// Crear el modelo basado en el esquema
const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
