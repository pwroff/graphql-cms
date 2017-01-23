import { makeExecutableSchema, addErrorLoggingToSchema } from 'graphql-tools'
import Item from '../data/models/Item';
import Division from '../data/models/Division';

import log from '../../log'
import schema from './schema_def.graphqls'

const resolvers = {
  Query: {
    items(_, args) {
      return Item.find(args);
    },
    item(_, {id}) {
      return Item.findById(id);
    },
    divisions(_, args) {
      return Division.find();
    },
    division(_, {id}) {
      return Division.findById(id);
    }
  },
  Mutation: {
    createDivision(_, {title, description}) {
      const d = new Division({title, description});
      console.log('saving division', d);
      return new Promise((res, rej)=>{
        d.save((e, data)=>{
          if (e) {
            rej(e);
          } else {
            res(data);
          }
        })
      });

    }
  },
  Division: {
    items(division) {
      return Item.find({divisionId: division.id})
    }
  },
  Item: {
    division(item) {
      return Division.findById(item.id)
    }
  }
};

const executableSchema = makeExecutableSchema({
  typeDefs: schema,
  resolvers,
});

addErrorLoggingToSchema(executableSchema, { log: (e) => log.error(e) });

export default executableSchema;
