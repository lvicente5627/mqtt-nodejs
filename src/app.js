// Importa el módulo Express
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';
import routes from './routers/mqtt.routes.js'
import whatsappRoutes from './routers/whatsapp.routes.js'
import {resError} from './utils/index.js';
import session from 'express-session';
import telRouter from './routers/tel.routes.js';

let sessionSecret = process.env.sessionSecret || '123456'


dotenv.config();



const app = express();

app.use(session({
  secret: '123456',  // a secret string used to sign the session ID cookie
  resave: false,  // don't save session if unmodified
  saveUninitialized: false  // don't create session until something stored
}));

app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Ruta de ejemplo
app.use(routes);
app.use(whatsappRoutes);
app.use(telRouter);

// Manejador de errores.
app.use((error, req, res, next) => {
  const { statusCode, message, errorNumber } = error
  resError(res, statusCode, errorNumber, message );
});


app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});




export default app;



