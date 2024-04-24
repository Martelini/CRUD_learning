import { ObjectId } from "mongodb";
import { User } from "../../entities/user";
import { UserDocument } from "./userDocument";
import { Result } from "../../application/useCasesInterfaces";

export function mapToUser(userDocument: UserDocument): User {
    return new User(
        userDocument._id.toString(), 
        userDocument.email,
        userDocument.password,
        userDocument.username,
        userDocument.fullName,
        userDocument.birthDate
    );
}

export function mapToUserDocument(user: User): UserDocument {
    const userDocument: UserDocument = {
        _id: new ObjectId(user.userId),
        email: user.email,
        password: user.password,
        username: user.username,
        fullName: user.fullName,
        birthDate: user.birthDate
    }
    return userDocument;
}

export function mapToResult( acknowleged: boolean ): Result {
    const result = acknowleged ? { status: "OK" } : { status: "Error" } ;
    return result;
}

export function mapBodyToUserDocument( body: any ): UserDocument {
    const json = JSON.parse(body);
    if (json.hasOwnProperty)
    const user: UserDocument = {
        json._id,
        json.password,
        json.username,
    }
    return user;
}