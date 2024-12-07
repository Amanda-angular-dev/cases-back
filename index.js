

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

// Configuración de CORS
app.use(cors({
    origin: 'http://localhost:4200',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
}));

// Manejo explícito de solicitudes preflight
app.options('*', cors({
    origin: 'http://localhost:4200',
    credentials: true
}));

// Logs para depuración (opcional)
app.use((req, res, next) => {
    console.log('Request Method:', req.method);
    console.log('Request Headers:', req.headers);
    console.log('Request Origin:', req.headers.origin);
    next();
});

// Conexión a la base de datos
DBconection();

// Configuración de subida de archivos
app.use(fileUpload({
    limits: { fileSize: 4 * 1024 * 1024 } // 4 MB
}));

// Configuración de archivos estáticos
app.use('/static', express.static(path.join(__dirname, 'public')));
app.use('/uploads', express.static(path.resolve(__dirname, 'uploads')));

// Rutas de la aplicación
routes(app);

// Endpoint adicional (de ejemplo)
app.post('/notification', (req, res) => {
    res.status(200).json({ message: 'Notificación recibida correctamente' });
});

// Inicio del servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
