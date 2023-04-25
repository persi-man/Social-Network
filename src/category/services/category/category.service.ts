import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from 'src/category/model/category/category';
import { Repository } from 'typeorm';

@Injectable()
export class CategoryService {
    [x: string]: any;
    constructor(
        @InjectRepository(Category)
        private categoryRepository: Repository<Category>,
    ){}

    //Afficher toutes les catégories
    async findAll(): Promise<Category[]> {
        return await this.categoryRepository.find();
      }

    //Rechercher une catégorie via son nom
      async findById(id: number): Promise<Category> {
        return await this.categoryRepository.findOne({
            where:{
                category_id: id
            }
        });
      }

    //Rechercher une catégorie via son nom
      async findByName(name: string):Promise<Category>{
        return await this.categoryRepository.findOne({
            where:{
                name: name
            }
        })
      }
    
    //Créer une nouvelle catégorie
      async create(category: Category): Promise<Category> {
        return await this.categoryRepository.save(category);
      }
    
      async update(id: number, category: Category): Promise<Category> {
        await this.categoryRepository.update(id, category);
        return await this.categoryRepository.findOne({
            where:{
                category_id: id
            }
        });
      }
    //Supprimer une catégorie
      async delete(id: number): Promise<void> {
        await this.categoryRepository.delete(id);
      }
      //Supprimer en utilisant le nom
      async deleteByName(name: string): Promise<void> {
        await this.categoryRepository.delete({ name });
      }
}
