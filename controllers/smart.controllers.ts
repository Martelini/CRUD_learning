import { RequestHandler } from "express";
import { dbClient } from "./mongo_connection";

const database = dbClient.db('smart');
const users = database.collection('users');

// welcomeMessage

export const welcomeMessage: RequestHandler = async (req, res) => {
    try {
        res.status(200).json({message: 'Welcome to Smart!'});
    } catch (error) {
        let message = 'Unknown error';
        if (error instanceof Error){
            message = error.message;
        }
        res.status(500).json({message});
    }
}

// signUp

export const signUp: RequestHandler = async (req, res) => {
    try {
        res.status(200).json({message: 'OK Smart'});
        const result = await users.insertOne(req);
    } catch (error) {
        let message = 'Unknown error';
        if (error instanceof Error){
            message = error.message;
        }
        res.status(500).json({message});
    }   
}