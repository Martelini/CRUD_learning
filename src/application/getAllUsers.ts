import { IUserRepository } from "./useCasesInterfaces";

export class GetAllUsersUseCase {

    constructor(private readonly userRepository: IUserRepository) {}

    async execute() {
        return await this.userRepository.getAllUsers();
    }
}