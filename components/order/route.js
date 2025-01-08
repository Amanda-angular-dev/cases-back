var express = require('express');
var controller = require('./controller');
var router = express.Router();
const verifyToken = require('./../../middelwares/verifyTokenValid')

// Obtener todos los documentos
router.get('/', controller.getOrders);

// Agregar un nuevo documento
//router.post('/', controller.addOrder);
router.post('/', function(req,res){
	console.log('recibido order')
	console.log( req.body)
	res.send({mensaje:'recibido'})
});







// Middleware para proteger todas las rutas
router.use(verifyToken);







// Restar cantidad a un documento existente
router.put('/delete', controller.deleteOrder);

module.exports = router;
