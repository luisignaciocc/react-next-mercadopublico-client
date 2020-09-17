import React from 'react' 
import { makeStyles } from '@material-ui/core/styles' 
import { Grid, Typography } from '@material-ui/core' 
import { NextPage } from 'next' 

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  },
  content: {
    paddingTop: 150,
    textAlign: 'center'
  },
  image: {
    marginTop: 50,
    display: 'inline-block',
    maxWidth: '100%',
    width: 560
  }
})) 

type Props = {
  statusCode: number,
  statusMessage?: string | null
}

const Error: NextPage<Props> = ({ statusCode }) => {
  const classes = useStyles() 


  const getErrorTitle = () => {
    switch (statusCode) {
      case 404:
        return 'La página que buscas no está aquí.'
      default:
        return 'La página que buscas no está aquí.' 
    }
  }
  const getErrorDescription = () => {
    switch (statusCode) {
      case 404:
        return "Verifica que no cometiste un error en la ruta.\nTrata de usar la navegación siempre que sea posible."
      default:
        return "Verifica que no cometiste un error en la ruta.\nTrata de usar la navegación siempre que sea posible."
    }
  }
  const getErrorImage = (): string => {
    switch (statusCode) {
      case 404:
        return '/images/page_not_found.svg'
      default:
        return '/images/page_not_found.svg' 
    }
  }

  return (
    <div className={classes.root}>
      <Grid
        container
        justify="center"
        spacing={4}
      >
        <Grid
          item
          lg={6}
          xs={12}
        >
          <div className={classes.content}>
            <Typography variant="h1">
              {getErrorTitle()}
            </Typography>
            <Typography variant="subtitle2">
              {getErrorDescription()}
            </Typography>
            {
              statusCode == 409? null : (
                  
                  <img
                    alt="Under development"
                    className={classes.image}
                    src={getErrorImage()}
                  />
              )
            }
          </div>
        </Grid>
      </Grid>
    </div>
  ) 
} 

Error.getInitialProps = async ({ props, res, err }: any) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return {
    ...props,
    statusCode: statusCode,
  }
}

export default Error 
