import { EHTMLTypes } from "../EHTMLTypes";
import { EJSXTypes } from "../EJSXTypes";
import { IInput, IInputModel } from "./IInput";

export class Basic implements IInput {
    private value: string;
    private placeholder: string;
    private JSXType: EJSXTypes = EJSXTypes.BASIC;
    private htmlType: EHTMLTypes;
    private label: string;
    private id: string;
    private name: string;

    constructor(value: string, placeholder: string, htmlType: EHTMLTypes, label: string, id: string, name: string) {
        this.value = value;
        this.placeholder = placeholder;
        this.htmlType = htmlType;
        this.label = label;
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
            label: this.label
        }
    }
}