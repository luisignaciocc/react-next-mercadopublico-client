import { LayoutType } from "./types"

export const LAYOUT_TYPE: LayoutType = {
	MINIMAL: "minimal",
	DEFAULT: "default",
}

export const getBuyOrderState = (state: number) => {
	switch (state) {
		case 4:
			return "Enviada a Provedor"
		case 6:
			return "Aceptada"
		case 9:
			return "Cancelada"
		case 12:
			return "Recepción Conforme"
		case 13:
			return "Pendiente de Recepcionar"
		case 14:
			return "Recepcionada Parcialmente"
		case 15:
			return "Recepción Conforme Incompleta"
		default:
			return "N/A"
	}
}
