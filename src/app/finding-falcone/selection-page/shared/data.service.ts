import { SearchItem } from './../../../shared/models/search-item.model';
import { Planet } from './../../../shared/models/planet.model';
import { Vehicle } from './../../../shared/models/vehicle.model';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    constructor(
        private http: HttpClient

    ) { }

    public getVehicles(): Observable<Vehicle[]> {
        const url = 'https://findfalcone.herokuapp.com/vehicles';
        return this.http.get<Vehicle[]>(url)
            .pipe(map(array => {
                if (!array || array.length === 0) {
                    return [];
                }
                return array.map(ele => new Vehicle().deserialize(ele));
            }));
    }

    public getPlanets(): Observable<Planet[]> {
        const url = 'https://findfalcone.herokuapp.com/planets';

        return this.http.get<Planet[]>(url)
            .pipe(map(array => {
                if (!array || array.length === 0) {
                    return [];
                }
                return array.map(ele => new Planet().deserialize(ele));
            }));
    }

    private getToken(): Observable<any> {
        const tokenUrl = 'https://findfalcone.herokuapp.com/token';
        const headers = new HttpHeaders()
            .set('Accept', 'application/json');
        return this.http.post(tokenUrl, null, { headers: headers });
    }

    private prepareResultBody(list: SearchItem[], token: any): any {
        const body = {
            token: token.token,
            planet_names: [],
            vehicle_names: []
        };

        list.forEach(element => {
            body.planet_names.push(element.planet);
            body.vehicle_names.push(element.vehicle);
        });

        return JSON.stringify(body);
    }

    public getResult(list: SearchItem[]): Observable<any> {
        const url = 'https://findfalcone.herokuapp.com/find';
        const headers = new HttpHeaders()
            .set('Accept', 'application/json')
            .set('Content-Type', 'application/json');

        return this.getToken().pipe(mergeMap(_token => {
            const body = this.prepareResultBody(list, _token);
            return this.http.post(url, body, { headers: headers });
        }));
    }
}
