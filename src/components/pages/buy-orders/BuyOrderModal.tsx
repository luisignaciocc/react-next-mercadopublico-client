import React, {useEffect, useState} from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import { BuyOrdersByCodeModel, BuyOrdersService, Item } from '../../../services'
import { Backdrop, Grid, Typography } from '@material-ui/core'
import Loader from 'react-loader-spinner'
import { MainTheme } from '../../../themes'

interface Props {
    open:boolean
    onClose:() => void
    buyOrdersService: BuyOrdersService|null
    buyOrderCode:string|null
}

const BuyOrderModal = (props:Props) => {

    const { open, onClose, buyOrdersService, buyOrderCode } = props

    const [isLoaded, setIsLoaded] = useState(false)
    const [buyOrder, setBuyOrder] = useState<BuyOrdersByCodeModel|null>(null)

    const init = async () => {
        if(buyOrdersService && buyOrderCode) {
            buyOrdersService.get(buyOrderCode).then(data => {
                if(data) {
                    console.log(data)
                    setBuyOrder(data)
                    setIsLoaded(true)
                } else {
                    setTimeout(() => {
                        onClose()
                    }, 2000)
                }
            })
        }
    }

    useEffect(() => {
        init()
    }, [open])

    const closeModal = () => {
        onClose()
        setIsLoaded(false)
        setBuyOrder(null)
    }

    return (
            <Dialog
                open={open}
                onClose={closeModal}
            >
                {
                    isLoaded ?
                        <>
                            <DialogTitle >{`Orden de Compra ${buyOrder?.Listado[0].Codigo}`}</DialogTitle>
                            <DialogContent dividers>
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <Typography variant="h4" align="center">Información</Typography> 
                                    </Grid>
                                    <span style={{ height: '30px', width: '100%' }} />
                                    <Grid item xs={2}>
                                        <Typography variant="h6">Nombre:</Typography> 
                                    </Grid>
                                    <Grid item xs={10}>
                                        <Typography variant="body1">{buyOrder?.Listado[0].Nombre}</Typography>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <Typography variant="h6">Estado:</Typography> 
                                    </Grid>
                                    <Grid item xs={10}>
                                        <Typography variant="body1">{buyOrder?.Listado[0].Estado}</Typography>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <Typography variant="h6">Descripcion:</Typography> 
                                    </Grid>
                                    <Grid item xs={10}>
                                        <Typography variant="body1">{buyOrder?.Listado[0].Descripcion}</Typography>
                                    </Grid>
                                    <span style={{ height: '30px', width: '100%' }} />
                                    <Grid item xs={12}>
                                        <Typography variant="h4" align="center">Fechas</Typography> 
                                    </Grid>
                                    <span style={{ height: '30px', width: '100%' }} />
                                    <Grid item xs={4}>
                                        <Typography variant="h6">Fecha de Creacion:</Typography> 
                                    </Grid>
                                    <Grid item xs={8}>
                                        <Typography variant="body1">{buyOrder?.Listado[0].Fechas.FechaCreacion}</Typography>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Typography variant="h6">Fecha de Aceptación:</Typography> 
                                    </Grid>
                                    <Grid item xs={8}>
                                        <Typography variant="body1">{buyOrder?.Listado[0].Fechas.FechaEnvio}</Typography>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Typography variant="h6">Fecha de Cancelación:</Typography> 
                                    </Grid>
                                    <Grid item xs={8}>
                                        <Typography variant="body1">{buyOrder?.Listado[0].Fechas.FechaAceptacion}</Typography>
                                    </Grid>
                                    <span style={{ height: '30px', width: '100%' }} />
                                    <Grid item xs={12}>
                                        <Typography variant="h4" align="center">Proveedor</Typography> 
                                    </Grid>
                                    <span style={{ height: '30px', width: '100%' }} />
                                    <Grid item xs={2}>
                                        <Typography variant="h6">Codigo:</Typography> 
                                    </Grid>
                                    <Grid item xs={10}>
                                        <Typography variant="body1">{buyOrder?.Listado[0].Proveedor.Codigo}</Typography>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <Typography variant="h6">Nombre:</Typography> 
                                    </Grid>
                                    <Grid item xs={10}>
                                        <Typography variant="body1">{buyOrder?.Listado[0].Proveedor.Nombre}</Typography>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <Typography variant="h6">Actividad:</Typography> 
                                    </Grid>
                                    <Grid item xs={10}>
                                        <Typography variant="body1">{buyOrder?.Listado[0].Proveedor.Actividad}</Typography>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <Typography variant="h6">Direccion:</Typography> 
                                    </Grid>
                                    <Grid item xs={10}>
                                        <Typography variant="body1">{buyOrder?.Listado[0].Proveedor.Direccion}, {buyOrder?.Listado[0].Proveedor.Comuna}</Typography>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <Typography variant="h6">Teléfono:</Typography> 
                                    </Grid>
                                    <Grid item xs={10}>
                                        <Typography variant="body1">{buyOrder?.Listado[0].Proveedor.FonoContacto}</Typography>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <Typography variant="h6">Correo:</Typography> 
                                    </Grid>
                                    <Grid item xs={10}>
                                        <Typography variant="body1">{buyOrder?.Listado[0].Proveedor.MailContacto}</Typography>
                                    </Grid>
                                    <span style={{ height: '30px', width: '100%' }} />
                                    {
                                        buyOrder?.Listado[0].Items &&
                                            <Grid item xs={12}>
                                                <Typography variant="h4" align="center">Items</Typography> 
                                            </Grid>
                                    }
                                    {
                                        buyOrder?.Listado[0].Items &&
                                            buyOrder?.Listado[0].Items.Listado.map((item:Item) => 
                                                <>
                                                    <span style={{ height: '50px', width: '100%' }} />
                                                    <Grid item xs={2}>
                                                        <Typography variant="h6">Producto:</Typography> 
                                                    </Grid>
                                                    <Grid item xs={10}>
                                                        <Typography variant="body1">{item.Producto}</Typography>
                                                    </Grid>
                                                    <Grid item xs={2}>
                                                        <Typography variant="h6">Categoria:</Typography> 
                                                    </Grid>
                                                    <Grid item xs={10}>
                                                        <Typography variant="body1">{item.Categoria}</Typography>
                                                    </Grid>
                                                    <Grid item xs={2}>
                                                        <Typography variant="h6">Cantidad:</Typography> 
                                                    </Grid>
                                                    <Grid item xs={10}>
                                                        <Typography variant="body1">{item.Cantidad}</Typography>
                                                    </Grid>
                                                    <Grid item xs={2}>
                                                        <Typography variant="h6">Precio:</Typography> 
                                                    </Grid>
                                                    <Grid item xs={10}>
                                                        <Typography variant="body1">{item.PrecioNeto} {item.Moneda}</Typography>
                                                    </Grid>
                                                    <Grid item xs={2}>
                                                        <Typography variant="h6">Total:</Typography> 
                                                    </Grid>
                                                    <Grid item xs={10}>
                                                        <Typography variant="body1">{item.Total} {item.Moneda}</Typography>
                                                    </Grid>
                                                </>
                                            )
                                    }
                                </Grid>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={closeModal} color="primary">
                                    Cerrar
                                </Button>
                            </DialogActions>
                        </>
                    :
                        <Backdrop
                        open={!isLoaded}
                        invisible={isLoaded}
                        >
                        <Loader
                            type="Puff"
                            color={MainTheme.palette.secondary.main}
                            height={300}
                            width={300}
                        />
                    </Backdrop>
                }
            </Dialog>
    )
}

export default BuyOrderModal