import { objectType, stringArg } from "nexus";
import { connectionFromArray } from "graphql-relay";

export const User = objectType({
  name: "User",
  description: "ユーザー",
  definition(t) {
    t.implements("Node");
    t.nonNull.string("name", { description: "ユーザー名" });
    t.nonNull.string("email");
    t.nonNull.string("depricated", {
      deprecation: "depricateテストのため",
      resolve: (parent) => {
        return parent.name;
      },
    });
    t.connectionField("posts", {
      type: "Post",
      resolve: async (parent, args, ctx, _info) => {
        const posts = await ctx.prisma.post.findMany({
          where: { authorId: parent.id },
        });
        return connectionFromArray(posts, args);
      },
    });
  },
});
