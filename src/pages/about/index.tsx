import React from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import { withLayout } from '../../hocs'
import { ProTip, Link, Copyright } from '../../components'
import { LAYOUT_TYPE } from '../../utils'

const About = () => {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Next.js with TypeScript example
        </Typography>
        <Link href="/">Go to the main page</Link>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  )
}

export default withLayout(About, LAYOUT_TYPE.MINIMAL)