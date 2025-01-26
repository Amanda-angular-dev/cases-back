const express = require('express');
const controller = require('./controller');
const router = express.Router();
const verifyToken = require('./../../middelwares/verifyTokenValid');
const stripe = require('stripe')("sk_test_51QYl1bP3HVbUgKNLVrS6WXUPoB8e7Qa0eJkK7GrLssjXrbshItgKTTQXKunOGPWhLOnespx8o4vPvcmtMoocxcuw00WLJfgjEm");


// Rutas para manejar pedidos
router.post('/create-checkout-session', controller.addOrder);

// Proteger rutas con middleware de verificación de token
router.use(verifyToken);

// Rutas CRUD
router.get('/', controller.getOrders);
router.get('/:itemId', controller.getOrder);
router.put('/delete', controller.deleteOrder);

module.exports = router;
