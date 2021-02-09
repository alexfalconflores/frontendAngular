import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
    @ViewChild('one') one: ElementRef;
    @ViewChild('two') two: ElementRef;
    @ViewChild('three') three: ElementRef;
    @ViewChild('four') four: ElementRef;
    @ViewChild('five') five: ElementRef;
    @ViewChild('six') six: ElementRef;
    @ViewChild('seven') seven: ElementRef;
    @ViewChild('user') user: ElementRef;

    constructor(
        one: ElementRef,
        two: ElementRef,
        three: ElementRef,
        four: ElementRef,
        five: ElementRef,
        six: ElementRef,
        seven: ElementRef,
        user: ElementRef
    ) {}

    ngOnInit() {}

    mostrar() {
        this.one.nativeElement.style.visibility = 'visible';
        this.two.nativeElement.style.display = 'block';
        this.three.nativeElement.style.display = 'block';
        this.four.nativeElement.style.display = 'block';
        this.five.nativeElement.style.display = 'block';
        this.six.nativeElement.style.display = 'block';
        this.seven.nativeElement.style.display = 'block';
        this.user.nativeElement.style.paddingBottom = '0rem';
    }
    ocultar() {
        this.one.nativeElement.style.visibility = 'hidden';
        this.two.nativeElement.style.display = 'none';
        this.three.nativeElement.style.display = 'none';
        this.four.nativeElement.style.display = 'none';
        this.five.nativeElement.style.display = 'none';
        this.six.nativeElement.style.display = 'none';
        this.seven.nativeElement.style.display = 'none';
    }

    logout(){

    }
}
