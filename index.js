

const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const routes = require('./routers.js');
const DBconection = require('./db.js');
const obtenerValoresDeEntorno = require('./environment/getEnvironment.js');
const fileUpload = require('express-fileupload');

// Configuración de variables de entorno
const config = obtenerValoresDeEntorno();

// Middleware para analizar JSON
app.use(express.json());

// CORS (ahora simplificado porque compartes URL)
app.use(cors());

// Logs para depuración (opcional)
app.use((req, res, next) => {
    console.log('Request Method:', req.method);
    console.log('Request URL:', req.url);
    next();
});

// Conexión a la base de datos
DBconection();

// Configuración de subida de archivos
app.use(fileUpload({
    limits: { fileSize: 4 * 1024 * 1024 } // 4 MB
}));

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
