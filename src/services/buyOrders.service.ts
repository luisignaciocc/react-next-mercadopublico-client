import { API_BUY_ORDERS } from './uris'
import axios from 'axios'

export interface BuyOrdersByDateModel {
  Cantidad: number
  FechaCreacion: string
  Version: string
  Listado: BuyOrder[]
}

export interface BuyOrder {
  Codigo: string
  Nombre: string
  CodigoEstado: number
}

export interface BuyOrdersByCodeModel {
  Cantidad: number
  FechaCreacion: string
  Version: string
  Listado: BuyOrderDetailed[]
}

export interface BuyOrderDetailed {
  Codigo: string
  Nombre: string
  CodigoEstado: number
  Estado: string
  CodigoLicitacion: string
  Descripcion:string
  CodigoTipo:string
  Tipo:string
  TipoMoneda:string
  CodigoEstadoProveedor:number
  EstadoProveedor:string
  TieneItems:string
  PromedioCalificacion:number
  CantidadEvaluacion:number
  Descuentos:number
  Cargos:number
  TotalNeto:number
  PorcentajeIva:number
  Impuestos:number
  Total:number
  Financiamiento:string
  Pais:string
  TipoDespacho:string
  FormaPago:string
  Fechas:Fechas
  Comprador:Comprador
  Proveedor:Proveedor
  Items:Items
}

export interface Fechas {
  FechaCreacion:string
  FechaEnvio:string
  FechaAceptacion:string
  FechaCancelacion:string|null
  FechaUltimaModificacion:string
}

export interface Comprador {
  CodigoOrganismo:string
  NombreOrganismo:string
  RutUnidad:string
  CodigoUnidad:string
  NombreUnidad:string
  Actividad:string
  DireccionUnidad:string
  ComunaUnidad:string
  RegionUnidad:string
  Pais:string
  NombreContacto:string
  CargoContacto:string
  FonoContacto:string
  MailContacto:string
}

export interface Proveedor {
  Codigo:string
  Nombre:string
  Actividad:string
  CodigoSucursal:string
  NombreSucursal:string
  RutSucursal:string
  Direccion:string
  Comuna:string
  Region:string
  Pais:string
  NombreContacto:string
  CargoContacto:string
  FonoContacto:string
  MailContacto:string
}

export interface Items {
  Cantidad:number
  Listado:Item[]
}

export interface Item {
  Correlativo:number
  CodigoCategoria:number
  Categoria:string
  CodigoProducto:number
  Producto:string
  EspecificacionComprador:string
  EspecificacionProveedor:string
  Cantidad:number
  Unidad:string|null
  Moneda:string
  PrecioNeto:number
  TotalCargos:number
  TotalDescuentos:number
  TotalImpuestos:number
  Total:number
}

export class BuyOrdersService {

  private ticket: string|undefined

  constructor(ticket:string) {
    this.ticket = ticket
  }

  /**
   * Get the buy orders of the selected day
   * @param date The date of the consult
   */
  async list(date: string): Promise<BuyOrdersByDateModel|void> {
    return axios.get(API_BUY_ORDERS + `?fecha=${date}&ticket=${this.ticket}`)
    .then(response => {
        // console.log(response)
      return response.data
    }).catch(err => {
      console.log(err)
    })
  }

  /**
   * Get the info of the selected buy order
   * @param code The buy order code
   */
  async get(code: string): Promise<BuyOrdersByCodeModel|void> {
    return axios.get(API_BUY_ORDERS + `?codigo=${code}&ticket=${this.ticket}`)
    .then(response => {
        // console.log(response)
      return response.data
    }).catch(err => {
      console.log(err)
    })
  }
}