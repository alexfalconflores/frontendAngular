import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NotifierService } from '@core/services/notifier/notifier.service';

@Component({
    selector: 'app-usuario-editar',
    templateUrl: './usuario-editar.component.html',
    styleUrls: ['./usuario-editar.component.css'],
})
export class UsuarioEditarComponent implements OnInit {
    @ViewChild('fileInput') fileInput: ElementRef;
    files: any = [];
    image$: string = '';
    name$: string;

    constructor(
        private notifierService: NotifierService,
        private router: Router
    ) {}

    ngOnInit() {}

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

    editar(){
        this.notifierService.showNotificationWarning('Usuario Editado');
    }

    cerrar() {
        this.image$ = '';
        this.fileInput.nativeElement.value = '';
        console.log('File: ', this.fileInput.nativeElement.value);
        this.router.navigate(['admin/usuario']);
    }
}
