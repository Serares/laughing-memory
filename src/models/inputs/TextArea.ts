import { EHTMLTypes } from "../EHTMLTypes";
import { EJSXTypes } from "../EJSXTypes";
import { IInput, IInputModel } from "./IInput";

export class TextArea implements IInput {
    private value: string;
    private placeholder: string;
    private JSXType: EJSXTypes = EJSXTypes.TEXTFIELD;
    private htmlType: EHTMLTypes;
    private name: string;
    private id: string;

    constructor(value: string, placeholder: string, htmlType: EHTMLTypes, id: string, name: string) {
        this.value = value;
        this.placeholder = placeholder;
        this.htmlType = htmlType;
        this.name = name;
        this.id = id;
    }

    generate(): IInputModel {
        return {
            id: this.id,
            name: this.name,
            placeholder: this.placeholder,
            value: this.value,
            htmlType: this.htmlType,
            jsxType: this.JSXType
        }
    }
}