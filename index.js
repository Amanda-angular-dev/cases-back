const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const routes = require('./routers.js');
const DBconection = require('./db.js');
const obtenerValoresDeEntorno = require('./environment/getEnvironment.js');
const axios = require('axios');
const fs = require('fs');
const fileUpload = require('express-fileupload');

const stripe = require('stripe')("sk_test_51QYl2A04SWFox9M9QsJVuPbQIMZprhiZYehwd9FTytsOGIlXP23sLGaiXfxDs9VHy9OTMk72Bu7Qmn2MZZvrxjIM00g8rDD0JQ");
const Order = require('./components/order/model.js')
// Configuración de variables de entorno
const config = obtenerValoresDeEntorno();
const bodyParser = require('body-parser');




// Ruta del webhook para Stripe
app.use('/webhook-stripe', bodyParser.raw({ type: 'application/json' }),  async (req, res) => {
  const endpointSecret = 'whsec_wXi0uya84EoztVAdb084lemHjEX2psW6';
   // Secreto del webhook de Stripe
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
// Middleware para analizar JSON y manejar archivos
app.use(express.json());
app.use(fileUpload(
  {
  useTempFiles: true,       // Permitir archivos temporales
  tempFileDir: '/tmp/',     // Directorio temporal para almacenar archivos
  limits: { fileSize: 10 * 1024 * 1024 }, // Tamaño máximo del archivo (10 MB)
}));
app.use(cors());

// Configuración para servir archivos estáticos
app.use(express.static(path.join(__dirname, '/public')));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

// Conexión a la base de datos
DBconection();

// Rutas de la API
routes(app);

// Ruta para descargar la imagen
app.get('/download', async (req, res) => {
  const { imageUrl } = req.query;

  if (!imageUrl) {
    return res.status(400).send('La URL de la imagen es obligatoria.');
  }

  try {
    const response = await axios.get(imageUrl, { responseType: 'stream' });
    const fileName = path.basename(imageUrl);

    // Usar /tmp como directorio temporal
    const tempPath = path.join('/tmp', fileName);

    const writer = fs.createWriteStream(tempPath);
    response.data.pipe(writer);

    writer.on('finish', () => {
      res.download(tempPath, fileName, (err) => {
        fs.unlinkSync(tempPath); // Eliminar el archivo temporal

        if (err) {
          console.error('Error al descargar el archivo:', err);
          res.status(500).send('Error al procesar la descarga');
        }
      });
    });

    writer.on('error', (err) => {
      console.error('Error al guardar el archivo:', err);
      res.status(500).send('Error al guardar el archivo');
    });
  } catch (err) {
    console.error('Error al descargar la imagen:', err.message);
    res.status(404).send('Error al descargar la imagen.');
  }
});

// Redirigir todas las rutas desconocidas al frontend
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Inicio del servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
