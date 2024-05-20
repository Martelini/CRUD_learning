//import { Router } from "express";
import express from "express";
import { GetAllUsersUseCase } from "../../application/getAllUsers";
import { CreateUserUseCase } from "../../application/createUser";
import { UserRepository } from "../database/userDatabase";
import { GetUserByIdUseCase } from "../../application/getUserById";
import { adaptRouteExpress } from "../../interfaces/adapters/adaptRouteExpress";
import { CreateUserController } from "../../interfaces/controllers/createUserController";

const router = express.Router();

export function createUserRouter(userRepository: UserRepository): express.Router {
    const getAllUsersUseCase = new GetAllUsersUseCase(userRepository)
    const createUserUseCase = new CreateUserUseCase(userRepository)
    const getUserByIdUseCase = new GetUserByIdUseCase(userRepository)
    const createUserController = new CreateUserController(createUserUseCase);

    router.get('/helloworld', (req, res) => {res.status(200).json('HelloWorld!')});

    // router.get('/users/all', adaptRouteExpress(createUserController));
    // router.get('/users/:userId', userController.getUserByIdService.bind(userController));

    router.post('/users/create/', adaptRouteExpress(createUserController));
    // router.post('/users/create', (req,res) => console.log(req.body));

    // router.put('/users/update/:userId', updateUser);

    // router.delete('/users/delete/:userId', deleteUser);

    // router.post('/users/:userId/createPost', createPost);

    // router.get('/posts/all', readAllPosts);

    // router.get('/users/:userId/posts', readAllUserPosts);

    // router.delete('/users/:userId/delete/:postId', deletePost);

    return router;
}