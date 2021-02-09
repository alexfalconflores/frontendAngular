import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '@shared/shared.module';
import { MaterialModule } from '@material/material.module';
import { TituloPaginaComponent } from './components/tituloPagina/tituloPagina.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { RolComponent } from './components/rol/rol.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { CajasComponent } from './components/cajas/cajas.component';
import { VentasComponent } from './components/ventas/ventas.component';
import { IngresosComponent } from './components/ingresos/ingresos.component';
import { AlmacenComponent } from './components/almacen/almacen.component';
import { MetodoPagoComponent } from './components/metodoPago/metodoPago.component';
import { Tabla7Component } from './components/tabla7/tabla7.component';
import { EstadisticasComponent } from './components/estadisticas/estadisticas.component';
import { Tabla9Component } from './components/tabla9/tabla9.component';
import { Tabla10VentasComponent } from './components/tabla10Ventas/tabla10Ventas.component';



@NgModule({
    declarations: [
        TituloPaginaComponent,
        RolComponent,
        UsuariosComponent,
        UsuarioComponent,
        CajasComponent,
        VentasComponent,
        IngresosComponent,
        AlmacenComponent,
        MetodoPagoComponent,
        Tabla7Component,
        EstadisticasComponent,
        Tabla9Component,
        Tabla10VentasComponent,
    ],
    imports: [CommonModule, AdminRoutingModule, SharedModule, MaterialModule],
})
export class AdminModule {}
