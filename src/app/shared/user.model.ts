import { Guid } from "guid-typescript";

enum Roles {
    User = 1,
    Admin = 2 
}

export class User {
    public id: Guid;
    public email: string;
    public password: string;
    public name: string;
    public surname: string;
    public role: Roles;
}
