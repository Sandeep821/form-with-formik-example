import React from 'react'
import {Query} from 'react-apollo'
import gql from 'graphql-tag'

export const ACTIVITYTYPES_QUERY = gql`
  query ACTIVITYTYPES_QUERY {
    activity_types {
      ref_id
      name
      distinct_type
    }
  }
`

function ActivityTypes({children, ...props}) {
  return (
    <Query query={ACTIVITYTYPES_QUERY} {...props}>
      {({data, ...restProps}) =>
        children({
          activityTypes: restProps.loading
            ? []
            : data.activity_types.map(activity => ({
                ...activity,
                value: activity.name,
                label: activity.name,
              })),
          ...restProps,
        })
      }
    </Query>
  )
}

export default ActivityTypes
