//import { Router } from "express";
import express from "express";
import { adaptRouteExpress } from "../../interfaces/adapters/adaptRouteExpress";
import { ControllerFactory } from "../../interfaces/factories/controllerFactory";

const router = express.Router();

export function createUserRouter(): express.Router {

    router.get('/v1/helloworld', (req, res) => {res.status(200).json('HelloWorld!')});

    router.get('/v1/users/all', adaptRouteExpress(ControllerFactory.createController('getAllUsers')));
    router.get('/v1/users/:userId', adaptRouteExpress(ControllerFactory.createController('getUserById')));

    router.post('/v1/users/signUp/', adaptRouteExpress(ControllerFactory.createController('createUser')));

    router.put('/v1/users/:userId', adaptRouteExpress(ControllerFactory.createController('updateUserById')));

    router.delete('/v1/users/:userId', adaptRouteExpress(ControllerFactory.createController('deleteUserById')));

    // router.post('/v1/users/:userId/createPost', createPost);

    // router.get('/v1/posts/all', readAllPosts);

    // router.get('/v1/users/:userId/posts', readAllUserPosts);

    // router.delete('/v1/users/:userId/delete/:postId', deletePost);

    return router;
}