/* eslint-disable import/first */
import dotenv from 'dotenv'

dotenv.config()

import { ApolloServer } from 'apollo-server'
import mongoose from 'mongoose'

import schema from './schema.js'

const server = new ApolloServer({
  schema,
  playground: process.env.NODE_ENV === 'development'
})

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Banco iniciado')
})

export default server
