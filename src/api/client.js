import React from 'react'
import ApolloClient from 'apollo-boost'
import {ApolloProvider} from 'react-apollo'

const client = new ApolloClient({
  uri: 'https://ayk-test-portal.badrit.com/graphql',
})

function ApiProvider(props) {
  return <ApolloProvider client={client} {...props} />
}

export {client}
export default ApiProvider
