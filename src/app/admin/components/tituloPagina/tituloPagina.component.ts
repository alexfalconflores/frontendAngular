import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';


@Component({
    selector: 'app-titulo-pagina',
    templateUrl: './tituloPagina.component.html',
    styleUrls: ['./tituloPagina.component.css'],
})
export class TituloPaginaComponent implements OnInit {

    @Input() titulo: string;

    hoy: any = moment().format('LL');

    constructor() {
        // let now = moment();
    }

    ngOnInit() {}
}
