import { CreateUserUseCase } from "../../application/createUser";
import { GetAllUsersUseCase } from "../../application/getAllUsers";
import { HttpRequest, HttpResponse } from "../adapters/httpParams";

export class UserController {
    getAllUsersUseCase: GetAllUsersUseCase;
    createUserUseCase: CreateUserUseCase;

    constructor(getAllUsersUseCase: GetAllUsersUseCase, createUserUseCase: CreateUserUseCase) {
        this.getAllUsersUseCase = getAllUsersUseCase;
        this.createUserUseCase = createUserUseCase;
    }

    async createUser(request: HttpRequest, response: HttpResponse): Promise<HttpResponse> {
        console.log("controllers: createUser");
        const { user } = request.body;
        
        const result = await this.createUserUseCase.execute(user);
        return response.json(result); 
    }

    async getAllUsers(request: HttpRequest, response: HttpResponse): Promise<HttpResponse> {
        console.log("controllers: getAllUsers");
        const allUsers = await this.getAllUsersUseCase.execute();
        console.log("controllers: var allUsers =", allUsers);
        return response.json(allUsers);
    }
}