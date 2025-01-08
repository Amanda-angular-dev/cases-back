const modelo = require('./model.js'); // Modelo de productos
const RegistroDetalle = require('./../detalles/model.js'); // Modelo para los detalles

const phoneCasesCtrl = {};

// Obtener todos los documentos
phoneCasesCtrl.getCases = async (req, res) => {
  try {
    // Obtén el parámetro dx de la URL
    const { dx } = req.query;

    // Define la consulta en base al valor de dx
    const query = dx ? { dx } : {};

    // Realiza la consulta con la condición
    const items = await modelo.find(query);

    // Devuelve los resultados
    res.json(items);
  } catch (error) {
    console.error("Error al obtener documentos:", error);
    res.status(500).json({ message: "Error interno del servidor." });
  }
};


// Agregar un nuevo documento
phoneCasesCtrl.addCase = async (req, res) => {
  const { name, cantidad } = req.body;

  if (!name || cantidad == null || cantidad < 0) {
    return res.status(400).json({ message: "Nombre y cantidad válidos son obligatorios." });
  }

  try {
    const newItem = new modelo({
      nombre: name,
      cantidad,
      ultimaFechaActualizacion: new Date(),
    });
    const savedItem = await newItem.save();

    // Registrar detalle
    const registro = new RegistroDetalle({
      itemId: savedItem._id,
      accion: 'agregado',
      cantidadCambiada: cantidad,
    });
    await registro.save();

    res.status(201).json({ message: "Documento agregado exitosamente.", item: savedItem });
  } catch (error) {
    console.error("Error al agregar documento:", error);
    res.status(500).json({ message: "Error al agregar el documento." });
  }
};

// Sumar cantidad
phoneCasesCtrl.addQuantity = async (req, res) => {
  const { _id, cantidad } = req.body;

  if (!_id || !cantidad || cantidad <= 0) {
    return res.status(400).json({ message: "ID y cantidad positiva son obligatorios." });
  }

  try {
    const item = await modelo.findById(_id);
    if (!item) {
      return res.status(404).json({ message: "Documento no encontrado." });
    }

    item.cantidad += cantidad;
    item.ultimaFechaActualizacion = new Date();
    await item.save();

    // Registrar detalle
    const registro = new RegistroDetalle({
      itemId: item._id,
      accion: 'cantidad agregada',
      cantidadCambiada: cantidad,
    });
    await registro.save();

    res.json({ message: "Cantidad agregada exitosamente.", item });
  } catch (error) {
    console.error("Error al sumar cantidad:", error);
    res.status(500).json({ message: "Error interno del servidor." });
  }
};

phoneCasesCtrl.editQuantity = async (req, res) => {
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

phoneCasesCtrl.all = async (req, res) => {
 
    //const item = await modelo.updateMany(
     //{},
     //{ $set: { borderColor: "transparent" } }
    //);
    const array1 = [
    { nombre: 'iPhone 12 Mini', cantidad: 1, dx: '2d' },
    { nombre: 'iPhone 12', cantidad: 1, dx: '2d' },
    { nombre: 'iPhone 12 Pro', cantidad: 1, dx: '2d' },
    { nombre: 'iPhone 12 Pro Max', cantidad: 1, dx: '2d' },
    { nombre: 'iPhone 13 Mini', cantidad: 1, dx: '2d' },
    { nombre: 'iPhone 13', cantidad: 1, dx: '2d' },
    { nombre: 'iPhone 13 Pro', cantidad: 1, dx: '2d' },
    { nombre: 'iPhone 13 Pro Max', cantidad: 1, dx: '2d' },
    { nombre: 'iPhone 14', cantidad: 1, dx: '2d' },
    { nombre: 'iPhone 14 Plus', cantidad: 1, dx: '2d' },
    { nombre: 'iPhone 14 Pro', cantidad: 1, dx: '2d' },
    { nombre: 'iPhone 14 Pro Max', cantidad: 1, dx: '2d' },
    { nombre: 'iPhone 15', cantidad: 1, dx: '2d' },
    { nombre: 'iPhone 15 Plus', cantidad: 1, dx: '2d' },
    { nombre: 'iPhone 15 Pro', cantidad: 1, dx: '2d' },
    { nombre: 'iPhone 15 Pro Max', cantidad: 1, dx: '2d' },
    { nombre: 'SE Segunda Generación', cantidad: 1, dx: '2d' },
    { nombre: 'iPhone 16', cantidad: 1, dx: '2d' },
    { nombre: 'iPhone 16 Pro', cantidad: 1, dx: '2d' },
    { nombre: 'iPhone 16 Pro Max', cantidad: 1, dx: '2d' }
]


const array2 =[
    { nombre: 'iPhone 12 Mini', cantidad: 1, dx: '3d' },
    { nombre: 'iPhone 12', cantidad: 1, dx: '3d' },
    { nombre: 'iPhone 12 Pro', cantidad: 1, dx: '3d' },
    { nombre: 'iPhone 12 Pro Max', cantidad: 1, dx: '3d' },
    { nombre: 'iPhone 13 Mini', cantidad: 1, dx: '3d' },
    { nombre: 'iPhone 13', cantidad: 1, dx: '3d' },
    { nombre: 'iPhone 13 Pro', cantidad: 1, dx: '3d' },
    { nombre: 'iPhone 13 Pro Max', cantidad: 1, dx: '3d' },
    { nombre: 'iPhone 14', cantidad: 1, dx: '3d' },
    { nombre: 'iPhone 14 Plus', cantidad: 1, dx: '3d' },
    { nombre: 'iPhone 14 Pro', cantidad: 1, dx: '3d' },
    { nombre: 'iPhone 14 Pro Max', cantidad: 1, dx: '3d' },
    { nombre: 'iPhone 15', cantidad: 1, dx: '3d' },
    { nombre: 'iPhone 15 Plus', cantidad: 1, dx: '3d' },
    { nombre: 'iPhone 15 Pro', cantidad: 1, dx: '3d' },
    { nombre: 'iPhone 15 Pro Max', cantidad: 1, dx: '3d' },
    { nombre: 'SE Segunda Generación', cantidad: 1, dx: '3d' },
    { nombre: 'iPhone 16', cantidad: 1, dx: '3d' },
    { nombre: 'iPhone 16 Pro', cantidad: 1, dx: '3d' },
    { nombre: 'iPhone 16 Pro Max', cantidad: 1, dx: '3d' }
]
// Unir los arrays en uno solo
const mergedArray = [...array1, ...array2];

// Crear los nuevos documentos con las propiedades adicionales
const newDocuments = mergedArray.map(item => ({
  nombre: item.nombre,
  dx: item.dx,
  borderColor: "white",
  cantidad: 1,
}));
 const result = await modelo.insertMany(newDocuments);
    res.json({ message: "Cantidad actualizada exitosamente.", result});
}  
module.exports = phoneCasesCtrl;

