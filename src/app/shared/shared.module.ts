import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Directives

// Components
import { HeaderComponent } from './components/header/header/header.component';


// Design
import { MaterialModule } from '@material/material.module';

// Pipes
import { SafeUrlPipe } from './pipes/SafeUrl/SafeUrl.pipe';

@NgModule({
    declarations: [
        // Pipes
        SafeUrlPipe,

        // Directives

        // Components
        HeaderComponent,
    ],
    exports: [
        // Pipes
        SafeUrlPipe,

        // Directives

        // Components
        HeaderComponent,
        // Modules
        FormsModule,
        RouterModule,
        ReactiveFormsModule,
    ],
    imports: [CommonModule, RouterModule, MaterialModule, ReactiveFormsModule],
})
export class SharedModule {}
