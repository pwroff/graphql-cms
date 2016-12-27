import React from 'react'
import { createBatchingNetworkInterface } from 'apollo-client'
import { ApolloProvider } from 'react-apollo'
import { Router, browserHistory } from 'react-router'
import routes from '../routes'
import '../ui/bootstrap.scss'
import '../ui/styles.scss'

import createApolloClient from '../apollo_client'

const networkInterface = createBatchingNetworkInterface({
    opts: {
        credentials: "same-origin",
    },
    batchInterval: 500,
    uri: "/graphql",
});

const client = createApolloClient(networkInterface);

export default class Main extends React.Component {
  render() {
    return (
        <ApolloProvider client={client}>
            <Router history={browserHistory}>
              {routes}
            </Router>
        </ApolloProvider>
    );
  }
}