const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const routes = require('./routers.js');
const DBconection = require('./db.js');
const obtenerValoresDeEntorno = require('./environment/getEnvironment.js');
const axios = require('axios');
const fs = require('fs');
const fileUpload = require('express-fileupload');

// Configuración de variables de entorno
const config = obtenerValoresDeEntorno();

// Middleware para analizar JSON y manejar archivos
app.use(express.json());
app.use(fileUpload());
app.use(cors());

// Configuración para servir archivos estáticos
app.use(express.static(path.join(__dirname, '/public')));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

// Conexión a la base de datos
DBconection();

// Rutas de la API
routes(app);

// Ruta para descargar la imagen
app.get('/download', async (req, res) => {
  const { imageUrl } = req.query;

  if (!imageUrl) {
    return res.status(400).send('La URL de la imagen es obligatoria.');
  }

  try {
    const response = await axios.get(imageUrl, { responseType: 'stream' });
    const fileName = path.basename(imageUrl);

    // Usar /tmp como directorio temporal
    const tempPath = path.join('/tmp', fileName);

    const writer = fs.createWriteStream(tempPath);
    response.data.pipe(writer);

    writer.on('finish', () => {
      res.download(tempPath, fileName, (err) => {
        fs.unlinkSync(tempPath); // Eliminar el archivo temporal

        if (err) {
          console.error('Error al descargar el archivo:', err);
          res.status(500).send('Error al procesar la descarga');
        }
      });
    });

    writer.on('error', (err) => {
      console.error('Error al guardar el archivo:', err);
      res.status(500).send('Error al guardar el archivo');
    });
  } catch (err) {
    console.error('Error al descargar la imagen:', err.message);
    res.status(404).send('Error al descargar la imagen.');
  }
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
