import { User } from "../entities/user";
import { UserRepository } from "./useCasesInterfaces";

export class GetUserByIdUseCase {
    userRepository : UserRepository;

    constructor(userRepository: UserRepository) {
        this.userRepository = userRepository;
    }

    async execute(userId: string): Promise<User | undefined> {
        return await this.userRepository.getUserById(userId);
    }
}