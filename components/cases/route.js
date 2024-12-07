var express = require('express');
var controller = require('./controller');
var router = express.Router();
const verifyToken = require('./../../middelwares/verifyTokenValid')

// Obtener todos los documentos
router.get('/cases', controller.getCases);


// Middleware para proteger todas las rutas
router.use(verifyToken);



// Agregar un nuevo documento
router.post('/cases', controller.addCase);

// Sumar cantidad a un documento existente
router.put('/cases/add-quantity', controller.addQuantity);

// Restar cantidad a un documento existente
router.put('/cases/subtract-quantity', controller.subtractQuantity);

module.exports = router;
