import { Router } from 'express'
import { hello } from '../controllers/mqtt.controller.js';

const router = Router();

router.get('/', hello);

export default router;