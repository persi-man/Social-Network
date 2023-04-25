import { Module } from '@nestjs/common';
import { CategoryService } from './services/category/category.service';
import { CategoryController } from './controller/category/category.controller';


@Module({
  providers: [CategoryService],
  controllers: [CategoryController]
})
export class CategoryModule {}
