import { Arg, Field, ID, ObjectType, Query, Resolver } from "type-graphql";

@ObjectType()
export class Recipe {
  @Field(() => ID)
  id: string;

  @Field()
  title: string;

  @Field({ nullable: true })
  description?: string;

  @Field(() => [String])
  ingredients: string[];
}

@Resolver(Recipe)
class RecipeResolver {
  constructor(private recipeService: RecipeService) {}

  @Query((returns) => Recipe)
  async recipe(@Arg("id") id: string) {
    const recipe = await this.recipeService;
  }
}
