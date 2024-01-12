import whatsapp from '../utils/whatsapp.js';
import mqttClient from '../utils/mqtt.js';












// funcion para publicar mensajes
const publishMessage = async(topic, message) => {

  console.log(`Sending topic: ${topic}, Message: ${message}`);

  mqttClient.publish(topic, message, {
    qos: 0,
    retain: false
  });
}





// Controlador para publicar mensajes
const publisher = (req, res) => {
  try {

    let {topic, message} = req.body;    
    publishMessage(topic, message);

  } catch (error) {

    console.log('Error: ', error);
  }

 
  res.send('Mensaje publicado');
}


// controlador para Subcribirse al mqtt broker 
const subscriber = (req, res) => {
  try {
    let { topic } = req.query;
   
    connectToBroker();
    subscribeToTopic(topic);
    
  } catch (error) {
    console.log(error); 
  }

  res.send('subcrito');
 
}

export  {
  publisher,
  subscriber
}