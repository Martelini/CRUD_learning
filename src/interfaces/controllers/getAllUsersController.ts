import { GetAllUsersUseCase } from "../../application/getAllUsers";
import { IController } from "../../infrastructure/shared/protocol/controller";
import { IResult } from "../../infrastructure/shared/protocol/result";
import { HttpRequest } from "../adapters/httpParams";

export class GetAllUsersController implements IController<HttpRequest> {
    constructor(private readonly getAllUsersUseCase: GetAllUsersUseCase) {}

    async handle(request: HttpRequest): Promise<IResult> {
        const users = await this.getAllUsersUseCase.execute();
        if(!users) return { status: 'not found', data: {} };
        return { status: 'ok', data: users };
    }
}