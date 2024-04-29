import { startServer, setServer } from './infrastructure/express/app';
import { UserRepositoryImpl } from './interfaces/repositories/userRepository';
import express from 'express';
import { UserDocument } from './infrastructure/mongodb/userDocument';
import { MongoDbUserRepository } from './infrastructure/database/userDatabase';
import { connectToMongoDbDatabase, getCollection } from './infrastructure/mongodb/mongoConnection';

const app = express();

async function startApp(): Promise<void> {
    await connectToMongoDbDatabase();

    const userCollection = getCollection<UserDocument>('users');
    const database = new MongoDbUserRepository(userCollection);
    const userRepositoryImpl = new UserRepositoryImpl(database);
    
    setServer(app, userRepositoryImpl);
    startServer(app);
}

startApp();