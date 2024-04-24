import { Document, ObjectId } from "mongodb";
import { BaseModel } from "./baseModel";

export interface UserDocument extends Document {
    _id: ObjectId;
    email: string;
    password: string;
    username: string;
    fullName: string;
    birthDate: Date;
}

// export class UserDocument {
//     _id: ObjectId;
//     email: string;
//     password: string;
//     username: string;
//     fullName: string;
//     birthDate: Date;

//     constructor(_id: ObjectId, email: string, password: string, username: string, fullName: string, birthDate: Date) {
//         this._id = _id;
//         this.email = email;
//         this.password = password;
//         this.username = username;
//         this.fullName = fullName;
//         this.birthDate = birthDate;
//     }
// }