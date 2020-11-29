import { EHTMLTypes } from "../EHTMLTypes";
import { EJSXTypes } from "../EJSXTypes";
import { IInput, IInputModel, IItems } from "./IInput";

export class Select implements IInput {
    private items: IItems[];
    private value: string;
    private placeholder: string;
    private JSXType: EJSXTypes = EJSXTypes.SELECT;
    private htmlType: EHTMLTypes;
    private id: string;
    private name: string;

    constructor(value: string, items: IItems[], placeholder: string, htmlType: EHTMLTypes, id: string, name: string) {
        this.value = value;
        this.placeholder = placeholder;
        this.htmlType = htmlType;
        this.items = items;
        this.id = id;
        this.name = name;
    }

    generate(): IInputModel {
        return {
            id: this.id,
            name: this.name,
            placeholder: this.placeholder,
            value: this.value,
            htmlType: this.htmlType,
            jsxType: this.JSXType,
            items: this.items
        }
    }
}