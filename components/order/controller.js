const modelo = require('./model.js'); // Modelo de productos

//const stripe = require('stripe')(process.env.KEY_STRIPE_SECRET);
const stripe = require('stripe')("sk_test_51QYl1bP3HVbUgKNLVrS6WXUPoB8e7Qa0eJkK7GrLssjXrbshItgKTTQXKunOGPWhLOnespx8o4vPvcmtMoocxcuw00WLJfgjEm");
const multer = require('multer');
const Order = require('./model.js')
const path = require('path');

const { v4: uuidv4 } = require('uuid');
const fileUpload = require('express-fileupload'); // Middleware para manejar archivos



// Controlador para agregar una nueva orden
const phoneCasesCtrl = {};

// Controlador para agregar una nueva orden
phoneCasesCtrl.addOrder = async (req, res) => {
  try {
    console.log('Cuerpo de la solicitud:', req.body);
    console.log('Cuerpo de la solicitud:', req.files);
    // Validar si se recibieron los archivos
    if (!req.files || !req.files.image || !req.files.originalImage) {
      return res.status(400).json({ message: 'Se requieren dos imágenes.' });
    }

    const file1 = req.files.image;
    
    //const file2 = req.files.originalImage;
    

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
    const file1Name = `${uuidv4()}.${file1Extension}`;
    //const file2Name = `${uuidv4()}.${file2Extension}`;

    // Rutas para guardar las imágenes
    const uploadPath1 = path.join(__dirname, '../../uploads', file1Name);
    //const uploadPath2 = path.join(__dirname, '../../uploads', file2Name);

    // Mover los archivos a la carpeta `uploads`
    await file1.mv(uploadPath1);
    //await file2.mv(uploadPath2);
 
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

    // Validar campos requeridos
    if (!productName || !productPrice || !productQuantity || !userName || !userEmail) {
      return res.status(400).json({ message: 'Todos los campos obligatorios deben estar presentes.' });
    }
    
    
    
   
  
   
     
     
    
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
      finalCanvasImage: `/${file1Name}`, // Ruta de la primera imagen
      //extraImage: `/${file2Name}`, // Ruta de la segunda imagen
      state:'pendiente'
    });

    // Guardar la orden en la base de datos
    await newOrder.save();

    res.status(201).json({ message: 'Orden creada exitosamente', id: newOrder._id,imagen: newOrder.finalCanvasImage });
  } catch (error) {
    console.error(error);
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
