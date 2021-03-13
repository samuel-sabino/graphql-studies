import { GraphQLObjectType, GraphQLSchema } from "graphql";
import rootMutation from "./modules/root-mutation";
import rootQuery from "./modules/root-query";


export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
      ...rootQuery
    }
  }),
  mutation: new GraphQLObjectType({
    name: "RootMutationType",
    fields: {
      ...rootMutation
    }
  })
});