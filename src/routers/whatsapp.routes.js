import { Router } from 'express'
import { sendWhatsappMsg } from '../controllers/whatsapp.controller.js';

const router = Router();

router.post('/whatsapp/send', sendWhatsappMsg);

export default router;

