import { Field, Int, ObjectType } from "@nestjs/graphql";

import { Post } from "../../posts/models/post.model";

@ObjectType()
export class Author {
  @Field(() => Int)
  id: number;

  @Field({ description: "メールアドレス" })
  email: string;

  @Field({ description: "名前" })
  name: string;

  @Field(() => [Post], { nullable: "items" })
  posts: Post[];
}
