import { Router } from "express";
import { UserController } from "../../interfaces/controllers/userControllers";
import { GetAllUsersUseCase } from "../../application/getAllUsers";
import { CreateUserUseCase } from "../../application/createUser";
import { UserRepositoryImpl } from "../../interfaces/repositories/userRepository";
import { GetUserByIdUseCase } from "../../application/getUserById";

export function createUserRouter(userRepositoryImpl: UserRepositoryImpl): Router {
    const router = Router();
    const getAllUsersUseCase = new GetAllUsersUseCase(userRepositoryImpl)
    const createUserUseCase = new CreateUserUseCase(userRepositoryImpl)
    const getUserByIdUseCase = new GetUserByIdUseCase(userRepositoryImpl)
    const userController = new UserController(
        getAllUsersUseCase, 
        createUserUseCase, 
        getUserByIdUseCase);

    router.get('/helloworld', userController.HelloWorldService.bind(userController));

    router.get('/users/all', userController.getAllUsersService.bind(userController));
    router.get('/users/:userId', userController.getUserByIdService.bind(userController));

    router.post('/users/signUp', userController.createUserService.bind(userController));

    // router.put('/users/update/:userId', updateUser);

    // router.delete('/users/delete/:userId', deleteUser);

    // router.post('/users/:userId/createPost', createPost);

    // router.get('/posts/all', readAllPosts);

    // router.get('/users/:userId/posts', readAllUserPosts);

    // router.delete('/users/:userId/delete/:postId', deletePost);

    return router;
}