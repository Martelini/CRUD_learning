import express from 'express';
import { router } from '../routes/smart.routes';
import { connectToDatabase } from '../lib/mongo_connection';

const app = express();

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

// middleware

app.use(express.json());

// route

app.use('', router);

connectToDatabase();
setServer();