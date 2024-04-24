import { Router } from "express";
import { UserController } from "../../interfaces/controllers/userControllers";
import { GetAllUsersUseCase } from "../../application/getAllUsers";
import { UserRepository } from "../../application/useCasesInterfaces";
import { CreateUserUseCase } from "../../application/createUser";

export function createUserRouter(userRepository: UserRepository): Router {
    const router = Router();
    const getAllUsersUseCase = new GetAllUsersUseCase(userRepository)
    const createUserUseCase = new CreateUserUseCase(userRepository)
    const userController = new UserController(getAllUsersUseCase, createUserUseCase);

    router.get('/users/all', userController.getAllUsers.bind(userController));

    router.put('/users/all', userController.createUser.bind(userController));

    return router;
}

// Welcome page

// router.get('/home', welcomeMessage);

// Read users


// router.get('/users/:userId', getUser);

// // Add users

// router.post('/users/signUp', signUp);

// // Update user

// router.put('/users/update/:userId', updateUser);

// // Delete user

// router.delete('/users/delete/:userId', deleteUser);

// // Create post

// router.post('/users/:userId/createPost', createPost);

// // Read all posts

// router.get('/posts/all', readAllPosts);

// // Read all posts of a user

// router.get('/users/:userId/posts', readAllUserPosts);

// // Read all posts of a user

// router.delete('/users/:userId/delete/:postId', deletePost);