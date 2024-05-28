import { CreateUserUseCase } from "../../application/createUser";
import { GetAllUsersUseCase } from "../../application/getAllUsers";
import { GetUserByIdUseCase } from "../../application/getUserById";
import { IController } from "../../infrastructure/shared/protocol/controller";
import { CreateUserController } from "../controllers/createUserController";
import { GetAllUsersController } from "../controllers/getAllUsersController";
import { UseCaseFactory } from "./useCaseFactory";

export class ControllerFactory {
    static createController(useCase: string): IController | undefined {
        switch(useCase) {
            case 'createUser':
                const createUserUseCase = UseCaseFactory.createUseCase('createUser');
                if(createUserUseCase !== undefined)
                    return new CreateUserController(createUserUseCase as CreateUserUseCase);
                return;
            case 'getAllUsers':
                const getAllUsersUseCase = UseCaseFactory.createUseCase('getAllUsers');
                if(getAllUsersUseCase !== undefined)
                    return new GetAllUsersController(getAllUsersUseCase as GetAllUsersUseCase);
                return;    
            // case 'getUserById':
            //     const getUserByIdUseCase = UseCaseFactory.createUseCase('getUserById');
            //     if(getUserByIdUseCase !== undefined)
            //         return new GetUserByIdController(getUserByIdUseCase as GetUserByIdUseCase);
            //     return; 
            default:
                return; 
        }
    }
}