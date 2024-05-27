import { ObjectId } from "mongodb";
import { User } from "../../entities/user";
import { IUserProps } from "../../application/useCasesInterfaces";
import { UserDocument } from "./userDocument";
import { Result } from "../../application/useCasesInterfaces";
import { HttpRequest, HttpResponse } from "../../interfaces/adapters/httpParams";

function convertUserIDToString (id: ObjectId | undefined): string {
    return id? id.toString() : '';
}

export function mapToUser(userDocument: UserDocument): User {
    const userProps: IUserProps = {
        userId: convertUserIDToString(userDocument._id),
        email: userDocument.email,
        password: userDocument.password,
        username: userDocument.username,
        fullName: userDocument.fullName,
        birthDate: userDocument.birthDate
    }
    return new User(userProps);
}

export function mapToUserDocument(user: User): UserDocument {
    const userDocument: UserDocument = {
        _id: undefined,
        email: user.email,
        password: user.password,
        username: user.username,
        fullName: user.fullName,
        birthDate: user.birthDate
    }
    if( user.userId !== undefined ) {
        userDocument._id = new ObjectId(user.userId);
    }

    return userDocument;
}

export function mapToResult( acknowleged: boolean ): Result {
    const result = acknowleged ? { status: "OK" } : { status: "Error" } ;
    return result;
}

export function mapBodyToUser( httpBody: HttpRequest["body"] ): User {
    console.log('httpBody before:', httpBody);
    const user: User = httpBody as User;
    console.log('User created:', user);
    return user;
}