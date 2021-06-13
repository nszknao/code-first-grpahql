import { rule, shield } from "graphql-shield";

import { Context } from "./context";

const isAuthenticated = rule({ cache: "contextual" })(
  async (_parent, _args, ctx: Context, _info) => {
    return ctx.uid !== undefined;
  }
);

export const permissions = shield({
  Query: {
    drafts: isAuthenticated,
  },
});
