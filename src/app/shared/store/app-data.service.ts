import { Planet } from './../models/planet.model';
import { Vehicle } from './../models/vehicle.model';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AppDataService {

    public readonly VEHICLES: Vehicle[] = [];
    public readonly PLANETS: Planet[] = [];

    constructor() { }

}
