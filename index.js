const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const routes = require('./routers.js');
const DBconection = require('./db.js');
const obtenerValoresDeEntorno = require('./environment/getEnvironment.js');
const axios = require('axios');
const fs = require('fs');

const tempDir = path.join(__dirname, 'temp');
if (!fs.existsSync(tempDir)) {
  fs.mkdirSync(tempDir); // Crear el directorio si no existe
}

// Configuración de variables de entorno
const config = obtenerValoresDeEntorno();

// Middleware para analizar JSON y manejar archivos
app.use(express.json());

app.use(cors());

// Configuración para servir archivos estáticos
//app.use('/uploads', express.static(path.resolve(__dirname, 'uploads')));
//app.use('/', express.static(path.resolve(__dirname, 'public')));
app.use(express.static(path.join(__dirname, '/public')))
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/index.html'))
})
// Conexión a la base de datos
DBconection();

// Rutas de la API
routes(app);

// Ruta para descargar la imagen
app.get('/download', async (req, res) => {
  const { imageUrl } = req.query; // Recibir la URL de la imagen desde los parámetros de consulta

  if (!imageUrl) {
    return res.status(400).send('La URL de la imagen es obligatoria.');
  }

  try {
    // Descargar el archivo desde la URL proporcionada
    const response = await axios.get(imageUrl, { responseType: 'stream' });

    // Extraer el nombre del archivo de la URL
    const fileName = path.basename(imageUrl);

    // Ruta temporal para almacenar el archivo
    const tempPath = path.join(__dirname, 'temp', fileName);

    // Crear un stream para guardar el archivo localmente
    const writer = fs.createWriteStream(tempPath);
    response.data.pipe(writer);

    writer.on('finish', () => {
      // Usar res.download para enviar el archivo al cliente
      res.download(tempPath, fileName, (err) => {
        // Eliminar el archivo temporal después de la descarga
        fs.unlinkSync(tempPath);

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
