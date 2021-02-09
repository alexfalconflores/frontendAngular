import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '@shared/shared.module';
import { MaterialModule } from '@material/material.module';
import { TituloPaginaComponent } from './components/tituloPagina/tituloPagina.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { RolComponent } from './components/rol/rol.component';

@NgModule({
    declarations: [TituloPaginaComponent, RolComponent, UsuariosComponent],
    imports: [CommonModule, AdminRoutingModule, SharedModule, MaterialModule],
})
export class AdminModule {}
