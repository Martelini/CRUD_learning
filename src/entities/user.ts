import { IUserProps } from "../application/useCasesInterfaces";

export class User{
    private userProps: IUserProps;

    constructor(
        userProps: IUserProps
    ) {
        this.userProps = userProps;
    }

    public set userId(userId: string | undefined) {
        this.userProps.userId = userId;
    }

    public set email(email: string) {
        this.userProps.email = email;
    }

    public set password(password: string) {
        this.userProps.password = password;
    }

    public set username(username: string) {
        this.userProps.username = username;
    }

    public set fullName(fullName: string) {
        this.userProps.fullName = fullName;
    }      
    
    public set birthDate(birthDate: string) {
        this.userProps.birthDate = birthDate;
    }

    public get userId() {
        return this.userProps.userId;
    }

    public get email() {
        return this.userProps.email;
    }

    public get password() {
        return this.userProps.password;
    }

    public get username() {
        return this.userProps.username;
    }

    public get fullName() {
        return this.userProps.fullName;
    }      
    
    public get birthDate() {
        return this.userProps.birthDate;
    }

}