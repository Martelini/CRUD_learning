import 'dotenv/config';
import { Collection, Db, Document, MongoClient } from 'mongodb';

const url = process.env.MONGODB_URL;
const dbName = process.env.DATABASE_NAME;

let mongoDb: Db;

export async function connectToMongoDbDatabase(): Promise<void> {
    try {
        if(url === undefined) {
            throw new Error('Undefined MongoDB URL');
        }
        const client = new MongoClient(url);
        await client.connect();
        mongoDb = await client.db(dbName);
        console.log('Connected to database!');
    } catch (error) {
        //await client.close();
        let message = 'Unknown error';
        if (error instanceof Error)
            message = error.message;
        console.log({message});
    }
}

export function getCollection<T extends Document>(collectionName: string): Collection<T> {
    if(!mongoDb) {
        throw new Error("Database not connected!");
    }
    return mongoDb.collection<T>(collectionName);
}