import { Component, Inject, OnInit } from '@angular/core';
import { MatSnackBarRef, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
    selector: 'app-notifierWarning',
    templateUrl: './notifierWarning.component.html',
    styleUrls: ['./notifierWarning.component.css'],
})
export class NotifierWarningComponent implements OnInit {
    constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any,
    public snackBarRef: MatSnackBarRef<NotifierWarningComponent>) {}

    ngOnInit() {}
}
