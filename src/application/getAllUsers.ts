import { UserRepository } from "./useCasesInterfaces";

export class GetAllUsersUseCase {
    userRepository: UserRepository;

    constructor(userRepository: UserRepository) {
        this.userRepository = userRepository;
    }

    async execute() {
        console.log("get_all_users: execute");
        return await this.userRepository.getAllUsers();
    }
}