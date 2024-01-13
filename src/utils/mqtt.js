import moment from "moment";

import mqtt  from "mqtt";
import whatsapp, { sendWhatsappMsg } from "./whatsapp.js";
import mysqlPool from "../config/db.js";



// Octener el tel desde la base de datos.
const getTel = async() => {
  let tel;
  const connection  =  await mysqlPool.getConnection();

  const selectquery = `
      SELECT * FROM tel WHERE id =1;
    `

  const [rows] = await connection.query(selectquery); 

  connection.release();
  return rows
}


let mqttClient;

// change this to your MQTT broker or DNS name.
const mqttHost= "vicenteapp.com";
const protocol = "mqtt";
const mqttPort = 1883;


const clientId = "client" + Math.random().toString(36).substring(7);

// change this point to your MQTT broker.
const hostUrl = `${protocol}://${mqttHost}:${mqttPort}`;

const options = { 
  keepalive: 60,
  clientId: clientId,
  protocolId: "MQTT",
  protocolVersion: 4,
  clean: true,
  reconnectPeriod: 1000,
  connectTimeout: 30 * 1000
};

mqttClient = mqtt.connect(hostUrl, options);

// subscribirse al topic led.
export const subscribeToTopic = async(topic) => {
  try {
    console.log(`Subscribing to Topic: ${topic}`);
    mqttClient.subscribe(topic, { qos: 0 });
    console.log(`Suscrito al topic ${topic}`);    
  } catch (error) {
    console.log(`Error al Conectarse al topic: ${topic}`);    
  }
}

// cuando recive un mensaje  se ejecuta esta funcion.
export const mqttOnMessage = () => {
   // received message
  mqttClient.on('message',async (topic, message, packet) => { 
    const tel = '5083609228';
    
    let now = moment();
    let dateFormated =  now.format("DD/MM/YYYY");
    let timeFormated = now.format("h:mm:ss a");

    let msg = message.toString();
   

    if (msg === '1') {
     
      const telResult = getTel();

      if (telResult.length > 0 ) {
          tel = telResult[0].telefono;
      }
     

      
      

      sendWhatsappMsg(tel, `Led encendido:  ${dateFormated} ${timeFormated }`);
    }else if (msg === '0') {
      
      sendWhatsappMsg(tel, `Led Apagado:  ${dateFormated} ${timeFormated }`);

    }
    console.log('Mensaje recivido en el: ' + topic+ ': ' + msg);  
  });
}

export const mqttOnError = () => {
  mqttClient.on('error', (err)=> {
    console.log('Error: ', err);
    mqttClient.end();
  
  });
}

export default mqttClient;





 


 

 
