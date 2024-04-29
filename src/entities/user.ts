export class User{
    userId: string | undefined;
    email: string;
    password: string;
    username: string;
    fullName: string;
    birthDate: string;

    constructor(
        userId: string | undefined, 
        email: string, 
        password: string, 
        username: string, 
        fullName: string, 
        birthDate: string
    ) {
        this.userId = userId;
        this.email = email;
        this.password = password;
        this.username = username;
        this.fullName = fullName;
        this.birthDate = birthDate;
    }
}