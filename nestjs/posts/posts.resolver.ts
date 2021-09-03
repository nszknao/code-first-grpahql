import { Args, Mutation, Resolver } from "@nestjs/graphql";
import { NewPostInput } from "./dto/new-post.input";

import { Post } from "./models/post.model";
import { PostsService } from "./posts.service";

@Resolver(() => Post)
export class PostsResolver {
  constructor(private postsService: PostsService) {}

  @Mutation(() => Post)
  async addPost(@Args("newPostData") newPostData: NewPostInput) {
    return this.postsService.create({
      authorId: newPostData.authorId,
      body: newPostData.body,
      title: newPostData.title,
    });
  }
}
