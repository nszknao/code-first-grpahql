import { objectType, extendType } from "nexus";
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
      // extendConnection: (t) => {
      //   t.int("totalCount", {
      //     resolve: (parent, arg) => {
      //       return 2;
      //     },
      //   });
      // },
      totalCount: (parent) => {
        return (parent as any).totalCount;
      },
      resolve: async (parent, args, ctx, _info) => {
        const posts = await ctx.prisma.post.findMany({
          where: { authorId: parent.id },
        });
        return {
          ...connectionFromArray(posts, args),
          totalCount: 4,
        };
      },
    });
    t.connectionField("posts2", {
      type: "Post",
      // extendConnection: (t) => {
      //   t.int("totalCount", {
      //     resolve: (parent, arg) => {
      //       return 2;
      //     },
      //   });
      // },
      totalCount: (parent) => {
        return null;
      },
      resolve: async (parent, args, ctx, _info) => {
        const posts = await ctx.prisma.post.findMany({
          where: { authorId: parent.id },
        });
        return {
          ...connectionFromArray(posts, args),
          totalCount: 4,
        };
      },
    });
  },
});

export const UserQuery = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.list.field("authors", {
      type: "User",
      resolve: async (_parent, _args, ctx) => {
        return await ctx.prisma.user.findMany();
      },
    });
  },
});
