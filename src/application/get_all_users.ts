import { User } from "../entities/user";

export interface UserRepository {
    getAllUsersInfo(): Promise<User[]>;
}

export class GetAllUsersUseCase {
    userRepository: UserRepository;

    constructor(userRepository: UserRepository) {
        this.userRepository = userRepository;
    }

    async execute() {
        console.log("get_all_users: execute");
        return await this.userRepository.getAllUsersInfo();
    }
}