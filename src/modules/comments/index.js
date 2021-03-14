import { GraphQLInputObjectType, GraphQLList, GraphQLString } from 'graphql'

import CommentType from './comment-type.js'
import { getComments, saveComment } from './comment-loader.js'

export const queries = {
  comments: {
    type: GraphQLList(CommentType),
    resolve: getComments
  }
}

export const mutations = {
  saveComment: {
    type: CommentType,
    resolve: saveComment,
    args: {
      input: {
        type: new GraphQLInputObjectType({
          name: 'CommentInput',
          fields: {
            name: { type: GraphQLString },
            content: { type: GraphQLString }
          }
        })
      }
    }
  }
}
