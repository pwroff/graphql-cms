import { makeExecutableSchema, addErrorLoggingToSchema } from 'graphql-tools'
import Item from '../data/models/Item';

import log from '../../log'
import schema from './schema_def.graphqls'

const resolvers = {
  Query: {
    items(_, args) {
      return Item.find(args);
    },
    item(_, args) {
      return Item.findById(args.id);
    }
  }
};

const executableSchema = makeExecutableSchema({
  typeDefs: schema,
  resolvers,
});

addErrorLoggingToSchema(executableSchema, { log: (e) => log.error(e) });

export default executableSchema;
