var express = require('express');
var controller = require('./controller');
var router = express.Router();
const verifyToken = require('./../../middelwares/verifyTokenValid')

// Obtener todos los documentos
router.get('/cases', controller.getCases);

router.put('/cases/all', controller.all);
// Middleware para proteger todas las rutas

router.post('/cases', controller.addCase);

router.use(verifyToken);



// Agregar un nuevo documento


// Sumar cantidad a un documento existente
router.put('/cases/add-quantity', controller.addQuantity);

// Sumar cantidad a un documento existente


// Restar cantidad a un documento existente
router.put('/cases/edit-quantity', controller.editQuantity);

module.exports = router;
