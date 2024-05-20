import { CreateUserUseCase } from "../../application/createUser";
import { User } from "../../entities/user";
import { mapBodyToUser } from "../../infrastructure/mongodb/userMapper";
import { IController } from "../../infrastructure/shared/protocol/controller";
import { IResult } from "../../infrastructure/shared/protocol/result";
import { HttpRequest, HttpResponse } from "../adapters/httpParams";

export class CreateUserController implements IController<HttpRequest> {
    constructor(private readonly createUserUseCase: CreateUserUseCase) {}

    async handle(request: HttpRequest): Promise<IResult> {
        if(request.body !== undefined) {
            const user = request.body as User;
            const result = await this.createUserUseCase.execute(user);
            return {
                status: 'ok',
                data: result
            } as IResult;
        }
        return {
            status: 'error',
            data: { message: "Could not create user!" }
        } as IResult;
    }
}
