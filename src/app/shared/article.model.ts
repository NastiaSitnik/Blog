import { Guid } from "guid-typescript";
import { Tag } from "./tag.model";
import { User } from "./user.model";
import { Comment } from "./comment.model";
export class Article {
    public id: Guid;
    public title: string;
    public text: string;
    public tags: Array<Tag>;
    public userId: Guid;
    public user: User;
    public comments: Array<Comment>;
}
