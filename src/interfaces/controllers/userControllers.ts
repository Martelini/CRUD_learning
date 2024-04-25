import { Request } from 'express';
import { CreateUserUseCase } from '../../application/createUser';
import { GetAllUsersUseCase } from '../../application/getAllUsers';
import { GetUserByIdUseCase } from '../../application/getUserById';
import { mapBodyToUser } from '../../infrastructure/mongodb/userMapper';
import { HttpRequest, HttpResponse } from '../adapters/httpParams';

export class UserController {
    getAllUsersUseCase: GetAllUsersUseCase;
    createUserUseCase: CreateUserUseCase;
    getUserByIdUseCase: GetUserByIdUseCase;

    constructor(
        getAllUsersUseCase: GetAllUsersUseCase, 
        createUserUseCase: CreateUserUseCase, 
        getUserByIdUseCase: GetUserByIdUseCase
    ) {
        this.getAllUsersUseCase = getAllUsersUseCase;
        this.createUserUseCase = createUserUseCase;
        this.getUserByIdUseCase = getUserByIdUseCase;
    }

    async HelloWorldService(request: HttpRequest, response: HttpResponse): Promise<HttpResponse> {
        console.log('controllers: HelloWorldService');
        return response.status(200).json('Hello World!'); 
    }

    async createUserService(request: HttpRequest, response: HttpResponse): Promise<HttpResponse> {
        console.log('controllers: createUserService');
        console.log('request.body:', request.body);
        if(request.body !== undefined) {
            const user = mapBodyToUser(request.body);
            const result = await this.createUserUseCase.execute(user);
            return response.status(200).json(result); 
        }
        return response.status(500).json({ message: "Could not create user!" }); 
    }

    async getAllUsersService(request: HttpRequest, response: HttpResponse): Promise<HttpResponse> {
        console.log('controllers: getAllUsersService');
        const allUsers = await this.getAllUsersUseCase.execute();
        if(allUsers !== undefined) {
            return response.status(200).json(allUsers);
        }
        return response.status(404).json({ message: "None user found!"});
    }

    async getUserByIdService(request: HttpRequest, response: HttpResponse): Promise<HttpResponse> {
        console.log('controllers: getUserByIdService');
        const { userId } = request.params;
        const user = await this.getUserByIdUseCase.execute(userId);
        if(user !== undefined) {
            return response.status(200).json(user);
        }
        return response.status(404).json({ message: "User not found!" });
    }
}