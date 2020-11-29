import { EJSXTypes } from '../EJSXTypes';
import { EHTMLTypes } from '../EHTMLTypes';
// those are all models for frontend
export interface IItems {
    value: number;
    label: string;
};

export interface ICoordinates {
    lat: number;
    lng: number;
};
/**
 * label: is the unit of measurement
 */
export interface IInputModel {
    value: string;
    jsxType: EJSXTypes;
    placeholder: string;
    items?: IItems[];
    coordinates?: ICoordinates;
    htmlType?: EHTMLTypes,
    label?: string,
    id: string,
    name?: string
};

export interface IInput {
    generate(): IInputModel;
};