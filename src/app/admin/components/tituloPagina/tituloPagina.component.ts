import { Component, Input, OnInit } from '@angular/core';


@Component({
    selector: 'app-titulo-pagina',
    templateUrl: './tituloPagina.component.html',
    styleUrls: ['./tituloPagina.component.css'],
})
export class TituloPaginaComponent implements OnInit {

    @Input() titulo: string;

    @Input() fechaActual: any ;

    constructor() {
        // let now = moment();
    }

    ngOnInit() {}
}
