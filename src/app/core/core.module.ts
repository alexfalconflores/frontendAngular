import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticuloService } from './services/articulo/articulo.service';
import { CategoriaService } from './services/categoria/categoria.service';
import { ClienteService } from './services/cliente/cliente.service';
import { CompraService } from './services/compra/compra.service';
import { DetalleCompraService } from './services/detalleCompra/detalleCompra.service';
import { DetalleVentaService } from './services/detalleVenta/detalleVenta.service';
import { PagoService } from './services/pago/pago.service';
import { ProveedorService } from './services/proveedor/proveedor.service';
import { RolService } from './services/rol/rol.service';
import { TipoPagoService } from './services/tipoPago/tipoPago.service';
import { UsuarioService } from './services/usuario/usuario.service';
import { VentaService } from './services/venta/venta.service';
import { NotifierService } from './services/notifier/notifier.service';


@NgModule({
    declarations: [],
    imports: [CommonModule],
    providers: [
        ArticuloService,
        CategoriaService,
        ClienteService,
        CompraService,
        DetalleCompraService,
        DetalleVentaService,
        PagoService,
        ProveedorService,
        RolService,
        TipoPagoService,
        UsuarioService,
        VentaService,
        NotifierService,
    ],
})
export class CoreModule {}
