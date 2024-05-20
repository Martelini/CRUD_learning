import { User } from '../entities/user';
import { Result, IUserRepository } from './useCasesInterfaces';

export class CreateUserUseCase {

    constructor(private readonly userRepository: IUserRepository) {};

    async execute(user: User): Promise<Result> {
        return await this.userRepository.createUser(user);
    }
}