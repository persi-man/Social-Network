/*import { Controller } from '@nestjs/common';

@Controller('comment')
export class CommentController {

}
*/
import { Body, Controller, Delete, Get, Header, HttpCode, Param, Post, Put } from '@nestjs/common';
import { Comment } from 'src/comment/models/comment/comment';
import { CommentService } from 'src/comment/services/comment/comment.service';

@Controller('comment')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Get()
  async findAll(): Promise<Comment[]> {
    return this.commentService.findAll();
  }

  @Get(':id')
  async find(@Param('id') id: number): Promise<Comment> {
    return this.commentService.find(id);
  }

  @Post('/add')
  @HttpCode(201)//Permet l'ajout d'éléments
  @Header('Cache-control', 'none')
  async create(@Body() comment: Comment): Promise<Comment> {
    return this.commentService.create(comment);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() comment: Comment): Promise<Comment> {
    return this.commentService.update(id, comment);
  }

  @Delete(':id')
  @HttpCode(200)//Permet la suppression d'éléments
  @Header('Cache-control', 'none')
  async delete(@Param('id') id: number): Promise<void> {
    return this.commentService.delete(id);
  }
/*
  @Get('comus/:userId')
  async findAllByUserId(@Param('userId') userId: number): Promise<Comment[]> {
    return this.commentService.findAllByUserId(userId);
  }

  @Get('compos/:postId')
  async findAllByPostId(@Param('postId') postId: number): Promise<Comment[]> {
    return this.commentService.findAllByPostId(postId);
  }*/
}
