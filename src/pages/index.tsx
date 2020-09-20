import React from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import { withLayout } from 'src/hocs'
import { Link, Copyright } from 'src/components'
import { LAYOUT_TYPE } from 'src/utils'
import { Button } from '@material-ui/core'

const Index = () => {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Box style={{ width: "100%", height: "50px" }} />
        <Box style={{ textAlign: "-webkit-center" as "center" }}>
          <img src="images/logo-chilecompra.png" style={{ maxWidth: "100%" }}/>
        </Box>
        <Box style={{ width: "100%", height: "50px" }} />
        <Typography variant="h3" component="h1" align="center" gutterBottom>
          Mercado Público
        </Typography>
        <Box style={{ width: "100%", height: "30px" }} />
        <Typography variant="h4" align="center" gutterBottom>
          Consulta las órdenes de compra del día anterior registradas en la base de datos de 
        </Typography>
        <Typography variant="h4" align="center" gutterBottom>
          <Link href="https://www.mercadopublico.cl" color="secondary" target="_blank">
            mercadopublico.cl
          </Link>
        </Typography>
        <Box style={{ width: "100%", height: "50px" }} />
        <Typography variant="h4" align="center" gutterBottom>
          <Link href="/buy-orders" color="secondary" style={{ textDecoration: "none" }}>
            <Button color="primary" variant="contained" size="large">Consultar</Button>
          </Link>
        </Typography>
        <Box style={{ width: "100%", height: "100px" }} />
        <Box style={{ textAlign: "-webkit-center" as "center" }}>
          <img src="images/regiones-de-chile-13.png" style={{ maxWidth: "100%" }}/>
        </Box>
        <Box style={{ borderTop: "3px solid #3c5194", position: "relative", marginLeft: "calc(276px - 50vw)", width: "100vw", top: "-25px", zIndex: "-1" as unknow as number }} />
        <Box style={{ width: "100%", height: "100px" }} />
        <Copyright />
      </Box>
    </Container>
  )
}

export default withLayout(Index, LAYOUT_TYPE.DEFAULT)