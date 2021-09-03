import { Injectable } from "@nestjs/common";
import { User } from "@prisma/client";

import { PrismaService } from "../common/services/prisma.service";

@Injectable()
export class AuthorsService {
  constructor(private prisma: PrismaService) {}

  findOneById(id: number): Promise<User | null> {
    return this.prisma.user.findUnique({ where: { id } });
  }
}
