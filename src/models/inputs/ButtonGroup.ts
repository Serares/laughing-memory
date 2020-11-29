import { EJSXTypes } from '../EJSXTypes';
import { IInput, IItems, IInputModel } from './IInput';

/**
 * radio input is formed from a ButtonField material-ui JSX element
 */
export class ButtonGroup implements IInput {
    private _items: IItems[];
    private _value: string;
    private _placeholder: string;
    private _jsxType: EJSXTypes = EJSXTypes.BUTTONGROUP;
    private id: string;
    private label: string;

    constructor(items: IItems[], value: string, placeholder: string, id: string, label: string) {
        this._items = items;
        this._value = value;
        this._placeholder = placeholder;
        this.id = id;
        this.label = label;
    }

    generate(): IInputModel {
        return {
            label: this.label,
            items: this._items,
            placeholder: this._placeholder,
            value: this._value,
            jsxType: this._jsxType,
            id: this.id
        };
    }
}