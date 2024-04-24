import { User } from "../entities/user";
import { Result, UserRepository } from "./useCasesInterfaces";

export class CreateUserUseCase {
    userRepository: UserRepository;

    constructor(userRepository: UserRepository) {
        this.userRepository = userRepository;
    }

    async execute(user: User): Promise<Result> {
        console.log("create_user: execute");
        return await this.userRepository.createUser(user);
    }
}