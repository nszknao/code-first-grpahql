import { Field, Int, ObjectType } from "@nestjs/graphql";

import { Author } from "../../authors/models/author.model";

@ObjectType()
export class Post {
  @Field(() => Int)
  id: number;

  @Field(() => Author, { description: "著者" })
  author: Author;

  @Field({
    description: "Book title",
    deprecationReason: "Not useful in v2 schema",
  })
  title: string;
}
