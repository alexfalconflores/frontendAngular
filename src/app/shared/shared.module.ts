import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Directives

// Components

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
    ],
    exports: [
        // Pipes
        SafeUrlPipe,

        // Directives

        // Components

        // Modules
        FormsModule,
        RouterModule,
        ReactiveFormsModule,
    ],
    imports: [CommonModule, RouterModule, MaterialModule, ReactiveFormsModule],
})
export class SharedModule {}
