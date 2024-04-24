import { User } from "../entities/user";

export interface UserRepository {
    createUser(user: User): Promise<Result>;
    
    getAllUsers(): Promise<User[]>;
}

export interface Result {
    status: string;
}