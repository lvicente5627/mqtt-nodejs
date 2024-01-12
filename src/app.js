// Importa el módulo Express
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';
import routes from './routers/mqtt.routes.js'
import whatsappRoutes from './routers/whatsapp.routes.js'
import {resError} from './utils/index.js';


dotenv.config();

const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Ruta de ejemplo

app.use(routes);
app.use(whatsappRoutes);

// Manejador de errores.
app.use((error, req, res, next) => {
  const { statusCode, message, errorNumber } = error
  resError(res, statusCode, errorNumber, message );
});


app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});




export default app;



