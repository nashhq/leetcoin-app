import { gql } from 'apollo-server-express'

import userSchema from './user'



const linkSchema = gql`
  scalar DateTime
  scalar URL

  type Query {
    _: Boolean
  }

  type Mutation {
    _: Boolean
  }

  type Subscription {
    _: Boolean
  }
`

export default [
  linkSchema, userSchema,
]
