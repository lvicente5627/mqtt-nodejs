import whatsapp from '../utils/whatsapp.js'


export const sendWhatsappMsg = async(tel, message) => {
  try {

    tel = '+1' + tel;

    // Enviar el mensaje   
    const chatId = tel.substring(1) + "@c.us";
    const number_details = await whatsapp.getNumberId(chatId);
  
    if (number_details) {
      await whatsapp.sendMessage(chatId, message);
      res.json({result: true});
    }else {
      res.json({result: true});
    }  
  
    
  } catch (error) {
    console.log(error);
  }
 
}
  
