const modelo = require('./model.js'); // Modelo de productos

//const stripe = require('stripe')(process.env.KEY_STRIPE_SECRET);
const stripe = require('stripe')("sk_test_51QYl2A04SWFox9M9QsJVuPbQIMZprhiZYehwd9FTytsOGIlXP23sLGaiXfxDs9VHy9OTMk72Bu7Qmn2MZZvrxjIM00g8rDD0JQ");

const Order = require('./model.js')
const path = require('path');
const cloudinary = require('cloudinary').v2;
//const { v4: uuidv4 } = require('uuid');



cloudinary.config({
  //cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  //api_key: process.env.CLOUDINARY_API_KEY,
  //api_secret: process.env.CLOUDINARY_API_SECRET,
  cloud_name: 'dv7ovrttk',
  api_key:'887943832462313',
  api_secret: 'jQv2odAGf_zNSIreHudKI9GKqdQ',
});

// Controlador para agregar una nueva orden
const phoneCasesCtrl = {};

// Controlador para agregar una nueva orden
phoneCasesCtrl.addOrder = async (req, res) => {
   console.log('Archivos recibidos:', req.files);
    console.log('Datos recibidos:', req.body);
    
    if (!req.files) {
      return res.status(400).json({ message: 'No se recibieron archivos.' });
    }
  // Desestructurar datos del body
    const {
      productName,
      productPrice,
      productQuantity,
      productBorderColor,
      dx,
      userName,
      userEmail,
      userPhone,
      userAddress,
    } = req.body;
  try {
    console.log('Cuerpo de la solicitud:', req.body);
    console.log('Cuerpo de la solicitud:', req.files);
    // Validar si se recibieron los archivos
    if (!req.files || !req.files.image || !req.files.originalImage) {
      return res.status(400).json({ message: 'Se requieren dos imágenes.' });
    }
if (!productName || !productPrice || !productQuantity || !dx || !userName || !userEmail || !userPhone || !userAddress) {
  return res.status(400).json({ message: 'Faltan datos requeridos en la solicitud.' });
}
    const file1 = req.files.image;
    
    const file2 = req.files.originalImage;
    
    //const file3 = req.files.tercerImage;

  
    // Subir la imagen a Cloudinary
    const result1 = await cloudinary.uploader.upload(file1.tempFilePath, {
      folder: 'uploads', // Carpeta en Cloudinary
    });

    const result2 = await cloudinary.uploader.upload(file2.tempFilePath, {
      folder: 'uploads', // Carpeta en Cloudinary
    });

   // const result3 = await cloudinary.uploader.upload(file3.tempFilePath, {
   //   folder: 'uploads', // Carpeta en Cloudinary
   // });

     // Validar la extensión de los archivos
    const allowedExtensions = ['jpg', 'jpeg', 'png', 'gif'];

    const file1Extension = path.extname(file1.name).toLowerCase().slice(1);
    //const file2Extension = path.extname(file2.name).toLowerCase().slice(1);

     // if (!allowedExtensions.includes(file1Extension) || !allowedExtensions.includes(file2Extension)) {
    if (!allowedExtensions.includes(file1Extension) ) {  
      return res.status(400).json({ 
        message: 'Ambos archivos deben ser imágenes válidas (jpg, jpeg, png, gif).' 
      });
    }

    // Generar nombres únicos para los archivos
    //const file1Name = `${uuidv4()}.${file1Extension}`;
    //const file2Name = `${uuidv4()}.${file2Extension}`;

    // Rutas para guardar las imágenes
    //const uploadPath1 = path.join(__dirname, '../../uploads', file1Name);
    //const uploadPath2 = path.join(__dirname, '../../uploads', file2Name);

    // Mover los archivos a la carpeta `uploads`
    //await file1.mv(uploadPath1);
    //await file2.mv(uploadPath2);
 
    // Construir las URLs dinámicamente
    const host = req.get('host'); // Obtener el dominio desde el request
    const protocol = req.protocol; // Obtener el protocolo (http o https)
    const successUrl = `https://cases-back.vercel.app/success`; // URL de éxito
    const cancelUrl = `https://cases-back.vercel.app/cancel`; // URL de cancelación
    //esto de arriba es la configuracion correcta de los endpoint de success y cancel cuando la software este en produccion

    // Establece el puerto 4200 como destino del frontend
    //esto de aca es para probar la aplicacin en angular en local , sino daba erroes en esas redirecciones
    // const frontendHost = 'http://localhost:4200'; // Cambiar si usas un dominio diferente en producción

    // const successUrl = `${frontendHost}/success`; // URL de éxito
    // const cancelUrl = `${frontendHost}/cancel`;  // URL de cancelación
    

    // Validar campos requeridos
    if (!productName || !productPrice || !productQuantity || !userName || !userEmail) {
      return res.status(400).json({ message: 'Todos los campos obligatorios deben estar presentes.' });
    }
    
    
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
              images: [result1.secure_url], // Enviar la imagen a Stripe
            },
            unit_amount: unitAmountInCents, // Precio convertido a centavos
          },
          quantity: productQuantity, // Cantidad enviada desde el frontend
        },
      ],
      mode: 'payment', // Modo de pago único
      success_url: successUrl, // URL dinámica de éxito
      cancel_url: cancelUrl,   // URL dinámica de cancelación
      
     
    });
   
  
   
     
     
    
    // Crear una nueva orden
    const newOrder = new modelo({
      productName,
      productPrice: Number(productPrice),
      productQuantity: Number(productQuantity),
      productBorderColor,
      dx,
      userName,
      userEmail,
      userPhone,
      userAddress,
      finalCanvasImage: result1.secure_url, // Ruta de la primera imagen
      originalImage: result2.secure_url, // Ruta de la segunda imagen
      stripeSessionId: session.id,
      status:'pagado'
    });

    // Guardar la orden en la base de datos
    await newOrder.save();

    // Enviar la respuesta con el ID de la sesión
    res.json({ id: session.id });
  } catch (error) {
    console.error('se recibio algo con error',error);
    res.status(500).json({ message: 'Error al crear la orden', error });
  }
};



// Obtener todos los documentos
phoneCasesCtrl.getOrders = async (req, res) => {
    try {
    // Obtener el estado de los parámetros de consulta, con un valor predeterminado de 'pendiente'
    const { status = 'pendiente' } = req.query;

    // Buscar documentos que coincidan con el estado
    const items = await modelo.find({ status });

    // Devolver los resultados en formato JSON
    res.json(items);
  } catch (error) {
    console.error("Error al obtener documentos:", error);
    res.status(500).json({ message: "Error interno del servidor." });
  }
};

phoneCasesCtrl.getOrder = async (req, res) => {
  const { itemId } = req.params;

  try {
    const orden = await modelo.find({ itemId }).sort({ fecha: -1 });
    // Devuelve la orden 
    res.json(orden);
  } catch (error) {
    console.error("Error al obtener la orden:", error);
    res.status(500).json({ message: "Error interno del servidor." });
  }
};


phoneCasesCtrl.deleteOrder = async (req, res) => {
  const { _id, cantidad, nota } = req.body;
 console.log(nota)
  try {
    const item = await modelo.findById(_id);
    if (!item) {
      return res.status(404).json({ message: "Documento no encontrado." });
    }

    item.cantidad = cantidad;
    item.ultimaFechaActualizacion = new Date();
    await item.save();

    const registro = new RegistroDetalle({
      itemId: item._id,
      accion: cantidad > 0 ? 'cantidad agregada' : 'cantidad restada',
      cantidadCambiada: cantidad,
      nota: nota || null,
    });
    await registro.save();

    res.json({ message: "Cantidad actualizada exitosamente.", item });
  } catch (error) {
    console.error("Error al editar cantidad:", error);
    res.status(500).json({ message: "Error interno del servidor." });
  }
};


module.exports = phoneCasesCtrl;
