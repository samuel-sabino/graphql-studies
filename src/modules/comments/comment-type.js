
import { GraphQLNonNull, GraphQLObjectType, GraphQLString } from 'graphql'
import pkg from 'graphql-iso-date'

const { GraphQLDateTime } = pkg

export default new GraphQLObjectType({
  name: 'CommentType',
  fields: {
    id: {
      type: GraphQLNonNull(GraphQLString)
    },
    name: {
      type: GraphQLNonNull(GraphQLString)
    },
    content: {
      type: GraphQLNonNull(GraphQLString)
    },
    createdAt: {
      type: GraphQLNonNull(GraphQLDateTime)
    },
    updatedAt: {
      type: GraphQLNonNull(GraphQLDateTime)
    },
    orderBy: {
      type: GraphQLDateTime
    }
  }
})
