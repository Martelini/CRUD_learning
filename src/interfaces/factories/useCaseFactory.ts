import { CreateUserUseCase } from "../../application/createUser";
import { GetAllUsersUseCase } from "../../application/getAllUsers";
import { GetUserByIdUseCase } from "../../application/getUserById";
import { RepositoryFactory } from "./repositoryFactory";

export class UseCaseFactory {
    static createUseCase(useCase: string) {
        const userRepository = RepositoryFactory.createRepository('User');
        switch(useCase) {
            case 'createUser':
                if(userRepository !== undefined)
                    return new CreateUserUseCase(userRepository);
                return;
            case 'getAllUsers':
                if(userRepository !== undefined)
                    return new GetAllUsersUseCase(userRepository);
                return;
            case 'getUserById':
                if(userRepository !== undefined)
                    return new GetUserByIdUseCase(userRepository);
                return;       
            default:
                return;
        }
    }
}