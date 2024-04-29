import { Document, ObjectId } from "mongodb";

export interface UserDocument extends Document {
    _id: ObjectId | undefined;
    email: string;
    password: string;
    username: string;
    fullName: string;
    birthDate: string;
}