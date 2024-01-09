import dotenv from 'dotenv';
import app from './src/app.js';

dotenv.config();

const port = process.env.PORT || 3000;

// Inicia el servidor en el puerto 3000
app.listen(port, () => {
  console.log(`Servidor Express escuchando en el puerto ${port}`);
});