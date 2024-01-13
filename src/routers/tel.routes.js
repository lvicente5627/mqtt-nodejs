import { Router } from "express";
import { updateTel } from "../controllers/tel.controller.js";

const router = Router();

router.post('/tel', updateTel );

export default router;