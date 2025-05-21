import express from 'express';
import { protecRoute } from '../middleware/auth.medilware';
import { getUserSidbar } from '../controller/message.controller.js';

const router = express.Router();

router.post('/user',protecRoute,getUserSidbar);


export default router;
