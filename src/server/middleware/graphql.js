import {graphqlExpress as graphql} from 'graphql-server-express'
import 'isomorphic-fetch'

import schema from '../api/schema'

export default graphql(() => {
    return {
        schema
    };
});