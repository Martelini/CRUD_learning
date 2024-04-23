import { User } from './entities/user';
import { startServer, setServer } from './infrastructure/express/app';
import { connectToDatabase, getCollection } from './infrastructure/mongodb/mongoConnection';
import { createUserRouter } from './infrastructure/routes/userRoutes';
import { MongoDbUserRepository } from './interfaces/repositories/user_repository';
import express from 'express';

const url = 'mongodb+srv://souzamateus1998:EV5EGbftxv1fMPMx@cluster0.scduko7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const app = express();

async function startApp(): Promise<void> {
    await connectToDatabase(url, 'smart');
    const userCollection = getCollection<User>('users');
    const userRepository = new MongoDbUserRepository(userCollection);
    
    setServer(app, userRepository);
    startServer(app);
}

startApp();