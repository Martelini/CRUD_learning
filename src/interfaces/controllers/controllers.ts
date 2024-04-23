import { GetAllUsersUseCase } from "../../application/get_all_users";
import { HttpRequest, HttpResponse } from "../adapters/http";

export class UserController {
    getAllUsersUseCase: GetAllUsersUseCase;

    constructor(getAllUsersUseCase: GetAllUsersUseCase) {
        this.getAllUsersUseCase = getAllUsersUseCase;
    }

    async getAllUsers(request: HttpRequest, response: HttpResponse  ): Promise<HttpResponse> {
        console.log("controllers: getAllUsers");
        const allUsers = await this.getAllUsersUseCase.execute();
        console.log("controllers: var allUsers =", allUsers);
        return response.json(allUsers);
    }
}