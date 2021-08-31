// ref: https://github.com/prisma/prisma-examples/blob/latest/typescript/graphql-nextjs/pages/api/index.ts
import path from "path";
import { makeSchema, connectionPlugin } from "nexus";
import { PrismaClient } from "@prisma/client";
import { ApolloServer } from "apollo-server";
import { applyMiddleware } from "graphql-middleware";

import * as types from "./graphql/schema";
import { permissions } from "./graphql/permissions";

export const schema = makeSchema({
  types,
  outputs: {
    typegen: path.join(__dirname, "graphql", "nexus-typegen.ts"),
    schema: path.join(__dirname, "graphql", "schema.graphql"),
  },
  contextType: {
    module: path.join(__dirname, "graphql", "context.ts"),
    export: "Context",
  },
  // ref: https://github.com/graphql-nexus/nexus/blob/main/examples/with-prisma/api.ts
  sourceTypes: {
    modules: [{ module: ".prisma/client", alias: "PrismaClient" }],
    debug: process.env.NODE_ENV !== "production",
  },
  plugins: [
    connectionPlugin({ extendConnection: { totalCount: { type: "Int" } } }),
  ],
  features: {
    abstractTypeStrategies: {
      __typename: true,
    },
  },
});

const prisma = new PrismaClient();

const apolloServer = new ApolloServer({
  schema: applyMiddleware(schema),
  context: ({ req }) => {
    return { prisma, uid: req.headers.authorization };
  },
});

apolloServer.listen(8888).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
