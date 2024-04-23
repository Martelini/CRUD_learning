export class User{
    userId: string;
    email: string;
    password: string;
    username: string;
    fullName: string;
    birthDate: Date;

    constructor(userId: string, email: string, password: string, username: string, fullName: string, birthDate: Date) {
        this.userId = userId;
        this.email = email;
        this.password = password;
        this.username = username;
        this.fullName = fullName;
        this.birthDate = birthDate;
    }
}