import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from '@shared/shared.module';
import { CoreModule } from '@core/core.module';

import { environment } from 'src/environments/environment.prod';
import { LayoutComponent } from './layout/layout.component';


@NgModule({
    declarations: [AppComponent, LayoutComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        SharedModule,
        CoreModule,
        HttpClientModule,
        BrowserAnimationsModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
