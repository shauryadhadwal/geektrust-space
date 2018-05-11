import { Deserializable } from './deserializable.interface';
export class SearchItem implements Deserializable<SearchItem> {
    public planet: string;
    public vehicle: string;
    public totalTime: number;

    deserialize(input: any): SearchItem {
        this.planet = input.planet.name;
        this.vehicle = input.vehicle.name;
        this.totalTime = input.planet.distance / input.vehicle.speed;
        return this;
    }
}
