import { createPost, deleteUser, getAllUsers, getUser, readAllPosts, readAllUserPosts, signUp, updateUser, welcomeMessage } from '../controllers/smart.controllers'
import { Router } from "express";
export const router = Router();

// Welcome page

router.get('/home', welcomeMessage);

// Read users

router.get('/users/all', getAllUsers);
router.get('/users/:userId', getUser);

// Add users

router.post('/users/signUp', signUp);

// Update user

router.put('/users/update/:userId', updateUser);

// Delete user

router.delete('/users/delete/:userId', deleteUser);

// Create post

router.post('/users/:userId/createPost', createPost);

// Read all posts

router.get('/posts/all', readAllPosts);

// Read all posts of a user

router.get('/users/:userId/posts', readAllUserPosts);