const modelo = require('./model.js')

const detallesCtrl = {}

detallesCtrl.getHistorial = async (req, res) => {
  const { itemId } = req.params;

  try {
    const historial = await modelo.find({ itemId }).sort({ fecha: -1 });
    // Devuelve el historial encontrado
    res.json(historial);
  } catch (error) {
    console.error("Error al obtener historial:", error);
    res.status(500).json({ message: "Error interno del servidor." });
  }
};

// Eliminar un producto específico
detallesCtrl.deleteItem = async (req, res) => {
  const { _id } = req.params;

  try {
    // Elimina todos los registros relacionados con el itemId
    const result = await modelo.deleteMany({ _id });

    if (result.deletedCount === 0) {
      return res.status(404).json({ message: "Producto no encontrado." });
    }

    res.json({ message: "Producto eliminado con éxito.", deletedCount: result.deletedCount });
  } catch (error) {
    console.error("Error al eliminar el producto:", error);
    res.status(500).json({ message: "Error interno del servidor." });
  }
};

module.exports =detallesCtrl