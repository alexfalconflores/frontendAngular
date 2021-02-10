import {
    Directive,
    EventEmitter,
    HostBinding,
    HostListener,
    Output,
} from '@angular/core';

@Directive({
    selector: '[appDragDropUpload]',
})
export class DragDropUploadDirective {
    // tslint:disable-next-line: no-output-on-prefix
    @Output() onFileDropped = new EventEmitter<any>();
    // @HostBinding('style.background-color') private background = '#f5fcff';
    @HostBinding('style.opacity') private opacity = '1';
    // Dragover listener
    // tslint:disable-next-line: typedef
    @HostListener('dragover', ['$event']) onDragOver(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        // this.background = '#9ecbec';
        this.opacity = '0.8';
    }

    // Dragleave listener
    // tslint:disable-next-line: typedef
    @HostListener('dragleave', ['$event']) public onDragLeave(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        // this.background = '#f5fcff';
        this.opacity = '1';
    }

    // Drop listener
    // tslint:disable-next-line: typedef
    @HostListener('drop', ['$event']) public ondrop(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        // this.background = '#f5fcff';
        this.opacity = '1';
        const files = evt.dataTransfer.files;
        this.onFileDropped.emit(files);
        // if (files.length > 0) {
        // }
    }
    constructor() {}
}
