import { EJSXTypes } from "../EJSXTypes";
import { ICoordinates, IInput, IInputModel } from "./IInput";

export class MapInput implements IInput {
    private value: string;
    private placeholder: string;
    private JSXType: EJSXTypes = EJSXTypes.MAP;
    private coordinates: ICoordinates;

    constructor(value: string, placeholder: string, coordinates: ICoordinates) {
        this.value = value;
        this.placeholder = placeholder;
        this.coordinates = coordinates;
    }

    generate(): IInputModel {
        return {
            id:"location",
            placeholder: this.placeholder,
            value: this.value,
            jsxType: this.JSXType,
            coordinates: this.coordinates
        }
    }
}