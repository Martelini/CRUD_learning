import { ObjectId } from "mongodb";
import { User } from "../../entities/user";

export function toMongoDocument(user: User): any {
    return {
        _id: new ObjectId(user.userId),
        email: user.email,
        password: user.password,
        username: user.username,
        fullName: user.fullName,
        birthDate: user.birthDate
    }
}