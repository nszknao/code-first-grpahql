import { Ctx, Query, Resolver } from "type-graphql";

import type { Context } from "../context";
import { Post } from "../types/Post";

@Resolver(Post)
export class PostResolver {
  @Query(() => [Post])
  async drafts(@Ctx() ctx: Context) {
    return await ctx.prisma.post.findMany({
      where: { published: false },
    });
  }
}
