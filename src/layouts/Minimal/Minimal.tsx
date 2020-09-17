import React from 'react' 
import { makeStyles, Container } from '@material-ui/core' 

import { Topbar } from './components' 

const useStyles = makeStyles((_theme) => ({
  root: {
    height: '100%'
  },
  content: {
    height: '100%'
  }
})) 

const Minimal = (props:any) => {
  const { children } = props 

  const classes = useStyles() 

  return (
    <div className={classes.root}>
      <Topbar />
      <main className={classes.content}>
        <Container maxWidth="md">
          {children}
        </Container>
      </main>
    </div>
  ) 
} 

export default Minimal 
