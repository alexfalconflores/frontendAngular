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
import {
    MatSnackBarRef,
    MAT_SNACK_BAR_DATA,
} from '@angular/material/snack-bar';
// import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';

@NgModule({
    declarations: [AppComponent, LayoutComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        CoreModule,
        SharedModule,
        HttpClientModule,
        BrowserAnimationsModule,
    ],
    providers: [
        {
            provide: MatSnackBarRef,
            useValue: {},
        },
        {
            provide: MAT_SNACK_BAR_DATA,
            useValue: {},
        },
        // {
        //     provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
        //     useValue: { duration: 2500 },
        // },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
