import dotenv from 'dotenv';
import app from './src/app.js';
import  whatsapp  from './src/utils/whatsapp.js';
import mqttClient, { subscribeToTopic, mqttOnMessage, mqttOnError } from './src/utils/mqtt.js';

dotenv.config();

const port = process.env.PORT || 4000;
let topic = 'led';

whatsapp.initialize();

// Cuando se conecta al mqtt 
mqttClient.on('connect', () => {
  console.log('Client connected: ');
});


subscribeToTopic(topic);

// mensaje recivido el mqtt.
mqttOnMessage();

// cuando hay un error en mqtt
mqttOnError();

// Inicia el servidor en el puerto 3000
app.listen(port, () => {
  console.log(`Servidor Express escuchando en el puerto ${port}`);
});

