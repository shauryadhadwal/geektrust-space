import { Planet } from './../../../shared/models/planet.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'sortPlanets',
    pure: false
})
export class SortPlanetsPipe implements PipeTransform {

    transform(value: Planet[], args?: any): any {
        return value.filter(ele => ele.isInSearchList === false);
    }
}
