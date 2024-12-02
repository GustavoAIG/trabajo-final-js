import dotenv from 'dotenv';
import { server } from './app.js'; // Importa el servidor desde app.js
import { connectDB } from './db.js';

// Cargar las variables de entorno desde el archivo .env
dotenv.config();

connectDB(); // Conectar a la base de datos

// No necesitas llamar a server.listen() aquí, ya está en app.js
// La configuración de escucha ya se maneja en app.js
