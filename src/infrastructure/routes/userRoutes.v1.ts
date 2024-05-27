//import { Router } from "express";
import express from "express";
import { GetAllUsersUseCase } from "../../application/getAllUsers";
import { CreateUserUseCase } from "../../application/createUser";
import { UserRepository } from "../database/userDatabase";
import { GetUserByIdUseCase } from "../../application/getUserById";
import { adaptRouteExpress } from "../../interfaces/adapters/adaptRouteExpress";
import { CreateUserController } from "../../interfaces/controllers/createUserController";
import { GetAllUsersController } from "../../interfaces/controllers/getAllUsersController";

const router = express.Router();

export function createUserRouter(userRepository: UserRepository): express.Router {
    const getAllUsersUseCase = new GetAllUsersUseCase(userRepository)
    const createUserUseCase = new CreateUserUseCase(userRepository)
    const getUserByIdUseCase = new GetUserByIdUseCase(userRepository)
    const getAllUsersController = new GetAllUsersController(getAllUsersUseCase);
    const createUserController = new CreateUserController(createUserUseCase);

    router.get('/v1/helloworld', (req, res) => {res.status(200).json('HelloWorld!')});

    router.get('/v1/users/all', adaptRouteExpress(getAllUsersController));
    // router.get('/users/:userId', userController.getUserByIdService.bind(userController));

    router.post('/v1/users/create/', adaptRouteExpress(createUserController));
    // router.post('/v1/users/create', (req,res) => console.log(req.body));

    // router.put('/v1/users/update/:userId', updateUser);

    // router.delete('/v1/users/delete/:userId', deleteUser);

    // router.post('/v1/users/:userId/createPost', createPost);

    // router.get('/v1/posts/all', readAllPosts);

    // router.get('/v1/users/:userId/posts', readAllUserPosts);

    // router.delete('/v1/users/:userId/delete/:postId', deletePost);

    return router;
}