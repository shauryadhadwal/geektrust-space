import { Deserializable } from './deserializable.interface';

export class Vehicle implements Deserializable<Vehicle> {
    public name;
    public totalNo;
    public maxDistance;
    public speed;

    public deserialize(input: any): Vehicle {
        this.totalNo = input.total_no;
        this.maxDistance = input.max_distance;
        this.name = input.name;
        this.speed = input.speed;
        return this;
    }
}

