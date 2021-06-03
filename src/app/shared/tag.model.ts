import { Guid } from "guid-typescript";
import { Article } from "./article.model";

export class Tag {
    public id: Guid;
    public text: string;
    public articles: Array<Article>;
}
