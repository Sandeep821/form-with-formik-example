import React from 'react'
import {Query} from 'react-apollo'
import gql from 'graphql-tag'

export const COUNTRIES_QUERY = gql`
  query COUNTRIES_QUERY {
    countries {
      ref_id
      name
    }
  }
`

function Countries({children, ...props}) {
  return (
    <Query query={COUNTRIES_QUERY} {...props}>
      {({data, ...restProps}) =>
        children({
          countries: restProps.loading
            ? []
            : data.countries.map(({ref_id, name}) => ({
                label: name,
                value: ref_id,
              })),
          ...restProps,
        })
      }
    </Query>
  )
}

export default Countries
