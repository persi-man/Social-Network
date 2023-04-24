import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommentService } from './video_and_picture/comment/comment.service';
import { CommentService } from './video_and_picture/comment/controller/comment/comment.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, CommentService],
})
export class AppModule {}
