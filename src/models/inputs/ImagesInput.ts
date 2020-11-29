import { EJSXTypes } from "../EJSXTypes";
import { ICoordinates, IInput, IInputModel } from "./IInput";

export class ImagesInput implements IInput {
    private value: string;
    private placeholder: string;
    private JSXType: EJSXTypes = EJSXTypes.IMAGE;

    constructor(value: string, placeholder: string) {
        this.value = value;
        this.placeholder = placeholder;
    }

    generate(): IInputModel {
        return {
            id: "images",
            placeholder: this.placeholder,
            value: this.value,
            jsxType: this.JSXType,
        }
    }
}
