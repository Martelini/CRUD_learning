import { deleteUser, getAllUsers, getUser, signUp, updateUser, welcomeMessage } from '../controllers/smart.controllers'
import { Router } from "express";
export const router = Router();

// Welcome page

router.get('/home', welcomeMessage);

// Read users

router.get('/getUsers', getAllUsers);
router.get('/:userId', getUser);

// Add users

router.post('/signUp', signUp);

// Update user

router.put('/update/:userId', updateUser);

// Delete user

router.delete('/delete/:userId', deleteUser);