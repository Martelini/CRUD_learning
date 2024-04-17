import { RequestHandler } from "express";
import { dbClient } from "../lib/mongo_connection";
import { ObjectId } from "mongodb";

interface User {
    _id: ObjectId,
    email: string,
    password: string,
    username: string,
    fullName: string,
    birthDate: { day: number, month: number, year: number }
}

const database = dbClient.db('smart');
const users = database.collection<User>('users');

// welcomeMessage

export const welcomeMessage: RequestHandler = async (req, res) => {
    try {
        res.send('Welcome to Smart!!!');
    } catch (error) {
        let message = 'Unknown error';
        if (error instanceof Error) {
            message = error.message;
        }
        res.status(500).json(message);
    }
}

// signUp

export const signUp: RequestHandler = async (req, res) => {
    try {
        const result = await users.insertOne(req.body);
        res.status(200).json(result);
    } catch (error) {
        let message = 'Unknown error';
        if (error instanceof Error) {
            message = error.message;
        }
        res.status(500).json({ message });
    }
}

// Get all users

export const getAllUsers: RequestHandler = async (req, res) => {
    try {
        const result = await users.find().toArray();
        if (result) {
            res.status(200).json(result);
        }
        else {
            res.status(404).json('None user found!');
        }
    } catch (error) {
        let message = 'Unknown error';
        if (error instanceof Error) {
            message = error.message;
        }
        res.status(500).json(message);
    }
}

// Get one user by ID

export const getUser: RequestHandler = async (req, res) => {
    try {
        const { userId } = req.params;
        const result = await users.findOne({ '_id': new ObjectId(userId) });
        if (result) {
            res.status(200).json(result);
        } else {
            res.status(404).json({ message: 'User could not be found!' });
        }
    } catch (error) {
        let message = 'Unknown error';
        if (error instanceof Error) {
            message = error.message;
        }
        res.status(500).json(message);
    }
}

// Update user

export const updateUser: RequestHandler = async (req, res) => {
    try {
        const { userId } = req.params;
        const result = await users.updateOne({ '_id': new ObjectId(userId) }, { $set: req.body });
        if (result) {
            res.status(200).json(result);
        } else {
            res.status(404).json({ message: 'User could not be found!' });
        }
    } catch (error) {
        let message = 'Unknown error';
        if (error instanceof Error) {
            message = error.message;
        }
        res.status(500).json(message);
    }
}

// Delete user

function checkError(error: any): string {
    if (error instanceof Error) {
        return error.message;
    }
    return 'Unknown error';
}

export const deleteUser: RequestHandler = async (req, res) => {
    try {
        const { userId } = req.params;
        const result = await users.deleteOne({ '_id': new ObjectId(userId) });
        if (result) {
            res.status(200).json(result);
        } else {
            res.status(404).json({ message: 'User could not be found!' });
        }
    } catch (error) {
        res.status(500).json(checkError(error));
    }
}