import { Collection, ObjectId } from 'mongodb';
import { UserDocument } from '../mongodb/userDocument';
import { User } from '../../entities/user';
import { mapToResult, mapToUser, mapToUserDocument } from  '../mongodb/userMapper';
import { Result, IUserRepository } from '../../application/useCasesInterfaces';

export class UserRepository implements IUserRepository {
    private collection: Collection<UserDocument>;

    constructor(collection: Collection<UserDocument>) {
        this.collection = collection;
    }

    async createUser(user: User): Promise<Result> {
        const result = await this.collection.insertOne(mapToUserDocument(user));
        return mapToResult(result.acknowledged);
    }

    async getAllUsers(): Promise<User[] | undefined> {
        const userDocumentList = await this.collection.find().toArray();
        return userDocumentList ? userDocumentList.map((userDocument) => mapToUser(userDocument)): undefined;
    }

    async getUserById(userId: string): Promise<User | undefined> {
        const userDocument = await this.collection.findOne({ _id: new ObjectId(userId) });
        return userDocument ? mapToUser(userDocument) : undefined;
    }
}