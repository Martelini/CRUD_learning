import { Collection } from 'mongodb';
import { UserDocument } from '../../infrastructure/mongodb/userDocument';
import { User } from '../../entities/user';
import { mapToResult, mapToUser, mapToUserDocument } from '../../infrastructure/mongodb/userMapper';
import { Result, UserRepository } from '../../application/useCasesInterfaces';

export class MongoDbUserRepository implements UserRepository {
    private collection: Collection<UserDocument>;

    constructor(collection: Collection<UserDocument>) {
        this.collection = collection;
    }

    async createUser(user: User): Promise<Result> {
        const result = await this.collection.insertOne(mapToUserDocument(user));
        return mapToResult(result.acknowledged);
    }

    async getAllUsers(): Promise<User[]> {
        const userDocumentList = await this.collection.find().toArray();
        return userDocumentList.map((userDocument) => mapToUser(userDocument));
    }
}