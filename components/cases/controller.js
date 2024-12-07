const modelo = require('./model.js')

const phoneCasesCtrl = {}




// Obtener todos los documentos
phoneCasesCtrl.getCases = async (req, res) => {
  try {
    const items = await modelo.find({});
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

    res.json({ message: "Cantidad agregada exitosamente.", item });
  } catch (error) {
    console.error("Error al sumar cantidad:", error);
    res.status(500).json({ message: "Error interno del servidor." });
  }
};

// Restar cantidad
phoneCasesCtrl.subtractQuantity = async (req, res) => {
  const { _id, cantidad } = req.body;

  if (!_id || !cantidad || cantidad <= 0) {
    return res.status(400).json({ message: "ID y cantidad positiva son obligatorios." });
  }

  try {
    const item = await modelo.findById(_id);
    if (!item) {
      return res.status(404).json({ message: "Documento no encontrado." });
    }

    const nuevaCantidad = item.cantidad - cantidad;
    if (nuevaCantidad < 0) {
      return res.status(400).json({ message: "La cantidad resultante no puede ser negativa." });
    }

    item.cantidad = nuevaCantidad;
    item.ultimaFechaActualizacion = new Date();
    await item.save();

    res.json({ message: "Cantidad restada exitosamente.", item });
  } catch (error) {
    console.error("Error al restar cantidad:", error);
    res.status(500).json({ message: "Error interno del servidor." });
  }
};

module.exports = phoneCasesCtrl;
