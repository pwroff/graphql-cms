import {apolloExpress} from 'apollo-server'

import schema from '../api/schema'

export default apolloExpress(() => {
    return {
        schema
    };
});