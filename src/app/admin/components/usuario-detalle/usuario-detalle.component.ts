import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-usuario-detalle',
    templateUrl: './usuario-detalle.component.html',
    styleUrls: ['./usuario-detalle.component.css'],
})
export class UsuarioDetalleComponent implements OnInit {

    constructor(private router: Router) {}

    ngOnInit() {}

    cerrar() {
        this.router.navigate(['admin/usuario']);
    }
}
