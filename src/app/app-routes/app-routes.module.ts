import { VehicleResolverService } from './../finding-falcone/selection-page/shared/vehicle-resolver.service';
import { PlanetResolverService } from './../finding-falcone/selection-page/shared/planet-resolver.service';
import { SelectionPageComponent } from './../finding-falcone/selection-page/selection-page.component';
import { LandingPageComponent } from '../finding-falcone/landing-page/landing-page.component';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ResultPageComponent } from '../finding-falcone/result-page/result-page.component';

const appRoutes = [
    {
        path: '', pathMatch: 'full', redirectTo: 'welcome'
    },
    {
        path: 'welcome', component: LandingPageComponent
    },
    {
        path: 'planning', component: SelectionPageComponent, resolve: {
            planetList: PlanetResolverService,
            vehicleList: VehicleResolverService
        }
    },
    {
        path: 'result', component: ResultPageComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            // { enableTracing: true } // <-- debugging purposes only
        )
    ],
    providers: [PlanetResolverService, VehicleResolverService],
    exports: [
        RouterModule
    ]
})
export class AppRoutesModule { }
