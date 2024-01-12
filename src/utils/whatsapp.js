import qrcode from 'qrcode-terminal';
import  { Client } from 'whatsapp-web.js';

const whatsapp = new Client();

whatsapp.on('qr', (qr) => {
  qrcode.generate(qr, {
    small: true
  });
}); 


whatsapp.on('ready', () => {
  console.log('Client whatsapp is ready!');      
});



// Enviar mensaje por whatsapp.
export const sendWhatsappMsg = async(tel, msg) => {
  try {

    tel = '+1' + tel;

    // Enviar el mensaje   
    const chatId = tel.substring(1) + "@c.us";
    const number_details = await whatsapp.getNumberId(chatId);
  
    if (number_details) {
      await whatsapp.sendMessage(chatId, msg);
    }else {
     console.log('Whatsapp no encontrado', number_details);
    }  
  
    
  } catch (error) {
    console.log(error);
  }
 
}

export default whatsapp;
