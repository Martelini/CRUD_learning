import { Db, MongoClient } from 'mongodb';
import { startServer, setServer } from './infrastructure/express/app';
import { MongoDbUserRepository } from './interfaces/repositories/user_repository';
import express from 'express';
import { UserDocument } from './infrastructure/mongodb/userDocument';

const url = 'mongodb+srv://souzamateus1998:EV5EGbftxv1fMPMx@cluster0.scduko7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const app = express();

let db: Db;

async function startApp(): Promise<void> {
    try {
        const client = new MongoClient(url);
        await client.connect();
        db = await client.db("smart");
        console.log('Connected to database!');
    } catch (error) {
        //await client.close();
        let message = 'Unknown error';
        if (error instanceof Error)
            message = error.message;
        reportError({message});
    }
    const userCollection = db.collection<UserDocument>('users');
    const userRepository = new MongoDbUserRepository(userCollection);
    
    setServer(app, userRepository);
    startServer(app);
}

startApp();