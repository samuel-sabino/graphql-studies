import { GraphQLObjectType, GraphQLSchema } from 'graphql'
import rootMutation from './modules/root-mutation.js'
import rootQuery from './modules/root-query.js'

export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      ...rootQuery
    }
  }),
  mutation: new GraphQLObjectType({
    name: 'RootMutationType',
    fields: {
      ...rootMutation
    }
  })
})
