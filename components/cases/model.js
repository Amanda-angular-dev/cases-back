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
  dx: { type: String, enum: ["2d", "3d"], required: true }, // Solo "2d" o "3d"
  borderColor: { type: String, enum: ["transparent", "white", "black"], required: true },
});

// Crear el modelo basado en el esquema
const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
