var express = require('express');
var controller = require('./controller');
var router = express.Router();
const verifyToken = require('./../../middelwares/verifyTokenValid')
//const stripe = require('stripe')(process.env.KEY_STRIPE_SECRET);
const stripe = require('stripe')("sk_test_51QYl1bP3HVbUgKNLVrS6WXUPoB8e7Qa0eJkK7GrLssjXrbshItgKTTQXKunOGPWhLOnespx8o4vPvcmtMoocxcuw00WLJfgjEm");
const bodyParser = require('body-parser');


// Configuración para manejar los webhooks
router.use(bodyParser.raw({ type: 'application/json' }));

// Ruta del webhook
router.post('/webhook-stripe', (req, res) => {
    const endpointSecret = 'whsec_wXi0uya84EoztVAdb084lemHjEX2psW6'; // De la configuración en Stripe

    const sig = req.headers['stripe-signature'];

    let event;

    try {
        // Verificar la firma del webhook
        event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
    } catch (err) {
        console.error(`⚠️  Webhook signature verification failed.`, err.message);
        return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    // Manejar diferentes eventos
    switch (event.type) {
        case 'payment_intent.succeeded':
            const paymentIntent = event.data.object;
            console.log('💰 Payment succeeded:', paymentIntent);
            // Realiza la acción necesaria aquí
            break;

        case 'payment_intent.canceled':
            const canceledIntent = event.data.object;
            console.log('❌ Payment canceled:', canceledIntent);
            // Realiza la acción necesaria aquí
            break;

        default:
            console.log(`Unhandled event type ${event.type}`);
    }

    // Responder a Stripe para confirmar que se recibió el webhook
    res.status(200).send();
});



// Agregar un nuevo documento
router.post('/', controller.addOrder);






// Middleware para proteger todas las rutas
router.use(verifyToken);




// Obtener todos los documentos
router.get('/', controller.getOrders);


// Ruta para obtener el historial de un producto específico
router.get('/:itemId', controller.getOrder);

// Restar cantidad a un documento existente
router.put('/delete', controller.deleteOrder);

module.exports = router;
