import express from 'express';
import {  checkAuth, login, logout, singup, updateProfile,  } from '../controller/auth.controller.js';
import { protecRoute } from '../middleware/auth.medilware.js';

const router = express.Router();

router.post('/sigup',singup);

router.post('/login',login );

router.post('/logout',logout);

router.put("/update-profile",protecRoute,updateProfile)

router.get("/check" , protecRoute, checkAuth)
export default router;
