import { Post } from "@nestjs/common";
import { Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

export class Comment {
  comment_id: number;
  content: string;
  /*@ManyToOne(() => User, user => user.comments)
  user: User;
  @ManyToOne(() => Post, post => post.comments)
  post: Post;*/
}

