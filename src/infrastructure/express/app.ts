import express, { Express } from 'express';
import { createUserRouter } from '../routes/userRoutes';
import { UserRepositoryImpl } from '../../interfaces/repositories/userRepository';

const PORT = 3000;

export async function setServer(app: Express, userRepositoryImpl: UserRepositoryImpl): Promise<void> {
    const router = createUserRouter(userRepositoryImpl);
    app.use('', router);
    app.use(express.json());
}

export async function startServer(app: Express): Promise<void> {
    try {
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}!`);
        });

    } catch (error) {
        let message = 'Unknown error';
        if (error instanceof Error)
            message = error.message;
        reportError({message});
    }
}