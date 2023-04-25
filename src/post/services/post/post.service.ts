import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from 'src/post/models/post/post';

@Injectable()
export class PostService {
    constructor(
        @InjectRepository(Post)
        private postRepository: Repository<Post>
    ){}


    //créer un post
    // async create(post: Post):Promise<Post>{
    //     //return this.postRepository.save(Post);
    // }
}
