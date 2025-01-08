const modelo = require('./model.js'); // Modelo de productos

const path = require('path');
const multer = require('multer');
const Order = require('./model.js')


// Configuración de Multer para manejar las subidas de archivos
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../public/uploads')); // Carpeta de destino
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, `${uniqueSuffix}-${file.originalname}`); // Nombre único del archivo
  },
});

const upload = multer({ storage });

// Controlador para agregar una nueva orden
const phoneCasesCtrl = {};

phoneCasesCtrl.addOrder = async (req, res) => {
   try {
    // Manejo de las subidas de archivos
    upload.fields([
      { name: 'finalCanvasImage', maxCount: 1 },
      { name: 'rawUploadedImage', maxCount: 1 },
    ])(req, res, async (err) => {
      if (err) {
        return res.status(400).json({ message: 'Error al subir archivos', error: err });
      }

      const { 
        namePhone, 
        quantity, 
        borderColor, 
        price, 
        dx, 
        name, 
        address, 
        phoneNumber 
      } = req.body;

      // Validar que los archivos fueron subidos
      if (!req.files || !req.files.finalCanvasImage || !req.files.rawUploadedImage) {
        return res.status(400).json({ message: 'Ambas imágenes son requeridas.' });
      }

      // Crear una nueva orden
      const newOrder = new Order({
        namePhone,
        quantity: Number(quantity),
        borderColor,
        price: Number(price),
        dx,
        name,
        address,
        phoneNumber,
        finalCanvasImage: `/uploads/${req.files.finalCanvasImage[0].filename}`,
        rawUploadedImage: `/uploads/${req.files.rawUploadedImage[0].filename}`,
      });

      // Guardar la orden en la base de datos
      await newOrder.save();

      return res.status(201).json({ message: 'Orden creada exitosamente', order: newOrder });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al crear la orden', error });
  }
};



// Obtener todos los documentos
phoneCasesCtrl.getOrders = async (req, res) => {
  try {
    const items = await modelo.find({});
    res.json(items);
  } catch (error) {
    console.error("Error al obtener documentos:", error);
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
