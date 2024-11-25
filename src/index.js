import { server } from './app.js';  // Importa el servidor desde app.js
import { connectDB } from './db.js';

connectDB();

// Escucha en el puerto 4000
server.listen(4000, () => {
    console.log('Server on port', 4000);
});
