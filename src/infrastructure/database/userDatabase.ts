import { Collection, ObjectId } from 'mongodb';
import { UserDocument } from '../mongodb/userDocument';
import { User } from '../../entities/user';
import { mapToResult, mapToUser, mapToUserDocument } from  '../mongodb/userMapper';
import { Result, UserRepository } from '../../application/useCasesInterfaces';
import { UserDatabase } from '../../interfaces/repositories/userRepository';

export class MongoDbUserRepository implements UserDatabase {
    private collection: Collection<UserDocument>;

    constructor(collection: Collection<UserDocument>) {
        this.collection = collection;
    }

    async createUserOnDatabase(user: User): Promise<Result> {
        const result = await this.collection.insertOne(mapToUserDocument(user));
        return mapToResult(result.acknowledged);
    }

    async getAllUsersFromDatabase(): Promise<User[] | undefined> {
        const userDocumentList = await this.collection.find().toArray();
        return userDocumentList ? userDocumentList.map((userDocument) => mapToUser(userDocument)): undefined;
    }

    async getUserByIdFromDatabase(userId: string): Promise<User | undefined> {
        const userDocument = await this.collection.findOne({ _id: new ObjectId(userId) });
        return userDocument ? mapToUser(userDocument) : undefined;
    }
}