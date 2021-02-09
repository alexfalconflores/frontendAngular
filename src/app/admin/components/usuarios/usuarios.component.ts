import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
    selector: 'app-usuarios',
    templateUrl: './usuarios.component.html',
    styleUrls: ['./usuarios.component.css'],
})
export class UsuariosComponent implements OnInit {
    titulo: string = 'usuarios';
    hoy: any = moment().format('LL');

    constructor() {
        // let now = moment();
    }

    ngOnInit() {}
}
