import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
    name: 'SafeUrl',
})
export class SafeUrlPipe implements PipeTransform {
    constructor(private domSanitizer: DomSanitizer) {}
    transform(url: any): any {
        return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
    }
}
