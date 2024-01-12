import { Router } from 'express'
import { publisher, subscriber } from '../controllers/mqtt.controller.js';

const router = Router();

router.post('/publisher', publisher);
router.get('/subscriber', subscriber);

export default router;