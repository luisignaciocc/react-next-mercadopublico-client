import React, {useEffect, useState} from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import { BuyOrdersByCodeModel, BuyOrdersService } from '../../../services'
import { Backdrop } from '@material-ui/core'
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
                            <DialogContent>
                                <DialogContentText id="alert-dialog-description">
                                    Let Google help apps determine location. This means sending anonymous location data to
                                    Google, even when no apps are running.
                                </DialogContentText>
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