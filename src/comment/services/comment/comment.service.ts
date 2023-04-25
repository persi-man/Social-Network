import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comment } from 'src/comment/models/comment/comment';
@Injectable()
export class CommentService {
    constructor(
        @InjectRepository(Comment)
        private commentRepository: Repository<Comment>
    ){}

    //créer un commentaire
    async create(comment: Comment):Promise<Comment>{
        return this.commentRepository.save(comment);
    }

    //Retourne la liste de tous les commentaires
    async findAll(): Promise<Comment[]>{
        return this.commentRepository.find();
    }

    //Rechercher un commentaire via l'id du commentaire
    async find(id: number): Promise<Comment> {
        return this.commentRepository.findOne({where:{
            comment_id: id
        }});
      }
    //Rechercher tous les commentaires d'un user
 /*   async findAllByUserId(user_id: number): Promise<Comment[]> {
        return this.commentRepository.find({
            where: {
            user_id : user_id 
        }
        });
      }*/
    //Rechercher tous les messages sous un post
   /* async findAllByPostId(postId: number): Promise<Comment[]> {
        return this.commentRepository.find({ where: { post_id: postId } });
      }*/
    //Mettre à jour un commentaire

      async update(id: number, comment: Partial<Comment>): Promise<Comment> {
        await this.commentRepository.update(id, comment);
        const updatedComment = await this.commentRepository.findOne({where: {
            comment_id: id
        }});
        if (!updatedComment) {
          throw new NotFoundException(`Comment with ID ${id} not found`);
        }
        return updatedComment;
      }
      //Supprimer un commentaire
      async delete(id: number): Promise<void> {
        await this.commentRepository.delete(id);
      }
}
