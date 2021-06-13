import "reflect-metadata";
import * as path from "path";
import { ApolloServer } from "apollo-server";
import { buildSchemaSync } from "type-graphql";
import { PrismaClient } from "@prisma/client";

import { PostResolver } from "./graphql/resolvers/post";
import { UpperCaseDirective } from "./graphql/directives";

const schema = buildSchemaSync({
  // resolvers: [`${__dirname}/graphql/resolvers/*.{ts}`],
  resolvers: [PostResolver],
  emitSchemaFile: path.resolve(__dirname, "graphql", "schema.graphql"),
});

const prisma = new PrismaClient();

const server = new ApolloServer({
  schema,
  context: () => ({ prisma }),
  schemaDirectives: {
    upper: UpperCaseDirective,
  },
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
