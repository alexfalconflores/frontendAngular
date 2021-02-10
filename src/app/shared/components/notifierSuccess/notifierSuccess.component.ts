import { Component, Inject, OnInit } from '@angular/core';
import { MatSnackBarRef, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
    selector: 'app-notifierSuccess',
    templateUrl: './notifierSuccess.component.html',
    styleUrls: ['./notifierSuccess.component.css'],
})
export class NotifierSuccessComponent implements OnInit {
    constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any,
    public snackBarRef: MatSnackBarRef<NotifierSuccessComponent>) {}

    ngOnInit() {}
}
