//para ejecutar un schema necesitamos los tipos de los datos de los schemas
import { GraphQLSchema } from 'graphql';
import 'graphql-import-node';
import { makeExecutableSchema } from 'graphql-tools';
import typeDefs from './schema.graphql';
import resolvers from '../resolvers/resolversMap'

const schema:GraphQLSchema = makeExecutableSchema({
    typeDefs,
    resolvers
})

export default schema;