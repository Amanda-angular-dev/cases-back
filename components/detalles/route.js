var express = require ('express')
var controller = require('./controller')
var router = express.Router()




// Ruta para obtener el historial de un producto específico
router.get('/:itemId', controller.getHistorial);


// Ruta para eliminar un producto específico por su ID
router.delete('/:_id', controller.deleteItem);




module.exports= router