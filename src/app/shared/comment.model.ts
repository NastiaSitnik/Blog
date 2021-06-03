import { Guid } from "guid-typescript";
import { Article } from "./article.model";

export class Comment {
    public id: Guid;
    public text: string;
    public articleId: Guid;
    public article: Article;
}
