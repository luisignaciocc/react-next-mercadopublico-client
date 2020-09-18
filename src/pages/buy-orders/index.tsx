import React, { useState, useEffect } from 'react'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { withLayout } from '../../hocs'
import { LAYOUT_TYPE } from '../../utils'
import { tableOptions, tableColumns } from '../../utils/ordersTable'
import { BuyOrder, BuyOrdersService } from '../../services'
import MUIDataTable from "mui-datatables"
import Loader from 'react-loader-spinner'
import { MainTheme } from '../../themes'
import BuyOrderModal from '../../components/pages/buy-orders/BuyOrderModal'

const ticket = process.env.TICKET_MERCADO_PUBLICO

const useStyles = makeStyles({
  table: {
    width: "100%",
  },
  loaderContainer: {
    width: "100%",
    height: '85vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

const About = () => {
  
  const classes = useStyles()

  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [openBuyOrderModal, setOpenBuyOrderModal] = useState<boolean>(false)
  const [buyOrders, setBuyOrders] = useState<BuyOrder[]>([])
  const [buyOrderCode, setBuyOrderCode] = useState<string|null>(null)
  const [buyOrdersService, setBuyOrdersService] = useState<BuyOrdersService|null>(null)
  
  const init = async () => {
    if(ticket) {
      let ordersService = new BuyOrdersService(ticket)
      setBuyOrdersService(ordersService)
      ordersService.list('02022014').then(data => {
        if(data && data.Listado) {
          setBuyOrders(data.Listado)
          setIsLoading(false)
        }
      })
    }
  }

  useEffect(() => {
    init()
  }, [])

  const viewOrder = (dataIndex:number) => {
    setBuyOrderCode(buyOrders[dataIndex].Codigo)
    setOpenBuyOrderModal(true)
  }

  const onCloseBuyOrderModal = () => {
    setOpenBuyOrderModal(false)
    setBuyOrderCode(null)
  }

  return (
    !isLoading ? 
      <Grid container>
        <BuyOrderModal open={openBuyOrderModal} onClose={onCloseBuyOrderModal} buyOrdersService={buyOrdersService} buyOrderCode={buyOrderCode} />
        {/* <Header action={refresh} /> */}
        <br />
        <MUIDataTable
          title={"Órdenes de Compra"}
          data={buyOrders}
          columns={tableColumns(viewOrder)}
          options={tableOptions}
          className={classes.table}
        />
      </Grid>
    :
    <div className={classes.loaderContainer}>
      <Loader
        type="Grid"
        color={MainTheme.palette.secondary.main}
        height={350}
        width={350}
      />
    </div>
  )
}

export default withLayout(About, LAYOUT_TYPE.MINIMAL)