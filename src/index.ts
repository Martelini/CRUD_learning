import { startServer, setServer } from './infrastructure/express/app';
import express from 'express';
import { UserDocument } from './infrastructure/mongodb/userDocument';
import { UserRepository } from './infrastructure/database/userDatabase';
import { connectToMongoDbDatabase, getCollection } from './infrastructure/mongodb/mongoConnection';

const app = express();

async function startApp(): Promise<void> {
    try {
        await connectToMongoDbDatabase();

        const userCollection = getCollection<UserDocument>('users');
        const userRepository = new UserRepository(userCollection);
        
        setServer(app, userRepository);
        startServer(app);
    } catch (error) {
        console.log('Error:', error)   
    }
}

startApp();