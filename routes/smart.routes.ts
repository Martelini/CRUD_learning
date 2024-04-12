import { signUp } from '../controllers/smart.controllers'
import { Router } from "express";
export const router = Router();

// Add users

router.get('/signup', signUp);
