const express = require('express');
const controller = require('./controller');
const router = express.Router();
const verifyToken = require('./../../middelwares/verifyTokenValid');
const stripe = require('stripe')("sk_test_51QYl1bP3HVbUgKNLVrS6WXUPoB8e7Qa0eJkK7GrLssjXrbshItgKTTQXKunOGPWhLOnespx8o4vPvcmtMoocxcuw00WLJfgjEm");
const bodyParser = require('body-parser');




// Ruta del webhook para Stripe
router.post('/webhook-stripe', bodyParser.raw({ type: 'application/json' }),  async (req, res) => {
  const endpointSecret = 'whsec_wXi0uya84EoztVAdb084lemHjEX2psW6'; // Secreto del webhook de Stripe
  const sig = req.headers['stripe-signature'];
  let event;

  try {
    // Verificar la firma del webhook
    event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
  } catch (err) {
    console.error(`⚠️  Webhook signature verification failed.`, err.message);
    return res.status(400).json({ error: `Webhook Error: ${err.message}` });
  }

  // Manejar eventos de Stripe
  switch (event.type) {
    case 'checkout.session.completed': {
      const session = event.data.object;
      try {
        const order = await Order.findOne({ stripeSessionId: session.id });
        if (!order) {
          console.error(`⚠️ Orden no encontrada para stripeSessionId: ${session.id}`);
          return res.status(404).send();
        }

        order.status = 'pagada';
        await order.save();
        console.log(`✅ Orden ${order._id} actualizada a 'pagada'.`);
      } catch (err) {
        console.error(`❌ Error al actualizar el estado de la orden: ${err.message}`);
        return res.status(500).send();
      }
      break;
    }
    case 'payment_intent.canceled': {
      const paymentIntent = event.data.object;
      try {
        const order = await Order.findOne({ stripeSessionId: paymentIntent.id });
        if (!order) {
          console.error(`⚠️ Orden no encontrada para stripeSessionId: ${paymentIntent.id}`);
          return res.status(404).send();
        }

        await Order.findByIdAndDelete(order._id);
        console.log(`✅ Orden ${order._id} eliminada correctamente.`);
      } catch (err) {
        console.error(`❌ Error al eliminar la orden: ${err.message}`);
        return res.status(500).send();
      }
      break;
    }
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  res.status(200).send();
});

// Rutas para manejar pedidos
router.post('/create-checkout-session', controller.addOrder);

// Proteger rutas con middleware de verificación de token
router.use(verifyToken);

// Rutas CRUD
router.get('/', controller.getOrders);
router.get('/:itemId', controller.getOrder);
router.put('/delete', controller.deleteOrder);

module.exports = router;
