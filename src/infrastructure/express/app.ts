import 'dotenv/config';
import express, { Express } from 'express';
import { createUserRouter } from '../routes/userRoutes';
import { UserRepositoryImpl } from '../../interfaces/repositories/userRepository';

const PORT = process.env.APP_HTTP_PORT;

export async function setServer(app: Express, userRepositoryImpl: UserRepositoryImpl): Promise<void> {
    const router = createUserRouter(userRepositoryImpl);
    app.use('', router);
    app.use(express.json());
}

export async function startServer(app: Express): Promise<void> {
    try {
        if(PORT === undefined) {
            throw new Error('Could not read HTTP Port');
        }
        app.listen(parseInt(PORT), () => {
            console.log(`Server is running on port ${PORT}!`);
        });

    } catch (error) {
        let message = 'Unknown error';
        if (error instanceof Error)
            message = error.message;
        console.log("Error:", message);
    }
}