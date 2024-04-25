import { User } from "../entities/user";

export interface UserRepository {
    createUser(user: User): Promise<Result>;
    getAllUsers(): Promise<User[] | undefined>;
    getUserById(userId: string): Promise<User | undefined>;
}

export interface Result {
    status: string;
}