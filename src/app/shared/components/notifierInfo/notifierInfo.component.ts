import { Component, Inject, OnInit } from '@angular/core';
import { MatSnackBarRef, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
    selector: 'app-notifierInfo',
    templateUrl: './notifierInfo.component.html',
    styleUrls: ['./notifierInfo.component.css'],
})
export class NotifierInfoComponent implements OnInit {
    constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any,
    public snackBarRef: MatSnackBarRef<NotifierInfoComponent>) {}

    ngOnInit() {}
}
