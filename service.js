import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import indexRouter from './routes/index.routes.js';
import aboutRouter from './routes/about.routes.js';
import contactRouter from './routes/contact.routes.js'
import { simulatorRouter } from './routes/simulator.routes.js';

// Configuración para poder usar __dirname con ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Configurar el motor de vistas EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Rutas
app.use(indexRouter);
app.use(aboutRouter);
app.use(contactRouter);
app.use(simulatorRouter);

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
