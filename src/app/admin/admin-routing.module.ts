import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { AlmacenComponent } from './components/almacen/almacen.component';
import { CajasComponent } from './components/cajas/cajas.component';
import { IngresosComponent } from './components/ingresos/ingresos.component';
import { UsuarioDetalleComponent } from './components/usuario-detalle/usuario-detalle.component';
import { UsuarioEditarComponent } from './components/usuario-editar/usuario-editar.component';
import { UsuarioNuevoComponent } from './components/usuario-nuevo/usuario-nuevo.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { VentasComponent } from './components/ventas/ventas.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: 'usuario',
                component: UsuariosComponent,
            },
            {
                path: 'usuario/nuevo',
                component: UsuarioNuevoComponent,
            },
            {
                path: 'usuario/editar',
                component: UsuarioEditarComponent,
            },
            {
                path: 'usuario/detalle',
                component: UsuarioDetalleComponent,
            },
            {
                path: 'caja',
                component: CajasComponent,
            },
            {
                path: 'ventas',
                component: VentasComponent,
            },
            {
                path: 'ingresos',
                component: IngresosComponent,
            },
            {
                path: 'almacen',
                component: AlmacenComponent,
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AdminRoutingModule {}
