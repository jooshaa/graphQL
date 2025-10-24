import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Args, ID, Mutation, Query } from '@nestjs/graphql';
import { Product } from './entities/product.entity';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Mutation(()=>Product)
  createUser(@Args("createProduct") createProductDto: CreateProductDto) {
    return this.productService.create(createProductDto);
  }

  @Query(()=>[Product])
  findAllUsers() {
    return this.productService.findAll();
  }

  @Query(() => Product)
  findOneUser(@Args('id', {type: ()=>ID}) id: number) {
    return this.productService.findOne(+id);
  }

  @Mutation(()=> Product)
  updateUser(@Args('id', { type: () => ID }) id: number, @Args("updateProduct") updateProductDto: UpdateProductDto) {
    return this.productService.update(+id, updateProductDto);
  }

  @Delete(':id')
  removeUser(@Args('id', { type: () => ID }) id: number) {
    return this.productService.remove(+id);
  }
}
