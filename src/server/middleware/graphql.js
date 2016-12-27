import {apolloExpress} from 'apollo-server'
import 'isomorphic-fetch'

import schema from '../api/schema'

export default apolloExpress(() => {
    return {
        schema
    };
});