import {
  Args,
  Int,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from "@nestjs/graphql";

import { PostsService } from "../posts/posts.service";
import { AuthorsService } from "./authors.service";
import { Author } from "./models/author.model";

@Resolver(() => Author)
export class AuthorsResolver {
  constructor(
    private authorsService: AuthorsService,
    private postsService: PostsService
  ) {}

  @Query(() => Author, { nullable: true })
  async author(@Args("id", { type: () => Int }) id: number) {
    return this.authorsService.findOneById(id);
  }

  @ResolveField()
  async posts(@Parent() author: Author) {
    return this.postsService.findAll({ authorId: author.id });
  }
}
