import { makeExecutableSchema, addErrorLoggingToSchema } from 'graphql-tools'
import resolvers from './resolvers';

import log from '../../log'
import typeDefs from './schema_def.graphqls'

const executableSchema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

addErrorLoggingToSchema(executableSchema, { log: (e) => log.error(e) });

export default executableSchema;
