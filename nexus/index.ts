// ref: https://github.com/prisma/prisma-examples/blob/latest/typescript/graphql-nextjs/pages/api/index.ts
import path from "path";
import { makeSchema } from "nexus";
import { PrismaClient } from "@prisma/client";
import { ApolloServer, gql } from "apollo-server";

import * as types from "./graphql/schema";
import { UpperCaseDirective } from "./graphql/directives";

const typeDefs = gql`
  directive @upper on FIELD_DEFINITION
`;

export const schema = makeSchema({
  types: Object.assign(types, typeDefs),
  outputs: {
    typegen: path.join(process.cwd(), "graphql", "nexus-typegen.ts"),
    schema: path.join(process.cwd(), "graphql", "schema.graphql"),
  },
  contextType: {
    module: path.join(process.cwd(), "graphql", "context.ts"),
    export: "Context",
  },
  // ref: https://github.com/graphql-nexus/nexus/blob/main/examples/with-prisma/api.ts
  sourceTypes: {
    modules: [{ module: ".prisma/client", alias: "PrismaClient" }],
    debug: process.env.NODE_ENV !== "production",
  },
});

const prisma = new PrismaClient();

const apolloServer = new ApolloServer({
  schema,
  context: () => ({ prisma }),
  schemaDirectives: {
    upper: UpperCaseDirective,
  },
});

apolloServer.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
