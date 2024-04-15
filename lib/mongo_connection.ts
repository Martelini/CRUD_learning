import { MongoClient, ServerApiVersion } from 'mongodb';
const uri = 'mongodb+srv://souzamateus1998:EV5EGbftxv1fMPMx@cluster0.scduko7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

export const dbClient = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

export async function connectToDatabase() {
    try {
        await dbClient.connect();
        const database = await dbClient.db("smart");
        console.log('Connected to database!');    
        return database;
    } catch (error) {
        //await client.close();
        let message = 'Unknown error';
        if (error instanceof Error)
            message = error.message;
        reportError({message});
    }
}
