
const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const routes = require('./routers.js');
const DBconection = require('./db.js');
const obtenerValoresDeEntorno = require('./environment/getEnvironment.js');


// Configuración de variables de entorno
const config = obtenerValoresDeEntorno();

// Middleware para analizar JSON
app.use(express.json());



app.use(cors());



// Conexión a la base de datos
DBconection();


// Rutas de la API
routes(app);

// Servir archivos estáticos del frontend
app.use(express.static(path.join(__dirname, 'public')));

// Redirigir todas las rutas desconocidas al frontend
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});



// Inicio del servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
