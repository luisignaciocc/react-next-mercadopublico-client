import React from 'react'
import clsx from 'clsx'
import {
  Breadcrumbs,
  Grid,
  Typography,
  makeStyles
} from '@material-ui/core'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import Link from 'src/components/Link'
import { DatePicker } from "@material-ui/pickers"
import moment from 'moment'

const useStyles = makeStyles((theme) => ({
  root: {},
  action: {
    marginBottom: theme.spacing(1),
    '& + &': {
      marginLeft: theme.spacing(1)
    }
  },
  headItem: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: theme.spacing(2)
  },
}))

interface Props {
  className?: string,
  action?: any,
  value?:any,
}

const Header = ({ className, action, value, ...rest }: Props) => {
  const classes = useStyles()

  return (
    <Grid
      className={clsx(classes.root, className)}
      container
      justify="space-between"
      spacing={3}
      {...rest}
    >
      <Grid item className={classes.headItem}>
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          <Link
            variant="body1"
            color="inherit"
            href="/"
          >
            Home
          </Link>
          <Typography
            variant="body1"
            color="textPrimary"
          >
            Órdenes de Compra
          </Typography>
        </Breadcrumbs>
        <Typography
          variant="h3"
          color="textPrimary"
        >
          Lista de Órdenes de Compra
        </Typography>
      </Grid>
      <Grid item>
        <DatePicker
          maxDate={moment().subtract(1, 'days')}
          value={value}
          onChange={date => action(date)}
          label="Listar para:"
          format="DD-MM-YYYY"
        />
      </Grid>
    </Grid>
  )
}

export default Header