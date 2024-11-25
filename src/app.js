import express from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import http from 'http'; // Usamos http para crear el servidor HTTP
import { Server } from 'socket.io'; // Usamos el servidor de socket.io

import authRoutes from './routes/auth.routes.js';
import taskRoutes from './routes/task.routes.js';

const app = express();

// Crear servidor HTTP con WebSocket
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:5173', // Permite solicitudes desde el frontend
    methods: ['GET', 'POST'], // Métodos permitidos
    credentials: true, // Permite las cookies
  },
});

// Configuración de CORS para Express
app.use(cors({
  origin: 'http://localhost:5173', // Permite el acceso desde el frontend
  credentials: true, // Permite enviar cookies
}));

app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

// Rutas de la API
app.use('/api', authRoutes);
app.use('/api', taskRoutes);

// Configuración de WebSocket
io.on('connection', (socket) => {
  console.log('Un cliente se ha conectado');

  // Escuchar eventos de comentarios
  socket.on('new-comment', (commentData) => {
    // Emitir el comentario a todos los clientes conectados
    io.emit('new-comment', commentData);
  });

  socket.on('disconnect', () => {
    console.log('Cliente desconectado');
  });
});

// Exportar el servidor para usarlo en otros archivos
export { server, io };
