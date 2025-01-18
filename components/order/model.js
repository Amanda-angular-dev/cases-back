const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    productName: { type: String, required: true },
    productQuantity: { type: Number, required: true },
    productBorderColor: { type: String, required: true },
    productPrice: { type: Number, required: true },
    dx: { type: String, enum: ["2d", "3d"], required: true }, // Solo "2d" o "3d"
    userName: { type: String, required: true },
    userAddress: { type: String, required: true },
    userPhone: { type: String, required: true },
    userEmail: { type: String, required: true },
    finalCanvasImage: { type: String, required: true },
    //extraImage: { type: String, required: true },
    status: { type: String, enum: ["entregada", "pagada","pendiente", "realizada"], required: true },
    stripeSessionId: { type: String }, // ID de la sesión de Stripe, útil para identificar órdenes en webhooks
    createdAt: { type: Date, default: Date.now }, // Fecha de creación
    updatedAt: { type: Date, default: Date.now }, // Fecha de última actualización
});

// Crear el modelo basado en el esquema
const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
