import { Collection } from 'mongodb';
import { User } from '../../entities/user'
import { UserRepository } from '../../application/get_all_users';

export class MongoDbUserRepository implements UserRepository {
    private collection: Collection<User>;

    constructor(collection: Collection<User>) {
        this.collection = collection;
    }

    async getAllUsersInfo(): Promise<User[]> {
        const userList = await this.collection.find().toArray();
        return userList;
    }
}