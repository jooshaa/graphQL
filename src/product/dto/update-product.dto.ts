import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';
import { Field } from '@nestjs/graphql';

export class UpdateProductDto {
    @Field({ nullable: true })
    name: string
    @Field({ nullable: true })
    image: string
    @Field({ nullable: true })
    price: string
    @Field({ nullable: true })
    description: string
}
