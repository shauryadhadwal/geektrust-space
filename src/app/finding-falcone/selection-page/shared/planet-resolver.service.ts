import { Observable } from 'rxjs';
import { DataService } from './data.service';
import { Planet } from './../../../shared/models/planet.model';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class PlanetResolverService implements Resolve<Planet[]> {

    constructor(private dataService: DataService) { }

    resolve(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<Planet[]> {
        return this.dataService.getPlanets();
    }
}
