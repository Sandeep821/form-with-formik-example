import {Link as ReachLink} from '@reach/router'
import styled from '@emotion/styled'
import {primary, darkPrimary} from '../styles/variables'

const Link = styled(ReachLink)({
  color: primary,
  ':hover': {
    color: darkPrimary,
  },
})

export default Link
