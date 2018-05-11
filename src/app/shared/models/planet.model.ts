import { Deserializable } from './deserializable.interface';
export class Planet implements Deserializable<Planet> {
    public name: string;
    public distance: number;
    public isInSearchList = false;

    public deserialize(input: any): Planet {
        Object.assign(this, input);
        return this;
    }
}
