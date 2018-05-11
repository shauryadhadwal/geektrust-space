import { Observable } from 'rxjs';
import { DataService } from './data.service';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Vehicle } from '../../../shared/models/vehicle.model';

@Injectable({
    providedIn: 'root'
})
export class VehicleResolverService implements Resolve<Vehicle[]> {

    constructor(private dataService: DataService) { }

    resolve(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<Vehicle[]> {
        return this.dataService.getVehicles();
    }
}
