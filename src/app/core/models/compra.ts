export interface Compra {
    idCompra: number;
    idProveedor: number;
    idUsuario: number;
    tipoComprobante: string;
    serieComprobante: string;
    numeroComprobante: string;
    fecha: Date;
    impuesto: number;
    total: number;
    estado: boolean;
}
