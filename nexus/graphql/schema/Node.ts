import { interfaceType } from "nexus";

export const Node = interfaceType({
  name: "Node",
  definition(t) {
    t.nonNull.id("id", {
      description: "Unique identifier for the resource",
      resolve: (parent, _args, _ctx, info) => {
        const id = `001:${info.path.typename}:${parent.id}`;
        return Buffer.from(id).toString("base64");
      },
    });
  },
  resolveType: () => null,
});
