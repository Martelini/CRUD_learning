import { MongoClient, ServerApiVersion } from 'mongodb';
import express from 'express';
import { router } from '../routes/smart.routes'

const uri = 'mongodb+srv://souzamateus1998:EV5EGbftxv1fMPMx@cluster0.scduko7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

const app = express();

async function connectToDatabase() {
    try {
        await client.connect();
        console.log('Connected to database!');    
        //await client.db("admin").command({ ping: 1}); 
    } catch (error) {
        //await client.close();
        let message = 'Unknown error';
        if (error instanceof Error)
            message = error.message;
        reportError({message});
    }
}

async function setServer() {
    try {
        app.listen(3000, () => {
            console.log("Server is running on port 3000!");
        });

    } catch (error) {
        let message = 'Unknown error';
        if (error instanceof Error)
            message = error.message;
        reportError({message});
    }
}

// routes

app.use('', router);



connectToDatabase();
setServer();
