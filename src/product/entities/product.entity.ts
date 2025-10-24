import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@ObjectType()
@Entity()
export class Product {
    @Field(()=>ID)
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @Column()
    name: string

    @Field()
    @Column()
    image: string

    @Field()
    @Column()
    price: string

    @Field()
    @Column()
    description: string


}
