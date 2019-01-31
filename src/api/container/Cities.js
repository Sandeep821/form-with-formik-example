import React from 'react'
import {Query} from 'react-apollo'
import gql from 'graphql-tag'

export const CITIES_QUERY = gql`
  query CITIES_QUERY($CountryID: ID) {
    countries(id: $CountryID) {
      states {
        name
        ref_id
      }
    }
  }
`

function Cities({children, ...props}) {
  return (
    <Query query={CITIES_QUERY} {...props}>
      {({data, ...restProps}) =>
        children({
          cities: restProps.loading
            ? []
            : (data.countries[0] || {states: []}).states.map(
                ({ref_id, name}) => ({
                  label: name,
                  value: ref_id,
                }),
              ),
          ...restProps,
        })
      }
    </Query>
  )
}

export default Cities
