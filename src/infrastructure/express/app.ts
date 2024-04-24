import express, { Express } from 'express';
import { createUserRouter } from '../routes/userRoutes';
import { UserRepository } from '../../application/getAllUsers';

export async function setServer(app: Express, userRepository: UserRepository): Promise<void> {
    const router = createUserRouter(userRepository);
    app.use('', router);
    app.use(express.json());
}

export async function startServer(app: Express): Promise<void> {
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