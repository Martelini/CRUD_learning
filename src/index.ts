import { Db, MongoClient } from 'mongodb';
import { startServer, setServer } from './infrastructure/express/app';
import { UserRepositoryImpl } from './interfaces/repositories/userRepository';
import express from 'express';
import { UserDocument } from './infrastructure/mongodb/userDocument';
import { MongoDbUserRepository } from './infrastructure/database/userDatabase';

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
    const database = new MongoDbUserRepository(userCollection);
    const userRepositoryImpl = new UserRepositoryImpl(database);
    
    setServer(app, userRepositoryImpl);
    startServer(app);
}

startApp();