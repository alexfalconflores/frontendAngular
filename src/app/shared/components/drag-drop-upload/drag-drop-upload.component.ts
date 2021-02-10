import { Component, OnInit } from '@angular/core';
import { NotifierService } from '@core/services/notifier/notifier.service';

@Component({
    selector: 'app-drag-drop-upload',
    templateUrl: './drag-drop-upload.component.html',
    styleUrls: ['./drag-drop-upload.component.css'],
})
export class DragDropUploadComponent implements OnInit {
    files: any = [];
    image$: string = '';
    name$: string;

    constructor(private notifierService: NotifierService) {}

    // tslint:disable-next-line: typedef
    ngOnInit() {}

    // tslint:disable-next-line: typedef
    uploadFileDragDrop(event) {
        // tslint:disable-next-line: prefer-for-of
        for (let index = 0; index < event.length; index++) {
            const file: any = event[index];
            const type = file.type;
            const size = file.size;
            if (
                type === 'image/png' ||
                type === 'image/jpg' ||
                type === 'image/jpeg' ||
                type === 'image/svg+xml'
            ) {
                if (size <= 500000) {
                    const reader = new FileReader();
                    reader.readAsDataURL(file);
                    console.log('reader ', reader);
                    reader.onload = () => {
                        this.image$ = reader.result.toString();
                        this.name$ = file.name;
                    };
                } else {
                    this.notifierService.showNotificationDanger(
                        'Pesa mucho el archivo'
                    );
                }
            } else {
                this.notifierService.showNotificationDanger(
                    'Formato no valido'
                );
            }
        }
    }
    // tslint:disable-next-line: typedef
    uploadFileClick(event) {
        const file = event.target.files[0];
        const type = file.type;
        const size = file.size;
        if (
            type === 'image/png' ||
            type === 'image/jpg' ||
            type === 'image/jpeg' ||
            type === 'image/svg+xml'
        ) {
            if (size <= 500000) {
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = () => {
                    this.image$ = reader.result.toString();
                    this.name$ = file.name;
                };
            } else {
                alert('Imagen muy grande ' + size);
            }
        } else {
            alert('Formato no valido ' + type);
        }
    }
}
