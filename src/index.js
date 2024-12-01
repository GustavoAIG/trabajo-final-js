import dotenv from 'dotenv';
import { server } from './app.js'; // Importa el servidor desde app.js
import { connectDB } from './db.js';

// Cargar las variables de entorno desde el archivo .env
dotenv.config();

connectDB();

// Escucha en el puerto 4000
server.listen(4000, () => {
  console.log('Server on port 4000');
});
