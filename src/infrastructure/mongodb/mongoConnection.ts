// import { MongoClient, Db, Collection } from 'mongodb';

// let db: Db;

// export async function connectToDatabase(url: string, dbName: string): Promise<void> {
//     try {
//         const client = new MongoClient(url);
//         await client.connect();
//         db = await client.db(dbName);
//         console.log('Connected to database!');
//     } catch (error) {
//         //await client.close();
//         let message = 'Unknown error';
//         if (error instanceof Error)
//             message = error.message;
//         reportError({message});
//     }
// }

// export function getCollection<T>(collectionName: string): Collection<T> {
//     if(!db) {
//         throw new Error("Database not connected!");
//     }
//     return db.collection<T>(collectionName);
// }