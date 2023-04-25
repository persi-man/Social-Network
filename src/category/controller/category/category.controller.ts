import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { Category } from 'src/category/model/category/category';
import { CategoryService } from 'src/category/services/category/category.service';

@Controller('category')
export class CategoryController {
    constructor(private categoryService: CategoryService) {}
//Create cat
  @Post()
  async create(@Body() categoryDto: Category): Promise<Category> {
    return this.categoryService.create(categoryDto);
  }

//Find all cat
  @Get()
  async findAll(): Promise<Category[]> {
    return this.categoryService.findAll();
  }
  
//find one cat by id
  @Get(':id')
  async find(@Param('id') id: number): Promise<Category> {
    return this.categoryService.findById(id);
  }

// Find cat by name
@Get(':name')
async findByName(@Param('name') name: string):Promise<Category>{
    return this.categoryService.findByName('name');
}

//Update cat
  @Patch(':id')
  async update(@Param('id') id: number, @Body() categoryDto: Category,
  ): Promise<Category> {
    return this.categoryService.update(id, categoryDto);
  }

//Delete cat by Id
  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.categoryService.remove(id);
  }

//delete cat by name
  @Delete('name/:name')
  async removeByName(@Param('name') name: string): Promise<void> {
    return this.categoryService.deleteByName(name);
  }
}
