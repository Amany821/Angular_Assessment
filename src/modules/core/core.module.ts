import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
    declarations: [
    LoadingSpinnerComponent,
    HeaderComponent
],
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
    ],
    exports: [
        LoadingSpinnerComponent,
        HeaderComponent
    ]
})
export class CoreModule { }
