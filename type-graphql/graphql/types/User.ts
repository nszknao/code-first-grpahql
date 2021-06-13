import { Directive, Field, ObjectType } from "type-graphql";
import { User as PrismaUser } from "@prisma/client";

import { Node } from "./Node";
import { Post } from "./Post";

@ObjectType({ implements: Node })
export class User implements PrismaUser {
  @Field(() => String)
  email: string;

  id: number;

  @Directive("@upper")
  @Field(() => String)
  name: string;

  @Field(() => [Post])
  posts: Post[];
}
