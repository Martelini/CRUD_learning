import { User } from "../entities/user";

export interface IUserRepository {
    createUser(user: User): Promise<Result>;
    getAllUsers(): Promise<User[] | undefined>;
    getUserById(userId: string): Promise<User | undefined>;
}

export interface Result {
    status: string;
}

export interface IUserProps {
    userId: string | undefined;
    email: string;
    password: string;
    username: string;
    fullName: string;
    birthDate: string;
}