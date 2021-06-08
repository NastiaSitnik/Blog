import { Guid } from "guid-typescript";
import { Article } from "./article.model";
import { User } from "./user.model";

export class Comment {
    public id: Guid;
    public text: string;
    public articleId: Guid;
    public article: Article;
    public userId: Guid;
    public user: User;
}
