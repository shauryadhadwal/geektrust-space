import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { AngularMaterialModule } from './material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule,
        AngularMaterialModule,
        ReactiveFormsModule,
        FormsModule,
    ],
    exports: [
        ReactiveFormsModule,
        FormsModule,
        CommonModule,
        AngularMaterialModule
    ],
    declarations: []
})
export class SharedModule { }
