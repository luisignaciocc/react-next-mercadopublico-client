import { Button, Typography } from "@material-ui/core"
import { MUIDataTableColumn } from "mui-datatables"
import React from "react"
import { getBuyOrderState } from "."

export const tableOptions = {
    rowsPerPageOptions: [10, 15, 25],
    selectableRowsHeader: false,
    selectableRowsHideCheckboxes: true,
    textLabels: {
        body: {
            noMatch: "No se encontraron coincidencias",
            toolTip: "Ordenar",
            columnHeaderTooltip: (column:MUIDataTableColumn) => `Ordernar pot ${column.label}`
        },
        pagination: {
            next: "Página siguiente",
            previous: "Página Anterior",
            rowsPerPage: "Filas por Página:",
            displayRows: "de",
        },
        toolbar: {
            search: "Buscar",
            downloadCsv: "Descargar CSV",
            print: "Imprimir",
            viewColumns: "Ver Columnas",
            filterTable: "Filtrar Tabla",
        },
        filter: {
            all: "Todo",
            title: "FILTROS",
            reset: "RESETEAR",
        },
        viewColumns: {
            title: "Mostrar Columnas",
            titleAria: "Mostrar/Ocultar Columnas",
        },
        selectedRows: {
            text: "fila(s) seleccionadas",
            delete: "Eliminar",
            deleteAria: "Eliminar Filas Seleccionadas",
        },
    }
}

export const tableColumns = (action:(dataIndex:number) => void) => [
    {
        name: "Codigo",
        label: "Código",
        options: {
            customBodyRender: (value:number) => <Typography component={'span'} noWrap>{value}</Typography>
        }
    },
    {
        name: "Nombre",
        label: "Nombre",
        options: {

        }
    },
    {
        name: "CodigoEstado",
        label: "Estado",
        options: {
            customBodyRender: (value:number) => getBuyOrderState(value)
        }
    },
    {
        name: "",
        label: "Acciones",
        options: {
            customBodyRenderLite: (dataIndex:number) => {
                return (
                    <Button variant="contained" color="secondary" onClick={() => action(dataIndex)}>Ver</Button>
                )
            }
        }
    },
]