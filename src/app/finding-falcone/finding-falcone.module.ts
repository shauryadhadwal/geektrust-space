import { DataService } from './selection-page/shared/data.service';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ResultPageComponent } from './result-page/result-page.component';
import { SelectionPageComponent } from './selection-page/selection-page.component';
import { SortPlanetsPipe } from './selection-page/shared/sort-planets.pipe';

@NgModule({
    imports: [
        SharedModule
    ],
    declarations: [LandingPageComponent, ResultPageComponent, SelectionPageComponent, SortPlanetsPipe],
    providers: [DataService]
})
export class FindingFalconeModule { }
