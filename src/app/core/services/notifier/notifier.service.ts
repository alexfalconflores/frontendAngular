import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotifierDangerComponent } from '@shared/components/notifierDanger/notifierDanger.component';
import { NotifierInfoComponent } from '@shared/components/notifierInfo/notifierInfo.component';
import { NotifierSuccessComponent } from '@shared/components/notifierSuccess/notifierSuccess.component';
import { NotifierWarningComponent } from '@shared/components/notifierWarning/notifierWarning.component';

@Injectable({
    providedIn: 'root',
})
export class NotifierService {
    constructor(private snackBar: MatSnackBar) {}

    // tslint:disable-next-line: typedef
    showNotificationSuccess(displayMessage: string) {
        this.snackBar.openFromComponent(NotifierSuccessComponent, {
            data: {
                message: displayMessage
            },
            duration: 5000,
            horizontalPosition: 'right',
            verticalPosition: 'top',
        });
    }
    // tslint:disable-next-line: typedef
    showNotificationDanger(displayMessage: string) {
        this.snackBar.openFromComponent(NotifierDangerComponent, {
            data: {
                message: displayMessage
            },
            duration: 5000,
            horizontalPosition: 'right',
            verticalPosition: 'top',
        });
    }
    // tslint:disable-next-line: typedef
    showNotificationWarning(displayMessage: string) {
        this.snackBar.openFromComponent(NotifierWarningComponent, {
            data: {
                message: displayMessage
            },
            duration: 5000,
            horizontalPosition: 'right',
            verticalPosition: 'top',
        });
    }
    // tslint:disable-next-line: typedef
    showNotificationInfo(displayMessage: string) {
        this.snackBar.openFromComponent(NotifierInfoComponent, {
            data: {
                message: displayMessage
            },
            duration: 5000,
            horizontalPosition: 'right',
            verticalPosition: 'top',
        });
    }
}
