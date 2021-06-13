import { objectType } from "nexus";

export const User = objectType({
  name: "User",
  description: "ユーザー",
  definition(t) {
    t.implements("Node");
    t.nonNull.string("name", { description: "ユーザー名" });
    t.nonNull.string("email");
    t.nonNull.list.field("posts", {
      type: "Post",
      resolve: async (parent, _args, ctx) => {
        return ctx.prisma.post.findMany({
          where: { authorId: parent.id },
        });
      },
    });
  },
});
