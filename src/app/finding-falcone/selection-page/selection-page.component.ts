import { ActivatedRoute, Router } from '@angular/router';
import { SearchItem } from './../../shared/models/search-item.model';
import { Planet } from './../../shared/models/planet.model';
import { Vehicle } from './../../shared/models/vehicle.model';
import { DataService } from './shared/data.service';
import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { FormControlName, FormControl, FormGroup, FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { map } from 'rxjs/operators';

@Component({
    selector: 'app-selection-page',
    templateUrl: './selection-page.component.html',
    styleUrls: ['./selection-page.component.scss']
})
export class SelectionPageComponent implements OnInit {

    @ViewChild(FormGroupDirective) inputFormChild;

    vehicleList: Vehicle[] = [];
    sortedVehicleList: Vehicle[] = [];
    planetList: Planet[] = [];
    searchList: SearchItem[] = [];
    inputForm: FormGroup;
    isPlanningComplete: Boolean;

    constructor(private dataService: DataService,
        private cdr: ChangeDetectorRef,
        private router: Router,

        private formBuilder: FormBuilder, private actr: ActivatedRoute
    ) {
        this.actr.data.subscribe(data => {
            this.vehicleList = data.vehicleList;
            this.planetList = data.planetList;
        });
    }

    ngOnInit() {
        this.createForm();
    }

    private createForm(): void {
        this.inputForm = this.formBuilder.group({
            planet: ['', Validators.required],
            vehicle: ['', Validators.required]
        });
    }

    private onPlanetChange(planet) {
        if (planet) {
            this.sortedVehicleList = this.vehicleList.filter(ele => ele.maxDistance >= planet.distance && ele.totalNo > 0);
        }
    }

    private removePlanet(planet: Planet) {
        const index = this.planetList.findIndex(ele => ele.name === planet.name);
        this.planetList[index].isInSearchList = true;
        this.cdr.detectChanges();
    }

    private addPlanet(planetName: string) {
        const index = this.planetList.findIndex(ele => ele.name === planetName);
        this.planetList[index].isInSearchList = false;
    }

    private removeVehicle(vehicle: Vehicle) {
        const index = this.vehicleList.findIndex(ele => ele.name === vehicle.name);
        this.vehicleList[index].totalNo -= 1;
    }

    private addVehicle(vehicleName: string) {
        const index = this.vehicleList.findIndex(ele => ele.name === vehicleName);
        this.vehicleList[index].totalNo += 1;
    }

    private calculateTotalTime() {
        let time = 0;
        this.searchList.map(ele => { time += ele.totalTime; });
        return time;
    }

    private deleteSearchItem(item: SearchItem) {
        const index = this.searchList.findIndex(ele => ele.planet === item.planet);
        this.searchList.splice(index, 1);

        this.addPlanet(item.planet);
        this.addVehicle(item.vehicle);

        this.analyzePlanning();
        this.inputFormChild.resetForm();
    }

    private analyzePlanning() {
        if (this.searchList.length === 4) {
            this.isPlanningComplete = true;
        } else {
            this.isPlanningComplete = false;
        }
    }

    private onSubmit(isValid) {
        if (isValid) {
            const searchItem = new SearchItem().deserialize(this.inputForm.value);
            this.searchList.push(searchItem);
            this.removePlanet(this.inputForm.value.planet);
            this.removeVehicle(this.inputForm.value.vehicle);
            this.inputFormChild.resetForm();
            this.analyzePlanning();
        }
    }

    private findFalcone() {
        this.dataService.getResult(this.searchList).subscribe(res => {
            if (res.status) {
                this.router.navigate(['result', { planet: res.planet_name, status: res.status }]);
            } else if (!res.status) {
                this.router.navigate(['result', { status: res.status }]);
            }
        });
    }
}
