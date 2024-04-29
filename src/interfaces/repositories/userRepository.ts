import { User } from '../../entities/user';
import { Result, UserRepository } from '../../application/useCasesInterfaces';

export interface UserDatabase {
    createUserOnDatabase(user: User): Promise<Result>,
    getAllUsersFromDatabase(): Promise<User[] | undefined>,   
    getUserByIdFromDatabase(userId: string): Promise<User | undefined>,   
}

export class UserRepositoryImpl implements UserRepository {
    database: UserDatabase;

    constructor(database: UserDatabase) {
        this.database = database;
    }

    async createUser(user: User): Promise<Result> {
        return await this.database.createUserOnDatabase(user);
    }

    async getAllUsers(): Promise<User[] | undefined> {
        return await this.database.getAllUsersFromDatabase();
    }

    async getUserById(userId: string): Promise<User | undefined> {
        return await this.database.getUserByIdFromDatabase(userId);
    }
}