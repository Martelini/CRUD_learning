import { RequestHandler } from "express";

export const signUp: RequestHandler = async (req, res) => {
    try {
        res.status(200).json({message: "OK Smart"});
    } catch (error) {
        let message = 'Unknown error';
        if (error instanceof Error){
            message = error.message;
        }
        res.status(500).json({message});
    }   
}