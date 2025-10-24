import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {
  constructor(@InjectRepository(Product) private readonly productService: Repository<Product>) { }
  create(createProductDto: CreateProductDto) {
    return this.productService.save(createProductDto)
  }

  findAll() {
    return this.productService.find()
  }

  findOne(id: number) {
    return this.productService.findOne({ where: { id } })
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    const product = await this.productService.preload({ id, ...updateProductDto })
    if (!product) {
      throw new NotFoundException("bunday idlik product yoq")
    }
  }

  async remove(id: number) {
    await this.productService.delete({ id })
    return id
  }
}
