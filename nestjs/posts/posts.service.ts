import { Injectable } from "@nestjs/common";
import { Post, Prisma } from "@prisma/client";

import { PrismaService } from "../common/services/prisma.service";

@Injectable()
export class PostsService {
  constructor(private prisma: PrismaService) {}

  findAll({ authorId }: { authorId: number }): Promise<Post[]> {
    return this.prisma.post.findMany({ where: { authorId } });
  }

  create(data: Prisma.PostCreateArgs["data"]) {
    return this.prisma.post.create({ data });
  }
}
