import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
    selector: 'app-cajas',
    templateUrl: './cajas.component.html',
    styleUrls: ['./cajas.component.css'],
})
export class CajasComponent implements OnInit {
    titulo: string = 'Caja';
    constructor() {}

    ngOnInit() {}
}
