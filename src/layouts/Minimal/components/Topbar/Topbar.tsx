import React from 'react' 
import clsx from 'clsx' 
import { makeStyles } from '@material-ui/core' 
import { AppBar, Toolbar } from '@material-ui/core'

const useStyles = makeStyles(_theme => ({
  root: {
    boxShadow: 'none'
  },
  brand: {
    height: 30,
  }
})) 

type Props = {
  className?: string,
}

const Topbar = (props:Props) => {
  const { className, ...rest } = props 

  const classes = useStyles() 

  return (
    <AppBar
      {...rest}
      className={clsx(classes.root, className)}
      color="primary"
      position="static"
    >
      <Toolbar>
        {/* <Link href="/home"> */}
          {/* <img
            className={classes.brand}
            alt="Logo"
            src="/images/logo.svg"
          /> */}
        {/* </Link> */}
      </Toolbar>
    </AppBar>
  ) 
} 

export default Topbar 
