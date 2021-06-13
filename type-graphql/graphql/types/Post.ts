import { Ctx, Field, ObjectType, Root } from "type-graphql";
import { Post as PrismaPost } from "@prisma/client";

import { Node } from "./Node";
import { User } from "./User";
import { Context } from "../context";

@ObjectType({ implements: Node, description: "ユーザーの投稿" })
export class Post implements PrismaPost {
  @Field(() => User)
  async author(@Root() post: Post, @Ctx() ctx: Context) {
    return await ctx.prisma.user.findFirst({
      where: { id: post.authorId },
    });
  }

  authorId: number;

  @Field(() => String)
  body: string;

  createdAt: Date;

  id: number;

  @Field(() => Boolean)
  published: boolean;

  @Field(() => String)
  title: string;
}
