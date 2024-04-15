import { signUp, welcomeMessage } from '../controllers/smart.controllers'
import { Router } from "express";
export const router = Router();

// Welcome page

router.get('/home', welcomeMessage);

// Add users

router.get('/signup', signUp);

// 