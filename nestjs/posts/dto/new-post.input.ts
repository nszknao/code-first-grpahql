import { Field, InputType, Int } from "@nestjs/graphql";
import { MaxLength } from "class-validator";

@InputType()
export class NewPostInput {
  @Field({ description: "本文" })
  body: string;

  @Field()
  @MaxLength(30)
  title: string;

  @Field(() => Int)
  authorId: number;
}
