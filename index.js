const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const routes = require('./routers.js');
const DBconection = require('./db.js');
const obtenerValoresDeEntorno = require('./environment/getEnvironment.js');
//const fileUpload = require('express-fileupload');

// Configuración de variables de entorno
const config = obtenerValoresDeEntorno();

// Middleware para analizar JSON y manejar archivos
app.use(express.json());
//app.use(fileUpload());
app.use(cors());

// Configuración para servir archivos estáticos
app.use('/uploads', express.static(path.resolve(__dirname, 'uploads')));
app.use(express.static(path.resolve(__dirname, 'public')));

// Conexión a la base de datos
DBconection();

// Rutas de la API
routes(app);

// Ruta para descargar la imagen
app.get('/download/:fileName', (req, res) => {
  const fileName = req.params.fileName;
  const filePath = path.join(__dirname, 'uploads', fileName);

  res.download(filePath, fileName, (err) => {
    if (err) {
      console.error('Error al descargar el archivo:', err);
      res.status(404).send('Archivo no encontrado');
    }
  });
});

// Redirigir todas las rutas desconocidas al frontend
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Inicio del servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
