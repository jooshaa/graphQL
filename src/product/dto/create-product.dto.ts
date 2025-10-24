import { Field,  } from "@nestjs/graphql";

export class CreateProductDto {

    @Field()
    name: string
    @Field()
    image: string
    @Field()
    price: string
    @Field()
    description: string


}
