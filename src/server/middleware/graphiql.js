import { graphiqlExpress } from 'apollo-server'

export default graphiqlExpress({
  endpointURL: '/graphql',
  query:
   '{\n' +
   '  items {\n' +
   '    title\n' +
   '    type\n' +
   '  }\n' +
   '}'
});