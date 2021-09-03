import { join } from "path";
import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloServerPluginLandingPageLocalDefault } from "apollo-server-core";

import { AuthorsModule } from "./authors/authors.module";
import { PostsModule } from "./posts/posts.module";

@Module({
  imports: [
    AuthorsModule,
    PostsModule,
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), "schema.graphql"),
      debug: true,
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
      sortSchema: true,
    }),
  ],
})
export class AppModule {}
