
//const stripe = require('stripe')(process.env.KEY_STRIPE_SECRET);
const stripe = require('stripe')("sk_test_51QYl1bP3HVbUgKNLVrS6WXUPoB8e7Qa0eJkK7GrLssjXrbshItgKTTQXKunOGPWhLOnespx8o4vPvcmtMoocxcuw00WLJfgjEm");
var express = require ('express')

var router = express.Router()






router.post('/', async (req, res) => {
  
  // Desestructurar datos del body
    const {
      productName,
      productPrice,
      productQuantity,
      productBorderColor,
      dx,
      id,
      imagen
    } = req.body;
  try {
  	// Construir las URLs dinámicamente
    //const host = req.get('host'); // Obtener el dominio desde el request
    //const protocol = req.protocol; // Obtener el protocolo (http o https)
    //const successUrl = `${protocol}://${host}/success`; // URL de éxito
    //const cancelUrl = `${protocol}://${host}/cancel`; // URL de cancelación
    //esto de arriba es la configuracion correcta de los endpoint de success y cancel cuando la software este en produccion

    // Establece el puerto 4200 como destino del frontend
    //esto de aca es para probar la aplicacin en angular en local , sino daba erroes en esas redirecciones
    const frontendHost = 'http://localhost:4200'; // Cambiar si usas un dominio diferente en producción

    const successUrl = `${frontendHost}/success`; // URL de éxito
    const cancelUrl = `${frontendHost}/cancel`;  // URL de cancelación
    
     // Lógica para convertir el precio recibido en dólares a centavos
    let unitAmountInCents;
    if (productPrice === 60) {
      unitAmountInCents = 6000; // $60 -> 6000 centavos
    } else if (productPrice === 90) {
      unitAmountInCents = 9000; // $90 -> 9000 centavos
    } else {
      // Si el precio no es 60 ni 90, calcula de forma genérica
      unitAmountInCents = productPrice* 100; // Convertir cualquier valor recibido en dólares a centavos
    }

     // Crear la sesión de Stripe
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'], // Métodos de pago
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: `phone case - ${productName} - `, // Anexamos el nombre enviado desde el frontend
              description: `border color ${productBorderColor} -  ${dx}.`, 
              images: [imagen], // Enviar la imagen a Stripe
            },
            unit_amount: unitAmountInCents, // Precio convertido a centavos
          },
          quantity: productQuantity, // Cantidad enviada desde el frontend
        },
      ],
      mode: 'payment', // Modo de pago único
      success_url: successUrl, // URL dinámica de éxito
      cancel_url: cancelUrl,   // URL dinámica de cancelación
      metadata: {
        orderId:id, // Vincular el ID de la orden con la sesión de Stripe
      },
     
    });

    // Enviar la respuesta con el ID de la sesión
    res.json({ id: session.id });
  } catch (error) {
    console.error('Error al crear la sesión:', error);
    res.status(500).send(error.message);
  }
});





module.exports= router