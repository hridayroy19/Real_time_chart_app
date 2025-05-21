import express from 'express';
import { protecRoute } from '../middleware/auth.medilware';
import { getMessages, getUserSidbar } from '../controller/message.controller.js';

const router = express.Router();

router.get('/user',protecRoute,getUserSidbar);

router.get('/:id',protecRoute,getMessages);

router.post('/send/:id',protecRoute,sendMessages);


export default router;
