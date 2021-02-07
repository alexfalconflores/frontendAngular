export interface Venta {
    idVenta: number;
    idCliente: number;
    idUsuario: number;
    tipoComprobante: string;
    serieComprobante: string;
    numeroComprobante: string;
    fecha: Date;
    impuesto: number;
    total: number;
    estado: string;
}
