import { graphiqlExpress as graphiql } from 'graphql-server-express'

export default graphiql({
  endpointURL: '/graphql',
  query:
   '{\n' +
   '  items {\n' +
   '    title\n' +
   '    type\n' +
   '  }\n' +
   '}'
});