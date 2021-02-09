import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { AlmacenComponent } from './components/almacen/almacen.component';
import { CajasComponent } from './components/cajas/cajas.component';
import { IngresosComponent } from './components/ingresos/ingresos.component';
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
