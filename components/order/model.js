const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    namePhone: { type: String, required: true },
    quantity: { type: Number, required: true },
    borderColor: { type: String, required: true },
    price: { type: Number, required: true },
    dx: { type: String, enum: ["2d", "3d"], required: true }, // Solo "2d" o "3d"
    name: { type: String, required: true },
    address: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    finalCanvasImage: { type: String, required: true },
    rawUploadedImage: { type: String, required: true },
});

// Crear el modelo basado en el esquema
const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
