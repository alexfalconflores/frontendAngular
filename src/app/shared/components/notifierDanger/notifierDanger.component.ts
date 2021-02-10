import { Component, Inject, OnInit } from '@angular/core';
import { MatSnackBarRef, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { NotifierSuccessComponent } from '../notifierSuccess/notifierSuccess.component';

@Component({
    selector: 'app-notifierDanger',
    templateUrl: './notifierDanger.component.html',
    styleUrls: ['./notifierDanger.component.css'],
})
export class NotifierDangerComponent implements OnInit {
    constructor(
        @Inject(MAT_SNACK_BAR_DATA) public data: any,
        public snackBarRef: MatSnackBarRef<NotifierDangerComponent>
    ) {}

    ngOnInit(): void {
    }
}
