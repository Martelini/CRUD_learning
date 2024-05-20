import { User } from "../entities/user";
import { IUserRepository } from "./useCasesInterfaces";

export class GetUserByIdUseCase {

    constructor(private readonly userRepository: IUserRepository) {}

    async execute(userId: string): Promise<User | undefined> {
        return await this.userRepository.getUserById(userId);
    }
}