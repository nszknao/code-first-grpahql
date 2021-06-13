import { Field, ID, InterfaceType, Root, Info } from "type-graphql";
import { GraphQLResolveInfo } from "graphql";

@InterfaceType()
export abstract class Node {
  @Field((type) => ID)
  id(@Root() node: Node, @Info() info: GraphQLResolveInfo) {
    console.log(node);
    const id = `001:${info.path.typename}:${node.id}`;
    return Buffer.from(id).toString("base64");
  }
}
