import { Module } from "@nestjs/common";

import { PrismaService } from "../common/services/prisma.service";
import { PostsService } from "../posts/posts.service";
import { AuthorsResolver } from "./authors.resolver";
import { AuthorsService } from "./authors.service";

@Module({
  providers: [AuthorsResolver, AuthorsService, PostsService, PrismaService],
})
export class AuthorsModule {}
