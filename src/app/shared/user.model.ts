import { Guid } from "guid-typescript";
import { Article } from "./article.model";
import { Comment } from "./comment.model";
export enum Roles {
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
    public articles: Array<Article>;
    public comments: Array<Comment>;
}
