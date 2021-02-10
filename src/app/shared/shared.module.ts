import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Directives
import { DropDirective } from './directives/drop/drop.directive';
import { DragDropUploadDirective } from './directives/drag-drop-upload/drag-drop-upload.directive';

// Components
import { HeaderComponent } from './components/header/header.component';

// Design
import { MaterialModule } from '@material/material.module';

// Pipes
import { SafeUrlPipe } from './pipes/SafeUrl/SafeUrl.pipe';
import { DragDropUploadComponent } from './components/drag-drop-upload/drag-drop-upload.component';
import { NotifierSuccessComponent } from './components/notifierSuccess/notifierSuccess.component';
import { NotifierDangerComponent } from './components/notifierDanger/notifierDanger.component';
import { NotifierWarningComponent } from './components/notifierWarning/notifierWarning.component';
import { NotifierInfoComponent } from './components/notifierInfo/notifierInfo.component';

@NgModule({
    declarations: [
        // Pipes
        SafeUrlPipe,

        // Directives
        DragDropUploadDirective,

        // Components
        HeaderComponent,
        DragDropUploadComponent,
        NotifierSuccessComponent,
        NotifierDangerComponent,
        NotifierWarningComponent,
        NotifierInfoComponent,
    ],
    exports: [
        // Pipes
        SafeUrlPipe,

        // Directives
        DragDropUploadDirective,

        // Components
        HeaderComponent,
        DragDropUploadComponent,
        NotifierSuccessComponent,
        NotifierDangerComponent,
        NotifierWarningComponent,
        NotifierInfoComponent,

        // Modules
        FormsModule,
        RouterModule,
        ReactiveFormsModule,
    ],
    imports: [CommonModule, RouterModule, MaterialModule, ReactiveFormsModule],
})
export class SharedModule {}
